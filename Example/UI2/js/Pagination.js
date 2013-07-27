;;;;(function(){


  $.fn.mod_pagination = function(){

   var $pagin = $(".pa-button");

   $pagin.on("mouseenter",function(){
        
        $(this).css({backgroundColor:'#F46430',color:'#fff'});

      })
      $pagin.on("mouseout",function(){

        $(this).css({backgroundColor:'#F5F5F5',color:'#686767'})

      })

      $pagin.on("mousedown",function(){

         $(this).css({backgroundColor:'#646f79',color:'#fff'});

      })
      $pagin.on("mouseup",function(){

         $(this).css({backgroundColor:'#F46430',color:'#fff'});

      })
  




  }








})()