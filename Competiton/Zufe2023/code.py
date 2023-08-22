from jqdatasdk import * # 数据接口
import pandas as pd
import numpy as np # 计算
from tqdm import tqdm as tq # 程序中加个进度条
import matplotlib.pyplot as plt # 绘图
from scipy.stats import norm # 正态分布
 
# 登录聚宽账号，便于后续数据提取
auth('UserID', 'Password')

start_date = '2015-01-01'
df = pd.DataFrame()

# 大致计算了以下，每次返回5000行数据，三次能把数据提取完毕
for _ in range(3):
    q = query(macro.MAC_LEND_RATE)\
        .filter(macro.MAC_LEND_RATE.market_id == '5')\
        .filter(macro.MAC_LEND_RATE.day > start_date)
    df_ = macro.run_query(q).sort_values(by='day').drop(columns=['id', 'currency_id', 'market_id', 'currency_name'])
    df = pd.concat([df, df_])
    start_date = df_['day'].iloc[-1]

# 代号对应天数
days = {1: 30, 3: 90, 6:180, 7: 7, 12: 360, 14: 14, 20: 1, 23: 270}
df['days'] = df['term_id'].map(days)
df

df_r = pd.DataFrame()
for day, tmp in df.groupby('day'):
    tmp = tmp[['days', 'interest_rate']].set_index('days').to_dict()['interest_rate']
    tmp = pd.Series(tmp, index=range(1, 361), name=day).interpolate('linear')
    df_r = pd.concat([df_r, tmp], axis=1)
df_r = df_r.T
# 这里得到我们第一个数据文件 interest_rate.csv
# df_r.to_csv('interest_rate.csv')
df_r

q = query(opt.OPT_CONTRACT_INFO).filter(opt.OPT_CONTRACT_INFO.underlying_symbol=='510050.XSHG')
opt_basic = opt.run_query(q)
# 这里得到我们第二个数据文件 opt_basic.csv
# opt_basic.to_csv('opt_basic.csv', index=False)
opt_basic

opt_price = pd.DataFrame()
for code in tq(opt_basic['code']):
    tmp = opt.run_query(query(opt.OPT_DAILY_PRICE).filter(opt.OPT_DAILY_PRICE.code==code))
    opt_price = pd.concat([opt_price, tmp])
opt_price.reset_index()
# 这里得到我们第三个数据文件 opt_price.csv
# opt_price.to_csv('opt_price.csv', index=False)
opt_price.reset_index(drop=True)

etf_price = get_price('510050.XSHG', start_date='2015-01-01', end_date='2022-03-30', fq=None)
# 这里得到我们第四个数据文件 etf_price.csv
# etf_price.to_csv('etf_price.csv')
etf_price

opt_basic = pd.read_csv('opt_basic.csv')

# 有用的字段
fields = ['code', 'trading_code', 'contract_type', 'exercise_price', 'list_date', 'delist_date','exercise_date']

# 将用于计算的字段转换成dict，用于map方法。
exe_date = opt_basic[fields].set_index('code')['exercise_date'].to_dict()
exe_price = opt_basic[fields].set_index('code')['exercise_price'].to_dict()
opt_type = opt_basic[fields].set_index('code')['contract_type'].apply(lambda x: 'call' if x=='CO' else 'put').to_dict()

opt_price = pd.read_csv('opt_price.csv')

# 提取计算需要的字段
fields = ['code', 'date', 'close']
opt_price = opt_price[fields].reset_index(drop=True)

# 时间格式处理
opt_price['exercise_date'] = opt_price['code'].map(exe_date)
opt_price['date'] = pd.to_datetime(opt_price['date'])
opt_price['exercise_date'] = pd.to_datetime(opt_price['exercise_date'])

opt_price['K'] = opt_price['code'].map(exe_price)
opt_price['opt_type'] = opt_price['code'].map(opt_type)
opt_price = opt_price.dropna()

# 计算距离行权日的时间
opt_price['T-days'] = (opt_price['exercise_date'] - opt_price['date']).apply(lambda x: x.days)
opt_price['T'] = opt_price['T-days'] / 360
opt_price = opt_price[opt_price['T-days'] > 0]
# 开始对应利率
opt_price['r'] = np.nan
opt_price

df_r = pd.read_csv('interest_rate.csv', index_col=0)
# 对上时间
for dt in tq(set(opt_price['date'])):
    try:
        df_r.loc[dt.strftime("%F"), :]
    except:
        df_r.loc[dt.strftime("%F"), :] = np.nan

# 其中有缺失值，做向下填充处理
df_r = df_r.sort_index().ffill()
df_r.columns = df_r.columns.astype(int)

for i, row in tq(opt_price.iterrows()):
    dt, tdays = row['date'].strftime("%F"), row['T-days']
    opt_price.loc[i, 'r'] = df_r.loc[dt, tdays] / 100

etf_price = pd.read_csv('etf_price.csv', index_col=0)
for dt in tq(set(opt_price['date'])):
    try:
        etf_price.loc[dt.strftime("%F"), :]
    except:
        etf_price.loc[dt.strftime("%F"), :] = np.nan
# etf_price = etf_price.sort_index().ffill()
etf_price.index = pd.DatetimeIndex(etf_price.index)
s = etf_price['close'].to_dict()
opt_price['S'] = opt_price['date'].map(s)
opt_price = opt_price.dropna()
opt_price
