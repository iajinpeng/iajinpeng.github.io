/**
 * Created by jinpeng on 2018/1/25.
 */


document.addEventListener('click', function (e) {
	if(e.target.nodeName.toLowerCase() === 'img'){
		if(e.target.parentNode.nodeName.toLowerCase() === 'a'){
			return;
		}
		if(document.getElementsByClassName('img-view')[0]){
			document.body.removeChild(document.getElementsByClassName('img-view')[0]);
			document.body.style.overflowY = 'auto';
			return;
		}
		var imgViewNode = document.createElement('div');
		imgViewNode.className = 'img-view';
		imgViewNode.innerHTML = '<div class="img-view-inner"><img src="' + e.target.src + '"></div>';
		document.body.style.overflowY = 'hidden';
		document.body.appendChild(imgViewNode);
	}
}, false)