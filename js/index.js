var h = 0;
function addH(){
	if(h < 120){
		h+=5;
		document.getElementById("advertise").style.height = h+"px";
	}
	else{
		return;
	}
	setTimeout("addH()",30);
}
function subH(){
	if (h > 0){
		h-=5;
		document.getElementById("advertise").style.height = h+"px";
	}
	else{
		document.getElementById("advertise").style.display = "none";
		return;
	}
	setTimeout("subH()",30);
}
window.onload = function(){
	addH();
	setTimeout("subH()",50000);

	//轮播
	var container = document.getElementById('container-banner');
	var list = document.getElementById('list')
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');


	function animate(offset){
		var newLeft = parseInt(list.style.left) + offset
		list.style.left= newLeft + 'px';
		if(newLeft>-1226){
			list.style.left = -6130 + 'px';
		}
		if(newLeft<-6130){
			list.style.left = -1226 + 'px';
		}

	}


	prev.onclick = function(){
		animate(-1226);
	}
	next.onclick = function(){
		animate(1226);
	}
}
