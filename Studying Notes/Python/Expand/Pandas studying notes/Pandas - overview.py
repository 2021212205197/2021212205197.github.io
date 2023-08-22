# Pandas 是 Python 语言的一个扩展程序库，用于数据分析。
# Pandas 是一个开放源码、BSD 许可的库，提供高性能、易于使用的数据结构和数据分析工具。
# Pandas 名字衍生自术语 "panel data"（面板数据）和 "Python data analysis"（Python 数据分析）。
# Pandas 一个强大的分析结构化数据的工具集，基础是 Numpy（提供高性能的矩阵运算）。
# Pandas 可以从各种文件格式比如 CSV、JSON、SQL、Microsoft Excel 导入数据。
# Pandas 可以对各种数据进行运算操作，比如归并、再成形、选择，还有数据清洗和数据加工特征。
# Pandas 广泛应用在学术、金融、统计学等各个数据分析领域。

# Pandas Series 类似表格中的一个列（column），类似于一维数组，可以保存任何数据类型。
#Series 由索引（index）和列组成，函数如下：

pandas.Series( data, index, dtype, name, copy)

# 参数说明：
· data：一组数据（ndarray类型）。
· index：数据索引标签，如果不指定，默认从 0 开始。
· dtype：数据类型，默认会自己判断。
· name：设置名称。
· copy：拷贝数据，默认为 False。
