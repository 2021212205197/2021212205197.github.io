// 当页面完全加载后（包括所有图像、JavaScript 文件、 CSS 文件等外部资源），就会触发 window 上面的 load 事件
window.addEventListener('load', function () {
    let tria = document.querySelectorAll(".triangle")
    var l1 = document.getElementById("link1")
    var l2 = document.getElementById("link2")
    var l3 = document.getElementById("link3")
    var l4 = document.getElementById("link4")
    l1.addEventListener('click', function () {
        alert("待收货数量")
    })
    l2.addEventListener('click', function () {
        alert("待发货数量")
    })
    l3.addEventListener('click', function () {
        alert("待付款数量")
    })
    l4.addEventListener('click', function () {
        alert("待评价数量")
    })
    tria[0].addEventListener('click', function () {
        window.open("http://www.zjjubao.com/")
    })
})
