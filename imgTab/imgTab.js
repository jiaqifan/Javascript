window.onload = function()
{

	var oLoop = document.getElementById('loop');
	var oOrder = document.getElementById('order');
	var oIntroduction = document.getElementById('introduction');
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	var oCount = document.getElementById('count');
	var oTitle = document.getElementById('title');
	var oPic = document.getElementById('pic');

	var arrImg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
	var arrTitle = ['花朵1','花朵2','花朵3','花朵4'];
	var num = 0;

	function fnTab()
		{
			oCount.innerHTML = num + 1 + '/' + arrImg.length;
			oTitle.innerHTML = arrTitle[num];
			oPic.src = arrImg[num];
		};
		fnTab();

	oLoop.onclick = function()
	{

		oIntroduction.innerHTML = '图片可以从最后一张跳转到第一张循环切换';

		oPrev.onclick = function()
		{
			num--;
			if(num == -1)
			{
				num = arrImg.length - 1;
			};

			fnTab();
		};

		oNext.onclick = function()
		{

			num++;
			if(num == arrImg.length)
			{
				num = 0;
			};

			fnTab();
		};
		
	};

	oOrder.onclick = function()
	{

		oIntroduction.innerHTML = '图片可以从最后一张跳转到第一张循环切换';

		oPrev.onclick = function()
		{
			num--;
			if(num == -1)
			{
				num = 0;
				alert('这已经是第一张图片了');
			};

			fnTab();
		};

		oNext.onclick = function()
		{

			num++;
			if(num == arrImg.length)
			{
				num = arrImg.length-1;
				alert('这已经是最后一张图片了');
			};

			fnTab();
		};
		
	};

};