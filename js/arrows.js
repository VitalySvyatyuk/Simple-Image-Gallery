//Появление, исчезновение стрелочек.
function hide_arrows() {
    $('.left').hide('slow');
	$('.right').hide('slow');
}
  
function show_arrows() {
    $('.left').show('slow');
    $('.right').show('slow');
}

$(document).mouseenter(function() {
	show_arrows();
});

$(document).mouseleave(function() {
	hide_arrows();
});

