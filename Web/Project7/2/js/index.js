var n = '1';

$('body').on('click', '.m-dhan', (e)=>{
    slideDoor(e);
})

function slideDoor(e) {
    let t = e.currentTarget;
    let next = $(t).attr('id');
    /* 实现上部按钮变换 */
    $(t).parent().find('.on').removeClass('on');
    $(t).addClass('on');
    /* 实现下部文章内容变换 */
    let ctl = $(t).parent().next().children();
    ctl.map((index,item)=>{
  	    let id = $(item).attr('id');
  		console.log(id);
  		if ( id === n) {
  	  		$(item).addClass('hide');
  		}
  		if ( id === next) {
  	  		$(item).removeClass('hide');
  		}
  	})
  	n = next;
}
