;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = 'Extender',
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init : function () {
           // console.log($(this.element).width());
           $(this.element).width($(this.element).width() + 30);
        },
        add50 : function(){
           $(this.element).width($(this.element).width() + 50);
        }

     };
    
    $.fn[pluginName] = function ( options ) {
        return $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
    }

})( jQuery, window, document );
    
$('#metal').Extender().add50();    
    


