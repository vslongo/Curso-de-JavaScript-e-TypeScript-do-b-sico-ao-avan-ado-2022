const alunos = ['Luiz', 'mario', 'joão'];

alunos.push('sexo2');
alunos.unshift('Ku Klux Klan');
alunos.unshift('sexocasual');
const removido = alunos.pop();
const removido2 = alunos.shift();
console.log(removido); 
console.log(alunos);