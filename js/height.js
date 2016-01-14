//Т.к. простого решения для центрирования по вертикали нет, приходится использовать jQuery и задавать высоту 'body', равную высоте окна браузера.
function set_body_height() {
    $('body').height($(window).height());
}

$(document).ready(function() {
	$(window).bind('resize', set_body_height);
    set_body_height();
});
