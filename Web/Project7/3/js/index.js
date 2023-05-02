var n = 0; //总数
var a = 0; 
$('body').on('click', '.m-add', (e) => {
  Add(e);
})

$('body').on('click', '.m-del', (e) => {
  Delete(e);
})

function Add(e) {
  let t = e.currentTarget;
  let item = 
  `<div class="m-mp">
    <div class="u-no">${++n}</div>
    <div class="m-info">test-information${++a}</div>
    <div class="m-del">Delete</div>
  </div>`
  $(t).prev().append(item);
}

function Delete(e) {
  let t = e.currentTarget;
  $(t).parent().remove();
  n--;
  ResetNum();
}

function ResetNum() {
  let ctl = $('.m-mp').children();
  let i = n;
  ctl.map((index,item)=>{
  	$(item).find('.m-no').text(n - (--i));
  })
}
