var lives = 0;
$('.main-img').click(function() {
	lives ++;
	if (lives == 1) {
		    $('.lives5').fadeOut();
		}
    if (lives == 2) {
		  $('.lives4').fadeOut();
		}
	if (lives == 3) {
		  $('.lives3').fadeOut();
		}
	if (lives == 4) {
		  $('.lives2').fadeOut();
		}
	if (lives == 5) {
		 $('.lives1').fadeOut();
		
		 $('.game-over-con').css({
		'display': 'block'
		});
		var sound = document.getElementById("game-over");
          sound.play();
         audio.volume = 1;
		
		}

});

$('.pause').click(function() {
	 $('.pause-con').css({
		'display': 'block'
		});
	 $('.pause').fadeOut();
     var sound = document.getElementById("button");
          sound.play();
         audio.volume = 1;
});


$('.home').click(function() {
	 $('.img-ct').css({
		'transform': 'translateY(-100%)',
		'opacity': '0'
		});
	 $('.btm').css({
		'transform': 'translateY(100%)',
		'opacity': '0'
		});
	$('.pause-bg, .fixed-nav, .game-over, .finish').animate({
		'opacity': '0'
		});
	setTimeout(
			function() {
				window.history.back();
			}, 300);
});


$('.play').click(function() {
	setTimeout(
			function() {
				 $('.pause-con, .skip-con').fadeOut();
			}, 100);
	 $('.pause').fadeIn();
});

$('.retry').click(function() {
	setTimeout(
			function() {
				location.reload();
			}, 100);
});

$('.zoom-in').click(function() {
	 $('html').css({
		'overflow-x': 'visible'
		});
	setTimeout(
			function() {
				 $('.img-ct').animate({
		'max-width': '2000px',
		'width': '200%'
		});
		$('.btm, .top').animate({
			'opacity': '0'
			});
			}, 100);
	$(this).fadeOut(); $('.zoom-out').fadeIn();
	var sound = document.getElementById("button");
          sound.play();
         audio.volume = 1;
});

$('.zoom-out').click(function() {
	setTimeout(
			function() {
				 $('.img-ct').animate({
		'max-width': '700px',
		'width': '100%'
		});
		$('.btm, .top').animate({
			'opacity': '1'
			});
			}, 100);
		$('html').css({
		'overflow-x': 'hidden'
		});
	$(this).fadeOut(); $('.zoom-in').fadeIn();
	var sound = document.getElementById("button");
          sound.play();
         audio.volume = 1;
});

$('.button').click(function() {
	var sound = document.getElementById("button");
          sound.play();
         audio.volume = 1;
});

$('.main-img').click(function() {
	     var sound = document.getElementById("wrong");
          sound.play();
         audio.volume = 1;
});

$('.back-img').click(function() {
	window.history.back();
});

$('.skip-img').click(function() {
	 $('.skip-con').css({
		'display': 'block'
		});
});

$('.reward-ad').click(function() {
	parent.location='https://reward';
	setTimeout(
			function() {
				  $('.play, .reward-ad').fadeOut();
	              $('.done').fadeIn();
			}, 2000);
});

$('.done').click(function() {
	progress = 4;
	 $('.skip-con').fadeOut();
	$('.finish-con').fadeIn();
});



