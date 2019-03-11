window.cipher = {
	encode: (offset, string) => {
		const despl = parseInt(offset);
		let result = "";

		for(let i=0; i<string.length; i++){
			let number = string.charCodeAt(i);
			if(number>=65 && number<=90){
				result += String.fromCharCode((number - 65 + despl ) % 26 + 65);
			}
			else if (number === 32) {
				 result += String.fromCharCode(32);
			}
			else if (number >= 97 && number <= 122) {
				result += String.fromCharCode((number-97 + despl) % 26 + 97);
			}
			else if (number >= 33 && number <= 64) {
				result += String.fromCharCode((number - 33 + despl) % 32 + 33);
			}
			else {
				result = "Fuera de rango";
			}
		}  return result;
	},

	decode: (offset, string) => {
		const despl = parseInt(offset);
		let result = "";

		for(let i=0; i<string.length; i++){
			let number = string.charCodeAt(i);
			if(number>=65 && number<=90){
				result += String.fromCharCode((number - 65 - despl) % 26 + 65);
			}
			else if (number === 32) {
				 result += String.fromCharCode(32);
			}
			else if (number >= 97 && number <= 122) {
				result += String.fromCharCode((number - 97 - despl) % 26 + 97);
			}
			else if (number >= 33 && number <= 64) {
				result += String.fromCharCode((number - 33 - despl) % 32 + 33);
			}
			else{
				result = "Fuera de rango";
			}
		}  return result;
	},
};