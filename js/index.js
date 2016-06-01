   $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
	});

  (function() {

    'use strict';

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

  })();

  $(window).load(function() {
      // start up after 2sec no matter what
      window.setTimeout(function(){
          $('body').removeClass("loading").addClass('loaded');
      }, 0);
  });



    function scrollNav() {
  $('.Navigation a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();


jQuery(document).ready(function(){
		jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},3000);
		});
	});


  $.global = new Object();

  $.global.item = 1;
  $.global.total = 0;

  $(document).ready(function()
  	{

  	var WindowWidth = $(window).width();
  	var SlideCount = $('#slides li').length;
  	var SlidesWidth = SlideCount * WindowWidth;

     $.global.item = 0;
      $.global.total = SlideCount;

  	$('.slide').css('width',WindowWidth+'px');
  	$('#slides').css('width',SlidesWidth+'px');

     $("#slides li:nth-child(1)").addClass('alive');

    $('#left').click(function() { Slide('back'); });
    $('#right').click(function() { Slide('forward'); });

    });

  function Slide(direction)
  	{

      if (direction == 'back') { var $target = $.global.item - 1; }
      if (direction == 'forward') { var $target = $.global.item + 1; }

      if ($target == -1) { DoIt($.global.total-1); }
      else if ($target == $.global.total) { DoIt(0); }
      else { DoIt($target); }


  	}

  function DoIt(target)
    {

      var $windowwidth = $(window).width();
  	var $margin = $windowwidth * target;
      var $actualtarget = target+1;

      $("#slides li:nth-child("+$actualtarget+")").addClass('alive');

      $('#slides').css('transform','translate3d(-'+$margin+'px,0px,0px)');

      $.global.item = target;

    $('#count').html($.global.item+1);

    }


  
