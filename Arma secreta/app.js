window.cipher = {
	encode: (offset, string) => {
		//codeCipher -> codigo ASCII de la letra cifrada
		//position -> posicion de la letra cifrada en el alfabeto (0 - 25)
		let codeCipher, position;
		//cadena final
		let textResult = '';
		//Recorrer cada uno de los caracteres del string
		for (let i = 0; i < string.length; i++) {
			//Si el string es un espacio, se deja igual. No se aplica la formula.
			if(string[i] === ' '){
				textResult += ' ';
			}else{
				//Obtener el codigo ASCII de la letra
				const codeAscii = string.charCodeAt(i);
				//Para MINUSCULAS, codigo ASCII entre 65 y 90
				if(codeAscii > 90){
					position = codeAscii - 97 + (offset % 26);
					//Formula para obtener el codigo ASCII de la letra CIFRADA
					codeCipher = (position % 26) + 97;
				//Para MAYUSCULAS, codigo ASCII entre 97 y 122
				}else{
					position = codeAscii - 65 + (offset % 26);
					codeCipher = (position % 26) + 65;
				}
				 //Obtener la letra que corresponde con el codigo ASCII, caracter ya cifrado
				const letterCipher = String.fromCharCode(codeCipher);
				//Agregar la letra cifrada al resultado
				textResult += letterCipher;
			}
		}
		return textResult;
	},
	decode: (offset, string) => {
		let codeCipher, position;
		let textResult = '';
		for (let i = 0; i < string.length; i++) {
			if(string[i] === ' '){
				textResult += ' ';
			}else{
				const codeAscii = string.charCodeAt(i);
				if(codeAscii > 90){
					//Calcula la posicion de la letra dentro del alfabeto
					position = codeAscii - 97 - (offset % 26);
					//Si la posicion es menor de cero (negativo)
					if(position < 0){
						//Obtiene el codigo ASCII de la letra ya cifrada.
						codeCipher = (position % 26) + 123;
					}else{
						codeCipher = (position % 26) + 97;
					}
				}else{
					position = codeAscii - 65 - (offset % 26);
					if(position < 0){
						codeCipher = (position % 26) + 91;
					}else{
						codeCipher = (position % 26) + 65;
					}
				}
				const letterCipher = String.fromCharCode(codeCipher);
				textResult += letterCipher;
			}
		}
		return textResult;
	},

	createCipherWithOffset:(offset, string) => {
	}
};
