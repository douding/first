;;;(function(){


 $.fn.mod_slide = function(){
  
   var $list = $(".picture-list")
   var $pictu = $(".picture-li");
   var $point = $(".slide-list");
   var unit = 680;
   var point = $.makeArray($point);

  var len = $pictu.length,
      cur = 0;
   
var goTo = function(index){

        ( index == len ) && (index = 0);

      var m = -index * unit;

     $list.css({
      "left":m,
      "position":'relative'
     });
     
    
       cur = index
    }

   $.each(point,function  (index,n) {

   	$(point[index]).on('click',function(){
        goTo(index);
    })
   	
   })

       setInterval(function(){

      var index = ++cur >= len ? 0 : cur;

          goTo(index)

    },5000)




 

   


 }



})()