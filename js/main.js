$(document).ready( function() {

 $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});


var p = document.getElementsByTagName("p");

printP("111");

function printP (text){

	p[0].innerHTML = text;
}


});
