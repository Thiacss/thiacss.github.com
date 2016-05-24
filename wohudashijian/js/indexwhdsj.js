// JavaScript Document
	var pingKuan;
	var pingGao;
	var oW;
	var oL;
	var bili = function(mun){
		var oScale = mun/480;
		return oScale.toFixed(8);
	};
	var yidongWidth;
	function quanBujs(){
		pingKuan=$("#demo").width();
		pingGao = $(window).height();
		oWidth=pingKuan*bili(116);
        oHeight=pingKuan*bili(291);
		$("#demo").css({
			"height":pingKuan*bili(800)+"px"
		});
		$(".slideBox,.fugaiceng").css({
			"height":pingKuan*bili(800)+"px"
		});
		$(".slideBox  li.pageLi").css({
			"width":pingKuan*bili(480)+"px",
			"height":pingKuan*bili(800)+"px"
		});
		$(".slideBox .prev,.slideBox .next").css({
			"width":pingKuan*bili(65)+"px",
			"height":pingKuan*bili(86)+"px",
			"top":pingKuan*bili(352)+"px"
		});
		$(".page").css({
			"height":pingKuan*bili(800)+"px"
		});
		$(".page2_img1").css({
			"height":pingKuan*bili(278)+"px",
			"left":pingKuan*bili(-480)+"px",
			"top":pingKuan*bili(0)+"px"
		});
		$(".page2_img2").css({
			"height":pingKuan*bili(278)+"px",
			"left":pingKuan*bili(480)+"px",
			"top":pingKuan*bili(144)+"px"
		});
		$(".page2_img3").css({
			"height":pingKuan*bili(278)+"px",
			"left":pingKuan*bili(-480)+"px",
			"top":pingKuan*bili(287)+"px"
		});
		$(".page2_img4").css({
			"height":pingKuan*bili(278)+"px",
			"left":pingKuan*bili(480)+"px",
			"top":pingKuan*bili(431)+"px"
		});
		$(".page2_txt1").css({
			"width":pingKuan*bili(35)+"px",
			"left":pingKuan*bili(35)+"px",
			"top":pingKuan*bili(50)+"px"
		});
		$(".page2_txt2").css({
			"width":pingKuan*bili(35)+"px",
			"right":pingKuan*bili(30)+"px",
			"top":pingKuan*bili(180)+"px"
		});
		$(".page2_txt3").css({
			"width":pingKuan*bili(35)+"px",
			"left":pingKuan*bili(114)+"px",
			"top":pingKuan*bili(368)+"px"
		});
		$(".page2_txt4").css({
			"width":pingKuan*bili(35)+"px",
			"right":pingKuan*bili(30)+"px",
			"top":pingKuan*bili(536)+"px"
		});
		$(".page2_txt5").css({
			"width":pingKuan*bili(365)+"px",
			"left":pingKuan*bili(0)+"px",
			"top":pingKuan*bili(592)+"px"
		});
		$("#wScratchPad3").css({
			"width":pingKuan*bili(116)+"px",
			"height":pingKuan*bili(291)+"px"
	    });
		$(".ggWrap").css({
			"width":pingKuan*bili(116)+"px",
			"height":pingKuan*bili(291)+"px",
			"left":pingKuan*bili(263)+"px",
			"top":pingKuan*bili(220)+"px"
	    });
		$(".shoushi").css({
			"width":pingKuan*bili(64)+"px",
			"height":pingKuan*bili(149)+"px",
			"left":pingKuan*bili(227)+"px",
			"top":pingKuan*bili(295)+"px"
	    });
		$(".page3_txt2").css({
			"width":pingKuan*bili(480)+"px",
			"height":pingKuan*bili(146)+"px",
			"left":pingKuan*bili(0)+"px",
			"top":pingKuan*bili(552)+"px"
	    });
		$(".page4_img1").css({
			"width":pingKuan*bili(96)+"px",
			"height":pingKuan*bili(116)+"px",
			"left":pingKuan*bili(135)+"px",
			"top":pingKuan*bili(231)+"px"
	    });
		$(".page4_img2").css({
			"width":pingKuan*bili(57)+"px",
			"height":pingKuan*bili(24)+"px",
			"left":pingKuan*bili(234)+"px",
			"top":pingKuan*bili(272)+"px"
	    });
		$(".page4_img3").css({
			"width":pingKuan*bili(142)+"px",
			"height":pingKuan*bili(128)+"px",
			"left":pingKuan*bili(270)+"px",
			"top":pingKuan*bili(223)+"px"
	    });
		$(".page4_img4").css({
			"width":pingKuan*bili(96)+"px",
			"height":pingKuan*bili(120)+"px",
			"left":pingKuan*bili(130)+"px",
			"top":pingKuan*bili(376)+"px"
	    });
		$(".page4_img5").css({
			"width":pingKuan*bili(57)+"px",
			"height":pingKuan*bili(24)+"px",
			"left":pingKuan*bili(228)+"px",
			"top":pingKuan*bili(420)+"px"
	    });
		$(".page4_img6").css({
			"width":pingKuan*bili(124)+"px",
			"height":pingKuan*bili(126)+"px",
			"left":pingKuan*bili(292)+"px",
			"top":pingKuan*bili(378)+"px"
	    });
		$(".page4_img7").css({
			"width":pingKuan*bili(92)+"px",
			"height":pingKuan*bili(120)+"px",
			"left":pingKuan*bili(124)+"px",
			"top":pingKuan*bili(530)+"px"
	    });
		$(".page4_img8").css({
			"width":pingKuan*bili(57)+"px",
			"height":pingKuan*bili(24)+"px",
			"left":pingKuan*bili(218)+"px",
			"top":pingKuan*bili(572)+"px"
	    });
		$(".page4_img9").css({
			"width":pingKuan*bili(123)+"px",
			"height":pingKuan*bili(133)+"px",
			"left":pingKuan*bili(288)+"px",
			"top":pingKuan*bili(534)+"px"
	    });
		$(".page5_img0").css({
			"width":pingKuan*bili(56)+"px",
			"height":pingKuan*bili(57)+"px",
			"left":pingKuan*bili(134)+"px",
			"top":pingKuan*bili(202)+"px"
	    });
		$(".page5_img1").css({
			"width":pingKuan*bili(88)+"px",
			"height":pingKuan*bili(104)+"px",
			"left":pingKuan*bili(129)+"px",
			"top":pingKuan*bili(241)+"px"
	    });
		$(".page5_img2").css({
			"width":pingKuan*bili(48)+"px",
			"height":pingKuan*bili(28)+"px",
			"left":pingKuan*bili(224)+"px",
			"top":pingKuan*bili(248)+"px"
	    });
		$(".page5_img3").css({
			"width":pingKuan*bili(111)+"px",
			"height":pingKuan*bili(73)+"px",
			"left":pingKuan*bili(307)+"px",
			"top":pingKuan*bili(228)+"px"
	    });
		$(".page5_img4").css({
			"width":pingKuan*bili(26)+"px",
			"height":pingKuan*bili(104)+"px",
			"left":pingKuan*bili(278)+"px",
			"top":pingKuan*bili(208)+"px"
	    });
		$(".page5_img5").css({
			"width":pingKuan*bili(86)+"px",
			"height":pingKuan*bili(106)+"px",
			"left":pingKuan*bili(129)+"px",
			"top":pingKuan*bili(361)+"px"
	    });
		$(".page5_img6").css({
			"width":pingKuan*bili(48)+"px",
			"height":pingKuan*bili(28)+"px",
			"left":pingKuan*bili(224)+"px",
			"top":pingKuan*bili(306)+"px"
	    });
		$(".page5_img7").css({
			"width":pingKuan*bili(48)+"px",
			"height":pingKuan*bili(28)+"px",
			"left":pingKuan*bili(224)+"px",
			"top":pingKuan*bili(366)+"px"
	    });
		$(".page5_img8").css({
			"width":pingKuan*bili(65)+"px",
			"height":pingKuan*bili(101)+"px",
			"left":pingKuan*bili(290)+"px",
			"top":pingKuan*bili(294)+"px"
	    });
		$(".page5_img9").css({
			"width":pingKuan*bili(26)+"px",
			"height":pingKuan*bili(104)+"px",
			"left":pingKuan*bili(358)+"px",
			"top":pingKuan*bili(301)+"px"
	    });
		$(".page5_img10").css({
			"width":pingKuan*bili(48)+"px",
			"height":pingKuan*bili(28)+"px",
			"left":pingKuan*bili(224)+"px",
			"top":pingKuan*bili(424)+"px"
	    });
		$(".page5_img11").css({
			"width":pingKuan*bili(122)+"px",
			"height":pingKuan*bili(139)+"px",
			"left":pingKuan*bili(288)+"px",
			"top":pingKuan*bili(366)+"px"
	    });
		$(".page5_img12").css({
			"width":pingKuan*bili(39)+"px",
			"height":pingKuan*bili(108)+"px",
			"left":pingKuan*bili(282)+"px",
			"top":pingKuan*bili(400)+"px"
	    });
		$(".page5_img13").css({
			"width":pingKuan*bili(85)+"px",
			"height":pingKuan*bili(106)+"px",
			"left":pingKuan*bili(128)+"px",
			"top":pingKuan*bili(518)+"px"
	    });
		$(".page5_img14").css({
			"width":pingKuan*bili(48)+"px",
			"height":pingKuan*bili(28)+"px",
			"left":pingKuan*bili(224)+"px",
			"top":pingKuan*bili(526)+"px"
	    });
		$(".page5_img15").css({
			"width":pingKuan*bili(119)+"px",
			"height":pingKuan*bili(88)+"px",
			"left":pingKuan*bili(264)+"px",
			"top":pingKuan*bili(474)+"px"
	    });
		$(".page5_img16").css({
			"width":pingKuan*bili(65)+"px",
			"height":pingKuan*bili(106)+"px",
			"left":pingKuan*bili(354)+"px",
			"top":pingKuan*bili(484)+"px"
	    });
		$(".page5_img17").css({
			"width":pingKuan*bili(48)+"px",
			"height":pingKuan*bili(28)+"px",
			"left":pingKuan*bili(224)+"px",
			"top":pingKuan*bili(585)+"px"
	    });
		$(".page5_img18").css({
			"width":pingKuan*bili(114)+"px",
			"height":pingKuan*bili(100)+"px",
			"left":pingKuan*bili(294)+"px",
			"top":pingKuan*bili(564)+"px"
	    });
		$(".page5_img19").css({
			"width":pingKuan*bili(26)+"px",
			"height":pingKuan*bili(97)+"px",
			"left":pingKuan*bili(278)+"px",
			"top":pingKuan*bili(558)+"px"
	    });
		$(".page5_img20").css({
			"width":pingKuan*bili(408)+"px",
			"height":pingKuan*bili(126)+"px",
			"left":pingKuan*bili(40)+"px",
			"top":pingKuan*bili(644)+"px"
	    });
		$(".lunbo").css({
			"width":pingKuan*bili(392)+"px",
			"height":pingKuan*bili(280)+"px",
			"left":pingKuan*bili(44)+"px",
			"top":pingKuan*bili(294)+"px"
	    });
		$("#container").css({
			"width":pingKuan*bili(392)+"px",
			"height":pingKuan*bili(280)+"px"
	    });
		$("#rongqi").css({
			"padding-top":pingKuan*bili(254)+"px",
			"width":pingKuan*bili(392)+"px",
			"height":pingKuan*bili(26)+"px"
	    });
		$(".rongqiul li").css({
			"width":pingKuan*bili(392)+"px",
			"height":pingKuan*bili(236)+"px"
	    });
		$(".rongqiul").css({
			"height":pingKuan*bili(236)+"px"
	    });
		$(".page6_txt1").css({
			"width":pingKuan*bili(386)+"px",
			"height":pingKuan*bili(70)+"px",
			"left":pingKuan*bili(48)+"px",
			"top":pingKuan*bili(596)+"px"
	    });
		$(".page6_txt2").css({
			"width":pingKuan*bili(410)+"px",
			"height":pingKuan*bili(60)+"px",
			"left":pingKuan*bili(33)+"px",
			"top":pingKuan*bili(687)+"px"
	    });
		$(".page7_img1").css({
			"width":pingKuan*bili(322)+"px",
			"height":pingKuan*bili(90)+"px",
			"left":pingKuan*bili(-422)+"px",
			"top":pingKuan*bili(201)+"px"
	    });
		$(".page7_img2").css({
			"width":pingKuan*bili(310)+"px",
			"height":pingKuan*bili(76)+"px",
			"left":pingKuan*bili(480)+"px",
			"top":pingKuan*bili(282)+"px"
	    });
		$(".page7_img3").css({
			"width":pingKuan*bili(264)+"px",
			"height":pingKuan*bili(66)+"px",
			"left":pingKuan*bili(109)+"px",
			"top":pingKuan*bili(382)+"px"
	    });
		$(".page7_btn1").css({
			"width":pingKuan*bili(280)+"px",
			"height":pingKuan*bili(78)+"px",
			"left":pingKuan*bili(98)+"px",
			"top":pingKuan*bili(464)+"px"
	    });
		$(".page7_btn2").css({
			"width":pingKuan*bili(280)+"px",
			"height":pingKuan*bili(74)+"px",
			"left":pingKuan*bili(98)+"px",
			"top":pingKuan*bili(556)+"px"
	    });
		$(".tanBox").css({
			"height":pingKuan*bili(800)+"px"
	    });
		$(".tanBg").css({
			"width":pingKuan*bili(480)+"px",
			"height":pingKuan*bili(365)+"px",
			"left":pingKuan*bili(0)+"px",
			"top":pingKuan*bili(106)+"px"
	    });
		$(".closeBtn").css({
			"width":pingKuan*bili(48)+"px",
			"height":pingKuan*bili(42)+"px",
			"right":pingKuan*bili(35)+"px",
			"top":pingKuan*bili(208)+"px"
	    });
		$(".playBtn").css({
			"width":pingKuan*bili(69)+"px",
			"height":pingKuan*bili(50)+"px",
			"left":pingKuan*bili(10)+"px",
			"top":pingKuan*bili(20)+"px"
	    });
		yidongWidth = $("#rongqi").width();
		$(".rongqiul").css("width",yidongWidth*geshu+1+"px");
		
		oW = $(".pageLi").width();
		oL = $(".pageLi").length;
		$(".slideUl").css("width",oW*oL+"px");
		$("#wScratchPad3").wScratchPad({
            cursor:'',
			width:pingKuan*bili(116),					// set width - best to match image width
		    height:pingKuan*bili(291),
			size:20,		
            image:'images/page3_img2.jpg',	//刮完覆盖层以后显示的中奖图片
			image2:'images/page3_img1.jpg',    //覆盖层图片
				
            scratchMove: function(e, percent){
                if(percent > 70){
					//this.clear();
					$(".page3_txt2").animate({opacity:1},1000);	
					$(".shoushi").hide();
				};
            },
        });
	};
	//翻页

	var n = 0;
	$(".prev").hide();
	$(".next").click(function(){
		if(n < oL-1){
			n ++;
		}else{
			n = oL-1;
		}
		$(".slideUl").animate({left:-oW*n+"px"},500);
		if(n == 0){
			$(".next").show();
			$(".prev").hide();
		};
		if(n == 1){
			setTimeout(function(){
				donghua1();
			},1500);
			$(".next").show();
			$(".prev").show();
		};
		if(n == 2){
			setTimeout(function(){
				$(".shoushi").animate({opacity:1},500);
			},1000);
			$(".next").show();
			$(".prev").show();
		};
		if(n == 3){
			setTimeout(function(){
				donghua2();
			},1500);
			$(".next").show();
			$(".prev").show();
		};
		if(n == 4){
			setTimeout(function(){
				donghua3();
			},1500);
			$(".next").show();
			$(".prev").show();
		};
		if(n == 5){
			setTimeout(function(){
				autoPlay = setInterval(qieHuan,5000);
				donghua4();
			},1500);
			$(".next").show();
			$(".prev").show();
		};
		if(n == 6){
			setTimeout(function(){
				donghua5();
			},1500);
			$(".next").hide();
			$(".prev").show();
		};
	});
	$(".prev").click(function(){
		if(n > 0){
			n --;
			$(".prev").show();
		}else{
			n = 0;
			$(".prev").hide();
		}
		
		$(".next").show();
		$(".slideUl").animate({left:-oW*n+"px"},500);
	});
	function donghua1(){
		$(".page2_img1").animate({left:'0px'},500,function(){
			$(".page2_txt1").animate({opacity:1},500,function(){
				$(".page2_img2").animate({left:'0px'},500,function(){
					$(".page2_txt2").animate({opacity:1},500,function(){
						$(".page2_img3").animate({left:"0px"},500,function(){
							$(".page2_txt3").animate({opacity:1},500,function(){
								$(".page2_img4").animate({left:"0px"},500,function(){
									$(".page2_txt4").animate({opacity:1},500,function(){
										$(".page2_txt5").animate({opacity:1},500,function(){
											$(".page2_img1,.page2_img2,.page2_img3,.page2_img4").css("left","0px");	
										});
									});
								});
							});
						});
					});
				});
			});
		});
	};
	function donghua2(){
		$(".page4_img1").animate({opacity:1},500,function(){
			$(".page4_img2").animate({opacity:1},500,function(){
				$(".page4_img3").animate({opacity:1},500,function(){
					$(".page4_img4").animate({opacity:1},500,function(){
						$(".page4_img5").animate({opacity:1},500,function(){
							$(".page4_img6").animate({opacity:1},500,function(){
								$(".page4_img7").animate({opacity:1},500,function(){
									$(".page4_img8").animate({opacity:1},500,function(){	
										$(".page4_img9").animate({opacity:1},500);
									});
								});
							});
						});
					});
				});
			});
		});	
	};
	function donghua3(){$(".page5_img1").animate({opacity:1},500,function(){
			$(".page5_img2").animate({opacity:1},500,function(){
				$(".page5_img3").animate({opacity:1},500,function(){
					$(".page5_img4").animate({opacity:1},500,function(){
						$(".page5_img5").animate({opacity:1},500,function(){
							$(".page5_img6").animate({opacity:1},500,function(){
								$(".page5_img7,.page5_img8").animate({opacity:1},500,function(){
									$(".page5_img9").animate({opacity:1},500,function(){	
										$(".page5_img10").animate({opacity:1},500,function(){
											$(".page5_img11").animate({opacity:1},500,function(){
												$(".page5_img12").animate({opacity:1},500,function(){
													$(".page5_img13").animate({opacity:1},500,function(){
														$(".page5_img14").animate({opacity:1},500,function(){
															$(".page5_img15").animate({opacity:1},500,function(){
																$(".page5_img16").animate({opacity:1},500,function(){
																	$(".page5_img16").animate({opacity:1},500,function(){
																		$(".page5_img17").animate({opacity:1},500,function(){
																			$(".page5_img18").animate({opacity:1},500,function(){
																				$(".page5_img19").animate({opacity:1},500,function(){
																					$(".page5_img20").animate({opacity:1},500);
																				});
																			});
																		});	
																	});	
																});
															});
														});
													});
												});	
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});	
	};
	function donghua4(){
		$(".page6_txt1").animate({opacity:1},500,function(){
			$(".page6_txt2").animate({opacity:1},500);	
		});
	};
	function donghua5(){
		$(".page7_img1").animate({left:pingKuan*bili(26)+"px"},500,function(){
			$(".page7_img2").animate({left:pingKuan*bili(144)+"px"},500,function(){
				$(".page7_img3").animate({opacity:1},500);
			});
		});
	};
	
	$(".closeBtn").click(function(){
		$(".tanBox").hide();
		$(".prev").show();
		$(".next").show();
	});
	$(".page7_btn2").click(function(){
		$(".tanBox").show();
		$(".prev").hide();
		$(".next").hide();
	});
	var isPlay = false;
	$(".playBtn").bind("touchstart",function(){
		if(isPlay){
			isPlay = false;
			$(this).css({
				"background":"url(images/playBtn.png)",
				"background-size":"100% 100%"
			});
			document.getElementById('video').play();
		}else{
			isPlay = true;
			$(this).css({
				"background":"url(images/playBtn1.png)",
				"background-size":"100% 100%"
			});
			document.getElementById('video').pause();
			document.getElementById('video1').pause();
		};
	});
	//图片轮播
	var cishu = $(".rongqiul li").length - 1;
	var jishu = 0;
	var autoPlay = null;
	var geshu = $(".rongqiul li").length;
	var strs = "";
	//var oW1 = (yidongWidth-2*cishu)/geshu;
	for(var i=0;i<geshu;i++){
		if(i == 0){
			strs += "<li><img src='images/point1.png' width='20' /></li>" ;
		}else{
			 strs += "<li><img src='images/point.png' width='20' /></li>" ;
		};
	};
	$(".dianrongqi").html(strs);	 
	 //指示点的切换
	$(".dianrongqi li").click(function(){
		var xuliehao = $(".dianrongqi li").index($(this));
		$(".dianrongqi li").find("img").attr("src","images/point.png");
		$(".dianrongqi li").eq(xuliehao).find("img").attr("src","images/point1.png");
		$(".rongqiul").animate({left:xuliehao*(-yidongWidth)+"px"},500,function(){
			jishu = xuliehao; 
		});
	});
	var qieHuan = function(){
		 if(!$(".rongqiul").is(":animated")){
			 if(jishu == cishu){
					jishu = 0;	
				}else{
					jishu++;
				}				 
			 $(".rongqiul").animate({left:jishu*(-yidongWidth)+"px"},500,function(){
				$(".dianrongqi li").find("img").attr("src","images/point.png");
				$(".dianrongqi li").eq(jishu).find("img").attr("src","images/point1.png");
			  });
		 }
	 };
	 
	
	window.onload=function(){
		setTimeout(function(){
			quanBujs();
			$(".load").hide();
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