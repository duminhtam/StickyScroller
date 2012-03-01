/**
*
*	StickyScroller
*	
*	Copyright 2012, Michael Wright
*	Free to use and abuse under the MIT license.
*	http://www.opensource.org/licenses/mit-license.php
*	
*	http://github.com/michaelw90/stickyscroller/
*
**/


(function($) {

	var stickScrollerCount = 0;

	$.fn.stickyScroller = function(params){
		var params = $.extend({}, $.fn.stickyScroller.defaults, params);
		var $el = $(this);
		var $win = $(window);

		var $position = $el.offset().top;
		var $id = stickScrollerCount;

		console.log($position);

		if(params.wrap){
			$el.wrap('<div id="scrollMaster-' + $id + '" style="width: 100%;"' + (params.wrapClass != ''? ' class="' + params.wrapClass + '"' : "") + '>');
			$el = $('#scrollMaster-' + $id);
		}

		$marginTop = $el.next().css('marginTop');
		$marginTopStick = parseInt($marginTop.replace(/[^\d]/g, ''))*2 + $el.height();
		$marginTopUnstuck = $marginTop;


		$win.on('scroll', function(){
			if(($win.scrollTop() >= $position && !params.hideAt) || ($win.scrollTop() >= $position && params.hideAt && $win.scrollTop() <= params.hideAt)){
					$el.addClass('stickySlide').next().css('marginTop', $marginTopStick);
			}else{
				$el.removeClass('stickySlide').next().css('marginTop', $marginTopUnstuck);
			}
		});

	}

	$.fn.stickyScroller.defaults = {
		wrap: true,			// Whether to wrap the stick element with an outer div
		wrapClass: '',		// Class applied to the wrap div
		hideAt: 500			// Scroll distance to stop the element sticking
	}

})(jQuery);

