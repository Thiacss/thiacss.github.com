// JavaScript Document
	var pingKuan;
	var biLi;
	function quanBujs(){
		pingKuan = $("#paihang").width();
		biLi = pingKuan/480;
		//动态css样式部分...
		$("#paihang").css({
			"height":biLi*756+"px"
		});
		$(".logo").css({
			"width":biLi*100+"px",
			"height":biLi*70+"px",
			"padding-top":biLi*26+"px",
			"padding-bottom":biLi*35+"px"
		});
		$(".phTit").css({
			"width":biLi*241+"px",
			"height":biLi*73+"px",
			"padding-bottom":biLi*30+"px",
			"margin-left":biLi*153+"px"
		});
		$("#list").css({
			"width":biLi*480+"px"
		});
		$("#list li").css({
			"height":biLi*40+"px",
			"line-height":biLi*40+"px"
		});
		$(".phMe").css({
			"padding-top":biLi*20+"px",
			"height":biLi*40+"px",
			"line-height":biLi*40+"px"
		});
		$(".phBtn").css({
			"padding-top":biLi*50+"px",
			"padding-left":biLi*60+"px",
			"width":biLi*420+"px",
			"height":biLi*119+"px"
		});
	};
	function hengshuping(){
		if(window.orientation==180||window.orientation==0){quanBujs();};
		if(window.orientation==90||window.orientation==-90){quanBujs();};
	}
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false); 
	window.addEventListener('load',hengshuping, false);	
