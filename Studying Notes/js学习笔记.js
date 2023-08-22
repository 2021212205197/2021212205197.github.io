//变量类
var a = xxx;// 设置变量
	//数字类变量
	var a = 10;
	var a = 3.14;
	var a = 010;// 前面为0表示八进制
	var a = 0x9;// 前面为0x表示16进制
	Number.MAX_VALUE// 数字型最大值
	Number.MIN_VALUE// 数字型最小值
	isNaN() // 判断是否为数字，返回false代表是数字
	//字符串类变量
	var a = 'XXXXXX"XXXX"XXXXX' or "XXXXX'XXXX'XXXXX";
	"\n \\ \' \" \t \b"// t = tab b = blank
	parseInt(string);
	parseFloat(string);
	Number();
	// 用算数隐式转换 “+-*/”
	

// 输入输出类
var a = prompt('XXXXXXXX:');// 输入
alert('XXX' + a + '\n');// 弹窗跳出文本框
console.log(msg);// 调试用，仅程序员可以看到

window.onload() // 方法用于在网页加载完毕后立刻执行的操作，
				// 即当 HTML 文档加载完毕后，立刻执行某个方法。
window.onload=function() {
	Func1();
	Func2();
	Func3();
}
document.getElementById("#bg").style.backgroundColor="#FFF"
# //id选择器
. //类选择器