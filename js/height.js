//�.�. �������� ������� ��� ������������� �� ��������� ���, ���������� ������������ jQuery � �������� ������ 'body', ������ ������ ���� ��������.
function set_body_height() {
    $('body').height($(window).height());
}

$(document).ready(function() {
	$(window).bind('resize', set_body_height);
    set_body_height();
});
