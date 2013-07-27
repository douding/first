;;;(function(){

 $.fn.mod_tooltip = function(){

   

 	var $star = $('.star-list');

 	var $tool = $('.tooltip');

 	var $html = $("<div class='text-box' style='position:absolute;z-index:100;width: 230px;height: 95px;background-color: #fff;border-radius: 5px;box-shadow: 0 -2px 4px #c1bfbf inset;'><p class='tooltip-text' style= 'color:#686767,font-size: 13px;text-align: center;line-height: 27px;'>Your Message for Tooltip </p><p class='tooltip-text'>will appear here,some text</p><p class='tooltip-text'>  gonna placed here.</p><div class='icon icon-trigon' id='trigon' style='	position: absolute;left: 90px;top: 88px;'></div></div>")

 	 $html.hide();

     $star.append($html);

    $star.on('mouseenter',function(e){
      $(this).find($html).show()
     
      var _left = e.pageX - $html.first().width()/2-$tool.parent().width();
      $html.first().css('left',_left);

 	})

 	$star.on('mouseout',function(){


 	})
   




  


 }


})()