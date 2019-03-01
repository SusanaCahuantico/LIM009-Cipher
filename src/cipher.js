window.cipher = {
  encode: (offset,string) => {
    /* Acá va tu código */
   // codecipher -> codigo ASCII de la letra cifrada
   // position -> posicion de la letra cifrada en el alfabeto
   let codeCipher, position;
   //cadena final
   let textResult = '';
   //Recorrer cada uno de los caracteres del string
   for (let i=0; i < string.length; i++) {
     // Si el string es un espacio, se deja igual. No se aplica la formula
     if(string[i] === ' '){
       textResult += ' ';
     }else{
       //Obtener el codigo ASCII de la letra
       const codeAscii = string.charCodeAt(i);
       
       if(codeAscii > 90){
         position = codeAscii - 97 + (offset % 26);
         //Formula para obtener el codigo ASCII de la letra CiFRADA
         codeCipher = (position % 26) + 97;
         
         }
         else{
           position = codeAscii - 65 + (offset % 26);
           codeCipher = (position % 26) + 65;
         }
         // Obtener la letra cifrada que corresponde 
         const letterCipher = String.fromCharCode(codeCipher);
         // Agregas la letra cifrada al resuktad
         textResult += letterCipher;
         }
   }
   return textResult;
  },
  decode: (offset, string) => {
    let codeCipher, position;
    let textResult = '';
    for (let i = 0; i < string.length; i++){
    if(string[i] === '') {
      textResult += '';
    } else{
const codeAscii = string.charCodeAt(i);
if(codeAscii > 90){
position = codeAscii - 97 - (offset % 26);
if(position < 0) {
codeCipher = (position % 26) + 123;
} else {
  codeCipher = (position % 26) + 97;
}
} else {
  position = codeAscii - 65 - (offset % 26);
  if(position < 0){
    codeCipher = (position % 26) + 91;
  } else {
    codeCipher = (position % 26) + 65;
  }
}
const letterCipher = string.fromCharCode(codeCipher);
textResult += letterCipher;
}
    }
    return textResult;
  },
  createCipherWithOffset:(offset, string) => {

  }
};
