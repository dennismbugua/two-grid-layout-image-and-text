snowStorm.flakesMaxActive = 240;
snowStorm.vMaxX = 2;
snowStorm.vMaxY = 1;
snowStorm.animationInterval = 35;
snowStorm.snowStick = false;
snowStorm.useMeltEffect = false;
snowStorm.useTwinkleEffect = false;


// $('.animation-element').removeClass('in-view');

var $animation_elements = $('.product-row > div');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
		
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      // $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');