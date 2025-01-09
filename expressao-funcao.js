const situacaoEstudante = function (notaFinal, faltas) {
    return notaFinal >= 7 && faltas <= 4? true : false;
}
console.log(situacaoEstudante(8, 3)); 



// const situacao = situacaoEstudante(8, 5)
// let mesagem = situacao? 'Aprovado' : 'Reprovado';
// console.log(mesagem);