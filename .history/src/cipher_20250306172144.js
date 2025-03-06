window.cipher = {
	encode: (offset, string) => {
	  const despl = parseInt(offset);
	  let result = "";
  
	  for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
  
		if (charCode >= 65 && charCode <= 90) {
		  result += String.fromCharCode(((charCode - 65 + despl) % 26) + 65);
		} else if (charCode >= 97 && charCode <= 122) {
		  result += String.fromCharCode(((charCode - 97 + despl) % 26) + 97);
		} else {
		  result += string[i];
		}
	  }
  
	  return result;
	},
  
	decode: (offset, string) => {
	  const despl = parseInt(offset);
	  let result = "";
  
	  for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
  
		if (charCode >= 65 && charCode <= 90) {
		  result += String.fromCharCode(((charCode - 65 - despl + 26) % 26) + 65);
		} else if (charCode >= 97 && charCode <= 122) {
		  result += String.fromCharCode(((charCode - 97 - despl + 26) % 26) + 97);
		} else {
		  result += string[i];
		}
	  }
  
	  return result;
	},
  };