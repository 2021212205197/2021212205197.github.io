// 当页面完全加载后（包括所有图像、JavaScript 文件、 CSS 文件等外部资源），就会触发 window 上面的 load 事件

window.addEventListener('load', function () {
    let item = document.querySelectorAll(".m-item")

    item[0].addEventListener('click', function () {
        // toggle()切换类函数
        this.classList.toggle("red")
        alert(this.innerHTML)
    })
    item[1].addEventListener('click', function () {
        alert(this.innerHTML)
        let i = new Date()
        this.innerHTML = i.getFullYear() + "-" + i.getMonth() + "-" + i.getDate()
    })
    item[2].addEventListener('click', function () {
        this.parentNode.classList.toggle("fn-active")
        alert(this.innerHTML)

    })
    item[3].addEventListener('click', function () {
        let i = item.length - 1
        console.log(i);
        // parentNode 读取父元素   removeChild 移除标签
        this.parentNode.removeChild(item[i])
        alert(this.innerHTML)

    })
    item[4].addEventListener('click', function () {
        // open 打开新窗口跳转
        window.open("https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword=%E5%A4%A9%E7%8C%AB%E8%B6%85%E5%B8%82+%E8%B6%85%E5%B8%82&clk1=9eebd67a72cdc0e42a045aae78fd11a5&upsId=9eebd67a72cdc0e42a045aae78fd11a5")
        alert(this.innerHTML)

    })
    item[5].addEventListener('click', function () {
        // createElement 创建li标签
        let i = document.createElement("li")
        i.innerText = "p9"
        // 在当前标签的父标签下面添加li
        this.parentNode.appendChild(i)
        alert(this.innerHTML)
    })
    item[6].addEventListener('click', function () {
        alert(this.innerHTML)
    })
    item[7].addEventListener('click', function () {
        //clientWidth获取当前窗口宽度
        this.style.width = document.body.clientWidth + "px"
        this.style.border = "2px solid #aaa"
        alert(this.innerHTML)
    })
})

