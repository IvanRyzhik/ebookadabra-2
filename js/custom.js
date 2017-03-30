$(document).ready(function () {

	var windowwidth = window.innerWidth;
	var windowheight = window.innerHeight;

//$('section').css("min-height", windowheight);

$('.jumbotron, .gauze').css("min-height", windowheight);
$('.jumbotron .gauze').css("padding-top", (windowheight/5));
$('.jumbotron .gauze .container').css("padding-top", (windowheight/5));
$('#our-features-social .container, #our-features-stickers .container, #our-features-games .container, #our-features-search .container, #discover h2').css("padding-top", (windowheight/4));
// $('#our-library .container').css("padding-top", (windowheight/2));
$('#our-features-games, #discover').css("min-height", (windowheight/2));
$('#our-features-header').css("min-height", (windowheight/3));
$('#our-features-stickers').css("min-height", (windowheight/2));
$('#our-features-social').css("min-height", (windowheight/2));
$('#our-features-search').css("min-height", (windowheight/2));
$('#site-title').css("margin-top", (windowheight/2)-100);


$(window).bind("resize",function() {
//    $('section').css("min-height", $(window).height);
$('#discover, #our-features-header').css("min-height", $(window).height()/2);
$('.jumbotron .gauze').css("padding-top", ($(window).height()/5));
$('.jumbotron .gauze .container, #sign-up .container').css("padding-top", ($(window).height()/5));
//	$('#our-library .container').css("padding-top", ($(window).height()/2));
$('.jumbotron, .gauze').css("min-height", ($(window).height()));
});

$('body').scrollspy({ target: '#navbar' });

$('.top-menu li .scroller').click(function() {

	$('.navbar-collapse.collapse.in').removeClass('in');

	var that = this;
	setTimeout(function() {
		$('.top-menu li').removeClass('active');
		$(that).parent('li').addClass('active');
	}, 900);

	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - $('.navbar-fixed-top').height()
			}, 1000);
			return false;
		}
	}
});



//particles bubles effect
/*particlesJS.load('particles-js', 'particlesjs-config.json', function() {

});*/


$('.single-item').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 5,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: true,
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 5
		}
	},
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		}
	},
	{
		breakpoint: 480,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		}
	}
	]
});

$('.single-item-2').slick({
	slidesToShow: 6,
	arrows: false,
	infinite: true,
	dots: true,
	adaptiveHeight: true, 
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		}
	}
	]
});
$('.single-item-3').slick({
	slidesToShow: 3,
	infinite: true,
	dots: true,
	adaptiveHeight: true, 
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1
		}
	}
	]
});

if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$("#videos-1").hide(); //hide your div initially
		var topOfOthDiv = $("#video-s2").offset().top;
		$(window).scroll(function() {
		    if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
		        $("#videos-1").show(); //reached the desired point -- show div
		      }
		    });

		$(".tablet-row-left").hide(); //hide your div initially
		var topOfOthDiv2 = $("#our-library").offset().top;
		$(window).scroll(function() {
		    if($(window).scrollTop() > topOfOthDiv2) { //scrolled past the other div?
		        $(".tablet-row-left").show(); //reached the desired point -- show div
		      }
		    });

		$("#videos-2").hide(); //hide your div initially
		var topOfOthDiv2 = $("#our-library").offset().top;
		$(window).scroll(function() {
		    if($(window).scrollTop() > topOfOthDiv2) { //scrolled past the other div?
		        $("#videos-2").show(); //reached the desired point -- show div
		      }
		    });
	}
});


//changing color of menu elements when scrolling






