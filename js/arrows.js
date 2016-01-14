function hide_arrows() {
    $('.left').hide('slow');
	$('.right').hide('slow');
}

$(document).ready(function() {
    hide_arrows();
});
  
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

