console.log('Olá mundo')

/**
 *  Acessar o document ou o pop-up não vai funcionar 
 *  no ambiente node pois não existe página HTML ou navegador 
 * para mostrar
 */
 
// document.write('Olá mundo') ERRO

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log('myVariable', myVariable); //{1}
console.log('myFunction', myFunction()); //{2}
console.log('myVariable', myVariable); //{3}

console.log('myOtherVariable', myOtherVariable); //{4}
console.log('myOtherFunction', myOtherFunction()); //{5}
console.log('myOtherVariable', myOtherVariable); //{6}