/*
* JS for ecolab.ru
* author : Bloodlog
* http://web-fomin.ru
*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		/*sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],*/
		/*anchors: ['about', 'portfolio', 'price', 'comments'],*/
		scrollBar: true,

		menu: '#menu',
		scrollingSpeed: 1000
	});

	$("#mobile-menu").click(function() {
		$(".header #menu").slideToggle();
	});

	$(".call-button").click(function() {
		$(".modal-form #modal-btn").html($(this).text());
		$(".modal-form").slideToggle();
	});

	$(".close-modal").click(function() {
		$(".modal-form").slideToggle();
	});
});