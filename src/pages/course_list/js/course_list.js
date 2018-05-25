var nav_index = 1;

$(function(){
	$('#scroll-warp').height(document.body.clientHeight-$('#nav').height());console.log(new BScroll())

	new BScroll(document.getElementById('scroll-warp'), {
        click: true
    })
})