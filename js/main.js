console.log('it works');

$(document).ready(function(){
	$('.nav-home-clearfix a').on('click', function(e){
  	e.preventDefault();
  	var target = $(this).attr('href');
  	var scrollPosition = $(target).offset().top;
  	$('html, body').animate({
  	  scrollTop: scrollPosition
  	}, 1000);
	});
});