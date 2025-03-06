window.cipher = {
	encode: (offset, string) => {
	  return processText(offset, string, "encode");
	},
  
	decode: (offset, string) => {
	  return processText(offset, string, "decode");
	},
  };
  
  const processText = (offset, string, operation) => {
	const despl = parseInt(offset);
	let result = "";
  
	for (let i = 0; i < string.length; i++) {
	  const charCode = string.charCodeAt(i);
	  let processedChar;
  
	  if (charCode >= 65 && charCode <= 90) {
		processedChar = processCharacter(charCode, 65, 26, despl, operation);
	  } else if (charCode === 32) {
		processedChar = String.fromCharCode(32);
	  } else if (charCode >= 97 && charCode <= 122) {
		processedChar = processCharacter(charCode, 97, 26, despl, operation);
	  } else if (charCode >= 33 && charCode <= 64) {
		processedChar = processCharacter(charCode, 33, 32, despl, operation);
	  } else {
		return "Fuera de rango";
	  }
  
	  result += processedChar;
	}
  
	return result;
  };
  
  const processCharacter = (charCode, base, range, offset, operation) => {
	const shift = operation === "encode" ? offset : -offset;
	const normalizedChar = charCode - base;
	const shiftedChar = (normalizedChar + shift + range) % range;
	return String.fromCharCode(shiftedChar + base);
  };