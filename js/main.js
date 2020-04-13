// JavaScript Document
$(document).ready(function(){
	var getWhatsapp = $('#boton-whatsapp');
	var getWhatsappContent = $('.cont-all-wa');
	var getCloseBoton = $('#closeChat');
	getWhatsapp.on('click', function(){
		getWhatsappContent.toggleClass('active_whatsapp');
	});
	getCloseBoton.on('click', function(){
		getWhatsappContent.removeClass('active_whatsapp');
	});

	/*Funcion Para el chatBox*/
	var celular = '573017959122'; //Su celular xd;
	var mensaje = 'Angie piragauta'; //Mensaje predeterminado;
	var getMensajes = $('.cont-mensaje');
	var getInput = document.querySelector('#mensajeWa');
	var getEnviar = document.querySelector('#enviar');
	var stringIn = '';
	var stringOut = '';
	getEnviar.addEventListener('click', clickWhatsapp, false);
	window.addEventListener('keyup', e => {
		if(e.key === 'Enter') getEnviar.click();
		if(e.key === 'Escape') getEnviar.click();
	});
	function clickWhatsapp(){
		stringIn = getInput.value;
		getMensajes.append('<p class="cont-usuario-mensaje">'+ stringIn +'</p>');
		if(stringIn === "si" || stringIn === "Si" || stringIn === "quiero comunicarme contigo"){
			stringOut = "Gracias buen dia.";
			function abrirNuevoTab(url) {
				var win = window.open(url, '_blank');
				win.focus();
			}
			abrirNuevoTab('http://wa.me/'+ celular +'?text='+ encodeURI(mensaje));
		} else if(stringIn === "no" || stringIn === "No" || stringIn === "nel"){
			stringOut = "Puedes comunicarte via email ampb2520@gmail.com";
		} else if(stringIn === "hola" || stringIn === "hola" || stringIn === "nel"){
			stringOut = "como estas?";
		}else if(stringIn.includes('bien')){
			stringOut = "Me alegra";
		}else{
			stringOut = "mensaje invalido";
		}
		getMensajes.append('<p class="cont-robot-mensaje">'+ stringOut +'</p>');
		getInput.value = "";
		getInput.focus();
	}
});