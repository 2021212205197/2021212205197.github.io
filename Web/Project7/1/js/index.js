$('body').on('click', (e)=>{
    let $b = $(e.currentTarget).children();
    $b.eq(0).children().eq(1).addClass('hide');
})
/* currentTarget返回触发节点 eq选取元素*/
$('body').on('click','.pic', (e)=>{
    PicOn(e);
    e.stopPropagation();/* 阻止 click 事件冒泡到父元素 */
})

function PicOn(e) {
    let t   = e.currentTarget;
    let len = $(t).parent().parent().children().length;
    let $d  = $(t).parent().next();
    $d.removeClass('hide');
    $d.find('.pic').remove();
    $d.append($(t).clone()); 
}
