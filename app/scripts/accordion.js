'use strict';
/**
 *  @name plugin
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    publicMethod
 *    destroy
 */
(function($, window, undefined) {
  var pluginName = 'accordion';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var me = this,
        element = this.element,
        options = this.options;

      var handler = $(options.handler, element),
        content = $(options.content, element),
        icon = $(options.iconToggle, element);

      element.off('beforeAccordion').on('beforeAccordion', function( event ,next) {
        next();
      });

      if(!element.hasClass('active')) {
        content.css('display', 'none');
        icon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
      } else {
        content.css('display', 'block');
        icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
      }

      handler.off('click.toggleAccordion').on('click.toggleAccordion', function(){
        if(element.hasClass('active')) {
          me.close();
        } else {
          me.open();
        }
      });
    },
    close: function() {
      var element = this.element,
        options = this.options;

      var handler = $(options.handler, element),
        content = $(options.content, element),
        icon = $(options.iconToggle, element);

      element.trigger('beforeAccordion', function() {
        element.removeClass('active');
        icon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        content.slideUp('slow', function() {
          element.trigger('afterAccordion', element, handler);
        });
      }, element, handler);
    },
    open: function() {
      var element = this.element,
        options = this.options;

      var handler = $(options.handler, element), 
        content = $(options.content, element),
        icon = $(options.iconToggle, element);

      element.trigger('beforeAccordion', function() {
        element.addClass('active');
        icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        content.slideDown('slow', function() {
          element.trigger('afterAccordion', element, handler);
        });
      }, element, handler);
    },
    destroy: function() {
      $.removeData(this.element[0], pluginName);
    },
    beforeAccordion: function(fn) {
      var element = this.element,
          handler = $(this.options.handler, element);

      element.off('beforeAccordion').on('beforeAccordion', event, function(next) {
        fn(next, element, handler);
      });
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      } else {
        // window.console && console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
      }
    });
  };

  $.fn[pluginName].defaults = {
    handler: '[data-accordion-handler]',
    iconToggle : '[data-accordion-toggle]',
    content: '[data-accordion-content]'
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));
