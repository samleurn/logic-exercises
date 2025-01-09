//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let estaLogado = false;
let permissãoAdm = false;

estaLogado = true;
permissãoAdm = true;

let acesso = estaLogado && permissãoAdm? 'acesso permitido' : 'acesso negado';
console.log(acesso);
