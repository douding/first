;;;;(function(){

$.fn.mod_switches = function(){
 

  var $sw1_on = $('.sw1.but-on');
  var $sw1_off = $('.sw1.but-off');
  var $sw2_on= $('.sw2.but-on');
  var $sw2_off = $('.sw2.but-off');
  

  $sw1_on.toggle(

  	function(){

  	$(this).css({backgroundColor:'#f76c3a',color:'#fff', background: '-webkit-linear-gradient(top,#f76c3a,#f76c3a)'});
    $sw1_off.css({backgroundColor:'#6c7882',color:'#a2acb5', background: '-webkit-linear-gradient(top,#59636d,#77848e)'});
    
    },

    function(){

    	$(this).css({backgroundColor:'#6c7882',color:'#a2acb5', background: '-webkit-linear-gradient(top,#59636d,#77848e)'});
    	$sw1_off.css({backgroundColor:'#f76c3a',color:'#fff', background: '-webkit-linear-gradient(top,#f76c3a,#f76c3a)'});
   
    }

  )

  $sw1_off.toggle(


  	function(){

  	$(this).css({backgroundColor:'#f76c3a',color:'#fff', background: '-webkit-linear-gradient(top,#f76c3a,#f76c3a)'});
    $sw1_on.css({backgroundColor:'#6c7882',color:'#a2acb5', background: '-webkit-linear-gradient(top,#59636d,#77848e)'});
    
    },

    function(){

    	$(this).css({backgroundColor:'#6c7882',color:'#a2acb5', background: '-webkit-linear-gradient(top,#59636d,#77848e)'});
    	$sw1_on.css({backgroundColor:'#f76c3a',color:'#fff', background: '-webkit-linear-gradient(top,#f76c3a,#f76c3a)'});
   
    }





  	)

 
    $sw2_on.click(function(){

     

   $sw2_off.css({backgroundColor:'#f76c3a',color:'#76838d',background:'-webkit-linear-gradient(top,#bfc7cd,#e5e8ea)'});
   $(this).css({backgroundColor:'#6e7a84',color:'#fff',background:'-webkit-linear-gradient(top,#59636d,#77848e)'})

  })
      
    $sw2_off.click(function(){

     $sw2_on.css({backgroundColor:'#f76c3a',color:'#76838d',background:'-webkit-linear-gradient(top,#bfc7cd,#e5e8ea)'});
     $(this).css({backgroundColor:'#6e7a84',color:'#fff',background:'-webkit-linear-gradient(top,#59636d,#77848e)'});
   

    })
    
    
}


})()