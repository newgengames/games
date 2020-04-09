var progress = 0;
		$('.ans1').click(function() {
			progress ++;
    $('.ans1').css({
		'display': 'none'
		});
    $('.ans1-con').css({
		'display': 'block'
		});
	
	$('.ct1').css({
		'background': '#72FF00'
		});
	if (progress == 3) {
		$('.finish-con').css({
		'display': 'block'
		});
		}
});


		$('.ans2').click(function() {
			progress ++;
   $('.ans2').css({
		'display': 'none'
		});
    $('.ans2-con').css({
		'display': 'block'
		});
	$('.ct2').css({
		'background': '#72FF00'
		});
	if (progress == 3) {
		$('.finish-con').css({
		'display': 'block'
		});
		}
});



$('.ans3').click(function() {
	progress ++;
    $('.ans3').css({
		'display': 'none'
		});
    $('.ans3-con').css({
		'display': 'block'
		});
	$('.ct3').css({
		'background': '#72FF00'
		});
	if (progress == 3) {
		$('.finish-con').css({
		'display': 'block'
		});
		}
});