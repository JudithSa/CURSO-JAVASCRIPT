var loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

var minusculas = loremipsum.toLowerCase();
console.log(minusculas);

var BuscarA = minusculas.split(' ');
console.log(BuscarA);

/*for(var i=0; i<BuscarA.length;i++){
		if(BuscarA[i].indexOf('eli')!=-1){
    console.log(BuscarA[i]);
    }
} */

var nuevoA = [];

BuscarA.forEach(palabra => {
	if(palabra.indexOf('a')!=-1){
  console.log(palabra);
  nuevoA.push(palabra);
  }
})

console.log(nuevoA);

var juntarText=nuevoA.join(' ');
console.log(juntarText);

var sinComa=juntarText.replace(',','');
console.log(sinComa);



