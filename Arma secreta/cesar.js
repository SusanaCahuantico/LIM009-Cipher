const getData = (chooseFunction) => {
 	//Numero de posiciones a recorrer
 	const offset = parseInt(document.getElementById('number').value);
	//Condicional para ver que funcion ejecutar dependiendo del boton, true = encripta, false = desencripta.
 	if(chooseFunction){
 		//Obtener el texto ingresado para cifrar
 		const string = document.getElementById('text').value; 
 		//limpiar / borrar contenido del input donde se ingreso el texto
		document.getElementById('text').value = '';
 		//Imprimir en el input el texto cifrado que retorna la funcion encode
 		document.getElementById('text-result').value = cipher.encode(offset, string);
 	}else{
 		const string = document.getElementById('text-result').value;
 		//limpiar / borrar contenido  del input donde se ingreso el texto
		document.getElementById('text-result').value = '';
 		//Imprimir en el input el texto decifrado que retorna la funcion decode
 		document.getElementById('text').value = cipher.decode(offset, string);
 	}
}
