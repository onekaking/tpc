'use strict';
/**
 * @name SIA
 * @description Define global variables and functions
 * @version 1.0
 */
var TPC = TPC || {};

(function($) {
  $(document).ready(function() {
    for (var k in TPC.module) {
      if (jQuery.isFunction(TPC.module[k])) {
        TPC.module[k]();
      }
    }
  });
})(jQuery);