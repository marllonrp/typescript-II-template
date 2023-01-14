/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.
2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/


enum ECorFavorita {
  vermelho = "  vermelho",
  laranja = "laranja",
  verde = "verde",
  azul = "azul",
  azulEscuro = "azul-escuro",
  violeta ="violeta"
}

type TPessoa = {
  nome:string,
  idade:number,
  corFavorita:ECorFavorita
}



const pessoa1:TPessoa = {
  nome: "Fulano",
  idade:27,
  corFavorita: ECorFavorita.laranja
}

const pessoa2:TPessoa = {
  nome: "Beltrano",
  idade:57,
  corFavorita: ECorFavorita.vermelho
}

const pessoa3:TPessoa = {
  nome: "Fulano",
  idade:16,
  corFavorita: ECorFavorita.violeta
}

const arrayPessoas:TPessoa[] = []
arrayPessoas.push(pessoa1,pessoa2,pessoa3)

console.table(arrayPessoas)