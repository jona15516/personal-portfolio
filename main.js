$(document).ready(function(){
	// Show & hide the images
	$(".item a").hover(function(){
	  $(this).parent().find("img").addClass("ishover");
	  }, function() {
	  $(this).parent().find("img").removeClass("ishover");
	  });
	
	// Parallax effect
	$(".item a").mousemove(function(e){
	  // Get the Y offset from the first product
	  var offset = $(this).offset().top-$(":first-child", $(".item")).offset().top;
	  // Calculate the new position
	  var movex = (e.pageX * -1.73 / 6);
	  var movey = ((e.pageY-offset) * -1.73 / 6)+($(this).parent().find("img").height());
	  // Apply the margins
	  $(this).parent().find("img").css('margin-left', movex + 'px')/2;
	  $(this).parent().find("img").css('margin-top', movey + 'px');
	});
});