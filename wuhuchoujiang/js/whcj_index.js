// JavaScript Document
	var pingKuan;
	var pingGao;
	var bili = function(mun){
		var oScale = mun/480;
		return oScale.toFixed(8);
	};
	function quanBujs(){
		pingKuan=$("#demo").width();
		pingGao = $(window).height();
		$(".cj_top").css({
			"width":pingKuan*bili(480)+"px",
			"height":pingKuan*bili(294)+"px"
		});
		$(".cj_tit").css({
			"width":pingKuan*bili(480)+"px",
			"height":pingKuan*bili(48)+"px",
			"padding-top":pingKuan*bili(10)+"px",
			"font-size":pingKuan*bili(26)+"px",
			"margin-top":pingKuan*bili(16)+"px",
			"margin-bottom":pingKuan*bili(10)+"px"
		});
		$(".box").css({
			"width":pingKuan*bili(460)+"px",
			"height":pingKuan*bili(414)+"px"
		});
		$(".cjdiv,.startBtn").css({
			"width":pingKuan*bili(152)+"px",
			"height":pingKuan*bili(131)+"px",
			"margin-right":pingKuan*bili(2)+"px",
			"margin-bottom":pingKuan*bili(2)+"px"
		});
		$(".box div.rightdiv").css({
			"margin-right":pingKuan*bili(0)+"px"
		});
		$(".cjdiv img,.startBtn img").css({
			"width":pingKuan*bili(146)+"px",
			"height":pingKuan*bili(125)+"px",
			"margin-left":pingKuan*bili(3)+"px",
			"margin-top":pingKuan*bili(3)+"px"
		});
		$(".cjdiv1").css({
			"left":pingKuan*bili(0)+"px",
			"top":pingKuan*bili(0)+"px"
		});
		$(".cjdiv2").css({
			"left":pingKuan*bili(154)+"px",
			"top":pingKuan*bili(0)+"px"
		});
		$(".cjdiv3").css({
			"left":pingKuan*bili(308)+"px",
			"top":pingKuan*bili(0)+"px"
		});
		$(".cjdiv4").css({
			"left":pingKuan*bili(308)+"px",
			"top":pingKuan*bili(133)+"px"
		});
		$(".cjdiv5").css({
			"left":pingKuan*bili(308)+"px",
			"top":pingKuan*bili(266)+"px"
		});
		$(".cjdiv6").css({
			"left":pingKuan*bili(154)+"px",
			"top":pingKuan*bili(266)+"px"
		});
		$(".cjdiv7").css({
			"left":pingKuan*bili(0)+"px",
			"top":pingKuan*bili(266)+"px"
		});
		$(".cjdiv8").css({
			"left":pingKuan*bili(0)+"px",
			"top":pingKuan*bili(133)+"px"
		});
		$(".startBtn").css({
			"left":pingKuan*bili(154)+"px",
			"top":pingKuan*bili(133)+"px"
		});
		$(".cj_btn").css({
			"width":pingKuan*bili(453)+"px",
			"height":pingKuan*bili(64)+"px",
			"line-height":pingKuan*bili(64)+"px",
			"font-size":pingKuan*bili(30)+"px",
			"margin-bottom":pingKuan*bili(16)+"px"
		});
		$(".cj_txt").css({
			"width":pingKuan*bili(460)+"px",
			"padding-top":pingKuan*bili(20)+"px",
			"padding-bottom":pingKuan*bili(20)+"px"
		});
		$(".cj_txt p").css({
			"width":pingKuan*bili(420)+"px",
			"line-height":pingKuan*bili(20)+"px",
			"font-size":pingKuan*bili(16)+"px",
			"padding-left":pingKuan*bili(15)+"px",
			"padding-right":pingKuan*bili(15)+"px"
		});
		$(".padP").css({
			"padding-bottom":pingKuan*bili(20)+"px"
		});
		$(".cj_wrap").css({
			"width":pingKuan*bili(460)+"px",
			"height":pingKuan*bili(384)+"px"
		});
		$(".cj_wrap li").css({
			"width":pingKuan*bili(224)+"px"
		});
		$(".cj_wrap li p").css({
			"width":pingKuan*bili(200)+"px",
			"font-size":pingKuan*bili(16)+"px",
			"line-height":pingKuan*bili(20)+"px",
			"padding-top":pingKuan*bili(10)+"px",
			"padding-bottom":pingKuan*bili(10)+"px"
		});
		$(".leftLI").css({
			"padding-right":pingKuan*bili(12)+"px"
		});
		$(".footer").css({
			"height":pingKuan*bili(50)+"px",
			"padding-top":pingKuan*bili(10)+"px",
			"margin-top":pingKuan*bili(20)+"px"
		});
		$(".footer p").css({
			"height":pingKuan*bili(20)+"px",
			"font-size":pingKuan*bili(14)+"px"
		});
		$(".tan").css({
			"height":pingGao*1.5+"px"
		});
		$(".jiluCon").css({
			"width":pingKuan*bili(380)+"px",
			"height":pingKuan*bili(335)+"px",
			"left":pingKuan*bili(50)+"px",
			"top":(pingGao-pingKuan*bili(335))/2+"px",
			"padding-bottom":pingKuan*bili(20)+"px"
		});
		$(".cj_h2").css({
			"width":pingKuan*bili(380)+"px",
			"height":pingKuan*bili(64)+"px",
			"line-height":pingKuan*bili(64)+"px",
			"font-size":pingKuan*bili(22)+"px"
		});
		$(".jiluCon table").css({
			"width":pingKuan*bili(340)+"px",
			"margin-bottom":pingKuan*bili(20)+"px"
		});
		$(".jiluCon table th").css({
			"width":pingKuan*bili(170)+"px",
			"height":pingKuan*bili(36)+"px"
		});
		$(".jiluCon table td").css({
			"width":pingKuan*bili(170)+"px",
			"padding-top":pingKuan*bili(10)+"px",
			"padding-bottom":pingKuan*bili(10)+"px"
		});
		$(".jiluCon table p").css({
			"font-size":pingKuan*bili(16)+"px"
		});
		$(".tanClose").css({
			"width":pingKuan*bili(170)+"px",
			"height":pingKuan*bili(52)+"px",
			"line-height":pingKuan*bili(52)+"px",
			"border-radius":pingKuan*bili(52)+"px",
			"font-size":pingKuan*bili(28)+"px"
		});
		$(".resultCon").css({
			"width":pingKuan*bili(380)+"px",
			"height":pingKuan*bili(226)+"px",
			"left":pingKuan*bili(50)+"px",
			"top":(pingGao-pingKuan*bili(256))/2+"px",
			"padding-bottom":pingKuan*bili(20)+"px",
			"padding-top":pingKuan*bili(30)+"px"
		});
		$(".cjResTxt").css({
			"width":pingKuan*bili(380)+"px",
			"height":pingKuan*bili(140)+"px",
			"padding-top":pingKuan*bili(30)+"px"
		});
		$(".cjResTxt p").css({
			"width":pingKuan*bili(380)+"px",
			"height":pingKuan*bili(30)+"px",
			"font-size":pingKuan*bili(20)+"px"
		});
		$(".cj_load").css({
			"width":pingKuan*bili(196)+"px",
			"height":pingKuan*bili(33)+"px"
		});
		$(".cj_load a").css({
			"width":pingKuan*bili(98)+"px",
			"height":pingKuan*bili(33)+"px"
		});
	};
	$(".cj_btn").click(function(){
		$(".jiluWrap").show();
	});
	$(".tanClose").click(function(){
		$(this).parents(".tan").hide();
	});
	window.onload=function(){
		setTimeout(function(){
			quanBujs();
			$("#demo").css("opacity",1);
		},100);
	};
	window.onresize = function(){
		quanBujs();
	};
	//横竖屏		
	function hengshuping(){
		if(window.orientation==180||window.orientation==0){setTimeout(function(){quanBujs();},100)};
		if(window.orientation==90||window.orientation==-90){setTimeout(function(){quanBujs();},100)};
	};
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
	window.addEventListener('load', hengshuping, false);
