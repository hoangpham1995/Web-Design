 $(function(){
 	$(window).scroll(function(){
 		if($('body,html').scrollTop()> 300)
 		{
 			$('.navbar').addClass('mauden');

 		}
 		else{
 			$('.navbar').removeClass('mauden');
 		}
 	})

 		$('.nav-link.ku').click(function(){
 		$('body,html').animate({scrollTop:$('.story').offset().top});

 		return false ; 		
 	})

 			$('.nav-link.ki').click(function(){
 		$('body,html').animate({scrollTop:$('.services').offset().top});

 		return false ; 		
 	})

 				$('.nav-link.kiz').click(function(){
 		$('body,html').animate({scrollTop:$('.projects').offset().top});

 		return false ; 		
 	})
 						$('.nav-link.kia').click(function(){
 		$('body,html').animate({scrollTop:$('.team').offset().top});

 		return false ; 		
 	})

 										$('.nav-link.nia').click(function(){
 		$('body,html').animate({scrollTop:$('.contact').offset().top});

 		return false ; 		
 	})



 	
}) 
 

