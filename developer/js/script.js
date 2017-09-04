// Scroll.js

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
		if(target != ""){
			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		}
	});
});

$(window).resize(function(){
	showMenuBtn();
});

$(window).trigger("resize");

// open menu on mobile

function showMenuBtn(){
	if($(window).width()<=1200){
		$(".open_menu").addClass("visible");
		$("header nav").addClass("hidden");
	}else{
		$(".open_menu").removeClass("visible");
		$("header nav").removeClass("hidden");
	}
}

$(".open_menu").click(function(){
	$(".navigation_mobile").addClass("opened");
});

$(".close_menu").click(function(){
	$(".navigation_mobile").removeClass("opened");
});

// Opening tabs

function openTab(tab){
	if(tab.hasClass("opened")){
		$(".tab_text").animate({height:0},300);
		tab.removeClass("opened");
	}else{
		var nextTabHeight = tab.next().find("div").outerHeight(true);
		$(".tab_text").not(tab.next()).animate({height:0},300);
		tab.next().animate({height:nextTabHeight},300);
		$(".tab_opener").removeClass("opened");
		tab.addClass("opened");
	}
}

$(".tab_opener").click(function(){
	openTab($(this));
});

if($(".opening_tabs").length > 0){
	$(".tab_opener").each(function(){
		if($(this).hasClass("opened")){
			var nextTabHeight = $(this).next().find("div").outerHeight(true);
			$(this).next().css("height",nextTabHeight);
		}
	});
}

/*
	Sliders
*/

if($(".pricing_table_6 .slider").length>0){
	$(".pricing_table_6 .slider").slick({
		dots: false,
		arrows: false,
		fade: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
	$(".pricing_table_6 .slider").on('beforeChange',function(){
		if($(".change_slide").hasClass("switched")){
			$(".change_slide").removeClass("switched");
			$(".change_slide i").animate({left:0},300);
		}else{
			var animate_to = $(".change_slide").width() - $(".change_slide i").outerWidth(true) - parseInt($(".change_slide i").css("margin-left").replace("px",""));
			$(".change_slide").addClass("switched");
			$(".change_slide i").animate({left:animate_to},300);
		}
	});
	
	$(".change_slide").click(function(){
		$(".pricing_table_6 .slider").slick("slickNext");
	});
}

