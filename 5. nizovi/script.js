//kreiranje niza

var prviNacin = new Array('prvi član', 'drugi član', 'treći član');

var drugiNacin = ['prvi', 'drugi', 'treci'];

var treciNacin = Array.from([2, 3, 4], x => x * x);
console.log(Array.from('abvgd'));

//manipulacija članovima

prviNacin.push('četvrti član');
console.log(drugiNacin.pop());
treciNacin[2] = 6;

//tajna poruka 

tajnaPoruka = ['Obožavam', 'svoj', 'posao'];
console.log(tajnaPoruka.join());
tajnaPoruka.pop(0);
tajnaPoruka.push('odmah', 'sada');
tajnaPoruka.shift();
tajnaPoruka.unshift('Zašto');
tajnaPoruka[1] = 'ne';
tajnaPoruka.splice(2, 0, 'umrem');
