/* Illumine - jQuery plugin
 * 
 * This plugin is used to highlight elements on a web page.
 * 
 * How to use:
 * $("#myElement .elements").illumine();
 * 
 * Developed with jQuery version: 1.4.3
 * 
 * Version: 1.0.0
 * Name: illumine
 * 
 * Author: Rodolphe Stoclin
 * E-mail: rodolphe@2clics.net
 */
 
(function($){
	$.fn.extend({
		illumine: function(options) {
            var defaults = {
            	opacity: 0.2,
                animateTimer: 500
            };
            
            settings = $.extend(defaults, options);
            
            var elements = this;
            var timer;
            
            return elements.each(function(){
                var elt = jQuery(this);
                
                elt.hover(function(){
                	clearTimeout(timer);
                	jQuery(elements).clearQueue();
                	
                	elt.animate({ opacity: 1 }, settings.animateTimer);
                	jQuery(elements).not(elt).animate({ opacity: settings.opacity }, settings.animateTimer);
                }, function(){
                	timer = setTimeout(function(){
                		jQuery(elements).animate({ opacity: 1 }, settings.animateTimer);
                	}, settings.animateTimer);
                });
            });
		}
	});
})(jQuery);