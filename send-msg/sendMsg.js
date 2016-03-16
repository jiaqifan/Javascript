window.onload = function()
{
	var oPanel = document.getElementById('panel');
	var oImg = document.getElementById('img1');
	var oEnter = document.getElementById('enter');
	var oSend = document.getElementById('send');
	var onoff = true;


	oImg.onclick = function()
	{

		 if(onoff == true)
		 {
		 	oImg.src = 'img/2.png';
		 	onoff = false;
		 }else{

		 	oImg.src = 'img/1.png';
		 	onoff = true;
		 };
	};

	oSend.onclick = function()
	{
		oPanel.innerHTML = oEnter.value;
	};


};