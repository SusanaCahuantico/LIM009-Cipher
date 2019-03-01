const getData = (ChooseFunction) => {
    const offset = parseInt(document.getElementById('number').value);
if(chooseFunction){
    const string = document.getElementById('text').value;
    document.getElementById('text').value= '';
    document.getElementById('text-result').value = cipher.encode(offset, string);
} else {
    const string = documente.getElementById('text-result').value;
    document.getElementById('text-result').value = '';
    document.getElementById('text').value = cipher.decode(offset, string);
}
}
/* Acá va tu código */