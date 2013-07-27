;;;(function(){

 var defaults = {
      prefix : 'btn-state-',
      theme : ''
 }

   $.fn.mod_button = function(opts){


    var opts = $.extend( {} , defaults, opts);

    var _hoverHandle = function(e){

        $(this).addClass(opts.prefix + 'hover');
    
    }

    var _unhoverHandle = function(e){

        $(this).removeClass(opts.prefix + 'hover');
    
    }

    var _activeHandle = function(e){

        $(this).addClass(opts.prefix + 'active');

    }

    var _unactiveHandle = function(e){

        $(this).removeClass(opts.prefix + 'active');

    }

    this.each(function(i,n){

      var $this = $(this);

          !!opts.theme && $this.addClass(opts.theme)

          $this.on('mouseenter',_hoverHandle)
               .on('mouseleave',_unhoverHandle)
               .on('mousedown',_activeHandle)
               .on('mouseup',_unactiveHandle)

    })

return this;

 }

})()