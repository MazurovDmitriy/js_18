(function($){
	$.fn.carousel = function(options) {
        var defaults = {
            elementsShow: 5,
            margin: 20,
            width: 200,
        };
        var settings = $.extend(defaults, options);
        var leftUIEl = this.find('.carousel-arrow-left');
        var rightUIEl = this.find('.carousel-arrow-right');
        var elementsList = this.find('.carousel-list');
        var pixelsOffset = settings.width + settings.margin;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = 0;
        var maximumOffset = - ((elementsCount - settings.elementsShow) * pixelsOffset);
        this.find('.carousel-hider').css('width', pixelsOffset*settings.elementsShow-settings.margin + 'px');
        this.find('li').css({
            'width': settings.width + 'px',
            'margin-right': settings.margin + 'px'
        });

        leftUIEl.click(function() {  
         
            if (currentLeftValue > maximumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }        
        });
     
        rightUIEl.click(function() {        
            if (currentLeftValue < minimumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }        
        });

	   return this;
	}
})(jQuery);