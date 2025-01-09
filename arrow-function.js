//As arrow functions são basicamentes expressões de função, o que muda é que ao inves de ser function() {} ela é () => {}
//Elas tambem podem ser suprimidas, não precisa usar o return

//Exemplo sem supressão
const exibeNome = (nome) => {
    return nome;
}

//Exemplo com supressão
const exibiIdade = (idade) => idade;

//Teste
console.log(exibeNome('Miau'));
console.log(exibiIdade(18));

//Exercicio de supressão com operador ternário
const imparOuPar = (numero) => numero % 2 == 0? 'Par' : 'Impar';
console.log(imparOuPar(3));

//Exercicio sem operador ternario
const isNumber = (numero) => {
    if (numero === Number(numero)){
        return true
    }
}
console.log(isNumber(9));

//Exercicio de supressão com operador ternário mais extenso
const qualAnimal = (animal) => animal == 'miau'? 'gato' : animal == 'au'? 'dog' : animal == 'cocorico'? 'galo' : 'outro animal';
console.log(qualAnimal('au'));