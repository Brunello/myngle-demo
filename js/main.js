/**
 * Smooth Page scrolling for anchor tags that link to named anchors. Add the
 * class `scroll` to activate.
 */
$(".scroll").click(function(event) {
  event.preventDefault();
  //calculate destination place
  var dest=0;
  if($(this.hash).offset().top > $(document).height()-$(window).height()){
    dest=$(document).height()-$(window).height();
  }
  else {
    dest=$(this.hash).offset().top;
  }
  //go to destination
  $('html,body').animate({scrollTop:dest}, 1000,'swing');
});

/**
 * Calculate page height and set each room accordingly
 */
function setRoomHeight() {
  var height = $(window).height();
  $('.room').each(function() {
    $(this).css('height', height);
  });
}
// Run the room height calc function onload and also when the browser is
// resized.
setRoomHeight();
$(window).resize(function() {
  setRoomHeight();
});

/**
 * Active classes
 */
$('.room').waypoint(function() {
  var roomId = $(this).attr('name');
  console.log(roomId);
  $('.scroll').removeClass('active');
  $('.scroll.' + roomId).addClass('active');
});

// Initialize the parallax scroller
var s = skrollr.init();

