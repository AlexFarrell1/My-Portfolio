$(document).ready(function(){

	//By Alex Farrell aka Bulldog_Aviation

//webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend

	//Declares a var for the webkit moz MSAnimatonEnd oanimationend and animationend string
	var RemoveAnimation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	//Rubber Bands the learn more button text everytime that it is hoverd over
	$("#Learn-More-Button-Text").on('mouseover', function(){
		$(this).addClass("animated rubberBand").one(RemoveAnimation, function(){
			$(this).removeClass('animated rubberBand');
		});

	});

		//Swings a navBar Item button text everytime that it is hoverd over
		$("#Nav-Bar ul li").on('mouseover', function(){
		$(this).addClass("animated swing").one(RemoveAnimation, function(){
			$(this).removeClass('animated swing');
		});

	});




		//Swings the twitter logo at the footer of the page when moused over
	$("#Twitter-Logo").on('mouseover', function(){
		$(this).addClass("animated swing").one(RemoveAnimation, function(){
			$(this).removeClass('animated swing')		

		});

	});
				//Swings the facebook Logo at the bottom of the page when moused over
			$("#Facebook-Logo").on('mouseover', function(){
		  		$(this).addClass("animated swing").one(RemoveAnimation, function(){
					$(this).removeClass('animated swing')		

		});

	});

						//Swings the git Logo at the bottom of the page when moused over
					$("#Git-Logo").on('mouseover', function(){
				  		$(this).addClass("animated swing").one(RemoveAnimation, function(){
							$(this).removeClass('animated swing')		

		});

	});



});