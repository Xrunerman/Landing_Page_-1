'use strict';

$('label').css('display', 'none'); // сделали все label НЕ видимыми
var testt = $("input:radio:checked").attr('id'); // получили id отмеченного input
$("label[for='"+testt+"']").css('display', 'block');  // включили label


function test(){

	$('label').css('display', 'none'); // сделали все label НЕ видимыми
	$('input:radio:checked'); // получили id отмеченного input
	var test = $('input:radio:checked').attr('id'); // получили id отмеченного input

	$("label[for='"+test+"']").css('display', 'block'); // включили label


}

setInterval (function(){

	var a = $(".input-box input:radio:checked"); // получаем активный input

	if (a.next('input').attr('id') != undefined){ // если следующий input за ним существует, тогда

		a.prop("checked", false); // текущему input выключаем чекбокс
		var b = a.attr('id'); // получили id input 
		$("label[for='"+b+"']").css('display', 'none'); // выключили его label

		a.next('input').prop("checked", true); // включаем чекбокс следующему input
		b = a.next('input').attr('id'); // получили id следующего input
		$("label[for='"+b+"']").css('display', 'block'); // вКлючили его label


	}else{ // если следующий input за ним НЕ!!! существует, тогда

		a.prop("checked", false); // текущему input выключаем чекбокс
		b = a.attr('id'); // получили id input 
		$("label[for='"+b+"']").css('display', 'none'); // выключили его label

		$("#slide_1").prop("checked", true); // включаем первый input
		$("label[for=slide_1]").css('display', 'block'); // вКлючили его label
	};

}, 5000);




