$(function(){
	$('#dy').clone().appendTo('.l_con')		
				var n=0
				$('.btn2').click(function(){	
					
					if(!$('.l_con').is(':animated')){		
						n++								
						$('.l_con').animate({'left':-n*1160+'px' },500,function(){
						   if(n==$('.l_con>div').length-1){
							  n=0
							  $('.l_con').css('left','0px')							  							 						  
						   }	
						    	 
					    })	
					  jd(n)   
					}	
					
				})
				
				
				function jd(n){
					if(n==$('.l_con>div').length-1){
						n=0
					}
					  $('.lunbo_con>ul>li').eq(n).css('background-color','#fe980f')
						  .siblings().css('background','#c4c4be')					
				}
				
				$('.btn1').click(function(){
					if(!$('.l_con').is(':animated')){
						if(n==0){
							n=$('.l_con>div').length-1
							$('.l_con').css('left','-3480px')							
						}
						 	n--	
						jd(n)			
					 $('.l_con').animate({'left':-n*1160+'px' },500)
					}
				})
					
				 timer=setInterval(function(){
					$('.btn2').click()
				},3000)
				 
				 
				$('.lunbo_con').hover(function(){
					clearInterval(timer)
				},function(){
					timer=setInterval(function(){
					$('.btn2').click()
				},3000)
				})
				
				
				$('.lunbo_con>ul>li').click(function(){
					if(!$('.l_con').is(':animated')){
						var x=$(this).index()
						if(x>n){
							$('.l_con').css('left', - (x-1) * 1160+'px' )
							.animate({'left':-x*1160+'px'},1000)
						}else if(x<n){
							$('.l_con').css('left', - (x+1) * 300+'px' )
							.animate({'left':-x*1160+'px'},1000)
						}
						n=x
						jd(n)
						
						
						
					}
				})
	//------------------------------
	$('#logo_left_l').hover(function(){
		$(this).css({'background-color':'#ffac40','border':'1px solid #ffac40'})
		$('#logo_left_l>a').css({'color':'#fff'})
		$('#logo_left_l>a>i').css({'border-top-color':'#fff'})
	},function(){
		$(this).css({'background-color':'#fff','border':'1px solid #cccccc'})
		$('#logo_left_l>a').css({'color':'#cccccc'})
		$('#logo_left_l>a>i').css({'border-top-color':'#cccccc'})
	})
	
	$('.wrap').click(function(){
		$('#logo_l_r>ul').hide()
		$('#logo_left_l>ul').hide()
	})
	
	
	$('#logo_left_l').click(function(e){
		e.stopPropagation();
		$('#logo_left_l>ul').toggle()
		$('#logo_l_r>ul').hide()
	})
	
	$('#logo_l_r').click(function(e){
		e.stopPropagation();
		$('#logo_l_r>ul').toggle()
		$('#logo_left_l>ul').hide()
	})
	
	
	$('#logo_l_r').hover(function(){
		$(this).css({'background-color':'#ffac40','border':'1px solid #ffac40'})
		$('#logo_l_r>a').css({'color':'#fff'})
		$('#logo_l_r>a>i').css({'border-top-color':'#fff'})
	},function(){
		$(this).css({'background-color':'#fff','border':'1px solid #cccccc'})
		$('#logo_l_r>a').css({'color':'#cccccc'})
		$('#logo_l_r>a>i').css({'border-top-color':'#cccccc'})
	})
	
	//---------------------------------------
	$('#home_1').hover(function(){
		$('.home_l').css({'opacity':'1','top':'35px'})
	},function(){
		$('.home_l').css({'opacity':'0','top':'65px'})
	})
	$('#home_2').hover(function(){
		$('.home_r').css({'opacity':'1','top':'35px'})
	},function(){
		$('.home_r').css({'opacity':'0','top':'65px'})
	})
	
	
	//------------------------------------
	//加号下拉
	$('.hea').click(function(){
		$(this).parent().next().stop(true).slideToggle().parent().siblings().children('.xial').stop(true).slideUp()
		
	})
	
	// -----------------------
	//商品橙色下拉
	$('.single-products').hover(function(){
		$(this).children('.sp_l').stop(true).slideDown()
	},function(){
		$(this).children('.sp_l').stop(true).slideUp()
	})
	
	//---------------------------------------------------
	//第二轮播
	$('.diyi_1').clone().appendTo('.items_con')		
				var w=0
				$('.btn_2').click(function(){	
					
					if(!$('.items_con').is(':animated')){		
						w++								
						$('.items_con').animate({'left':-w*860+'px' },1000,function(){
						   if(w==$('.items_con>div').length-1){
							  w=0
							  $('.items_con').css('left','0px')							  							 						  
						   }	
						    	 
					    })	 
					}	
					
				})
				
				$('.btn_1').click(function(){
					if(!$('.items_con').is(':animated')){
						if(w==0){
							w=$('.items_con>div').length-1
							$('.items_con').css('left','-1720px')							
						}
						 	w--			
					 $('.items_con').animate({'left':-w*860+'px' },1000)
					}
				})
				
				time=setInterval(function(){
					$('.btn_2').click()
				},3000)

				$('.items').hover(function(){
					clearInterval(time)
				},function(){
					time=setInterval(function(){
					$('.btn_2').click()
				},3000)
				})
			
			//--------------------------
			//选项卡
			$('.col-sm-12>ul>li').click(function(){
				var n=$(this).index()
				$(this).addClass('color').siblings().removeClass('color')
				$('.min>div').eq(n).fadeIn().siblings().hide()
			})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
