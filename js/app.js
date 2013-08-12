$(function () {
    var $window = $(window),
	    $issues = $('.issue'),
	    $expanding = $('#expanding'),
	    $expandingCircle = $('#expanding-circle'),
	   	$diplomaticTies = $('#diplomatic-ties'),
	    $line = $('#line'),
	    windowHeight = $window.height(),
	    SCROLL_THRESHOLD = 100,
	    THROTTLE = 50,
	    resize = function () {
	        windowHeight = $window.height(),
	        $issues.height(windowHeight);    
	    },
	    scroll = function () {
	        var scrollTop = $window.scrollTop(),
	            expandingOffset = $expanding.offset().top - SCROLL_THRESHOLD,
	            chartOffset = $diplomaticTies.offset().top - SCROLL_THRESHOLD;
	        
	        if (scrollTop > expandingOffset) {
	            $expandingCircle.addClass('expanded');    
	        } else {
	            $expandingCircle.removeClass('expanded');    
	        }
	        
	        if (scrollTop > chartOffset) {
	            $line.addClass('animate');    
	        } else {
	            $line.removeClass('animate');    
	        }
	    };
    
    $window.resize(resize);
    $window.scroll(_.throttle(scroll, THROTTLE));
    resize();
});