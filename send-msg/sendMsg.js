window.onload = function()
{
	var oPanel = document.getElementById('panel');
	var oImg = document.getElementById('img1');
	var oEnter = document.getElementById('enter');
	var oSend = document.getElementById('send');
	var oImgcontent = document.getElementById('imgcontent');
	var onoff = true;
	var str = oPanel.innerHTML;


	oImg.onclick = function()
	{

		 if(onoff == true)
		 {
		 	oImg.src = 'img/2.png';
		 	onoff = false;
			oEnter.value = '';
		 }else{

		 	oImg.src = 'img/1.png';
		 	onoff = true;
			oEnter.value = '';
		 }
	};

	oSend.onclick = function()
	{
		if(onoff == true)
		{
			str = '<div>' + oImgcontent.innerHTML + oEnter.value + '</div>' + str;
			oPanel.innerHTML = str;
		}
		else{
			str = '<div class="second"><div class="secondcontent">' + oEnter.value + oImgcontent.innerHTML + '</div></div>' + str;
			oPanel.innerHTML = str;
			
		}
	};


};