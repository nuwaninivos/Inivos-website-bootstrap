// scrolling navbar
var scrollTop = 0;
$(window).scroll(function(){
  scrollTop = $(window).scrollTop();

  if (scrollTop >= 50) {
    $('.header').addClass('scrolled-nav');
  } else if (scrollTop < 50) {
    $('.header').removeClass('scrolled-nav');
  }
});


 

// Video player
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});




// value slider
$( document ).ready(function() {
	$('.owl-slider').owlCarousel({
	  loop:true,
	  autoplayTimeout: 4000,
	  responsiveClass:true,
	  dots: false,
	  transitionStyle : "fade",
	  margin: 15,
	  nav:true,
	  navText:["<div class='nav-btn prev-slide'><img class='img-fluid' width='25px' src='/images/arrow-thin-left.png'></div>","<div class='nav-btn next-slide'><img class='img-fluid' width='25px' src='/images/arrow-thin-right.png'></div>"],
	  nav:true,
	  autoplay:true,
	  responsive:{
		0:{
		  items:1, 
		},
		600:{
		  items:3, 
		},
		1000:{
		  items:3, 
		}
	  }
	})
  });





