	var imgs = document.getElementsByClassName('imgs');
	console.log(imgs);
	var spans = document.getElementsByTagName('span');
	var num=0;
window.onload = function() {
	banner();
}
function banner() {
		if (num >= imgs.length){
			num = 0;
		}
		for (var i = 0; i < imgs.length; i++) {
			if (num == i) {
				imgs[i].style.zIndex = 100;
				spans[i].className = 'focus';
			} else {
				imgs[i].style.zIndex = 1;
				spans[i].className = '';
			}
		}
		console.log(num);
		setTimeout(	function() {banner(++num);}, 3000);

	};
function aa(t){
	num=t;
	for (var i = 0; i < imgs.length; i++) {
			if (t == i) {
				imgs[i].style.zIndex = 100;
				spans[i].className = 'focus';
			} else {
				imgs[i].style.zIndex = 1;
				spans[i].className = '';
			}
		}
}
