
var textoPrueba;
var textoPrueba2;
var textoEnc;
var textoDes;


function original(){
	var recta1= document.getElementById('rectang1');
	recta1.style.display='initial'
	var recta2=document.getElementById('rectang2')
	recta2.style.display='none'
}



function limpiar(){
	var recta1= document.getElementById('rectang1');
	recta1.style.display='none'
	var recta2=document.getElementById('rectang2')
	recta2.style.display='initial'
}

function encriptar(textoPrueba){
	limpiar();
	var textoPrueba=textoPrueba.split("")
	var n= textoPrueba.length;
	var i=0;
	var textoEnc=""
	while(i < n){
		console.log(textoPrueba[i])
		if (textoPrueba[i] == 'a') {
	 		textoPrueba[i]='ai'
			textoEnc=textoEnc.concat(textoPrueba[i]);

		} else {
			if (textoPrueba[i] == 'e') {
				textoPrueba[i]='enter'
 				textoEnc=textoEnc.concat(textoPrueba[i]);

			} else {
				if (textoPrueba[i] == 'i') {
					textoPrueba[i]='imes'
	 				textoEnc=textoEnc.concat(textoPrueba[i]);

	 			} else {
					if (textoPrueba[i] == 'o') {
						textoPrueba[i]='ober'
		 				textoEnc=textoEnc.concat(textoPrueba[i]);

					} else{
						if (textoPrueba[i] == 'u') {
							textoPrueba[i]='ufat'
			 				textoEnc=textoEnc.concat(textoPrueba[i]);

						} else{
								textoEnc=textoEnc.concat(textoPrueba[i]);

							}	
						}		
					}	
				}	
			}

		i=i+1;
		}
		return textoEnc;
}

function desencriptar(textoPrueba2){
	limpiar();
	var n= textoPrueba2.length;
	var i=0;
	var j=0;
	var textoDes="";	
	while(i < n){
		
		if (textoPrueba2[i] == 'a' && textoPrueba2[i+1] == 'i' ) {
	 		textoPrueba2[i]='a'
	 		textoDes=textoDes+textoPrueba2[i]
	 		i=i+2;
		} else {
			if (textoPrueba2[i] == 'e' && textoPrueba2[i+1] == 'n' && textoPrueba2[i+2] == 't' && textoPrueba2[i+3] == 'e' && textoPrueba2[i+4] == 'r') {
				textoPrueba2[i]='e'
				textoDes=textoDes+textoPrueba2[i]
				i=i+5;
			} else {
				if (textoPrueba2[i] == 'i' && textoPrueba2[i+1] == 'm' && textoPrueba2[i+2] == 'e' && textoPrueba2[i+3] == 's') {
					textoPrueba2[i]='i'
					textoDes=textoDes+textoPrueba2[i]
					i=i+4;
	 			} else {
					if (textoPrueba2[i] == 'o' && textoPrueba2[i+1] == 'b' && textoPrueba2[i+2] == 'e' && textoPrueba2[i+3] == 'r') {
						textoPrueba2[i]='o'
						textoDes=textoDes+textoPrueba2[i]
						i=i+4;
					} else{
						if (textoPrueba2[i] == 'u' && textoPrueba2[i+1] == 'f' && textoPrueba2[i+2] == 'a' && textoPrueba2[i+3] == 't') {
							textoPrueba2[i]='u'
							textoDes=textoDes+textoPrueba2[i]
							i=i+4
						} else{
							textoDes=textoDes+textoPrueba2[i]
							i=i+1;

							}	
						}		
					}	
				}	
			}
		}
		return textoDes;

}

function copiar(){
let textoACopiar = document.getElementById('salida')
let textoOriginal = document.getElementById('texto')

  textoACopiar.select();
  document.execCommand("copy");
  textoACopiar.value="";
  textoOriginal.value="";
original()
}
