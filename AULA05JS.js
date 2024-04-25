// const palavra = prompt("Digite uma palavra: ")
// let contador_vogal = 0
// let contador_consoante = 0
// const vogais = "aeiouàáâãèéìíóòôõúùü"
// const consoantes = "bcdfghjklmnpqrstvxywz"

// for(let letra_da_vez of palavra){
// if(vogais.includes(letra_da_vez))
// {
//     contador_vogal ++

// }
// else if(consoantes.includes(letra_da_vez))
// {
//     contador_consoante ++
// }
// }

// console.log(`Total de caracteres ${palavra.length}`)
// console.log(`Total de vogais ${contador_vogal}`)
// console.log(`Total de consoantes ${contador_consoante}`)


// ARRAY: NOVO TIPO, UMA LISTA

const nome = "João"
const idade = 30
const altura = 1.85
const casado = true
const pessoa = [nome, idade, altura, casado]
const frutas = ["Abacaxi", "Melancia", "Uva", "Acerola", "Maça"]

console.log(pessoa)
console.log(pessoa[1])

frutas.push("Limão")
//  UNSHIFT: ADICIONA NO INICIO DA LISTA
frutas.unshift("Abacate")
// POP: REMOVE O ULTIMO ITEM
frutas.pop()
// SHIFT: REMOVE O ITEM DO COMEÇO DA LISTA
frutas.shift()
frutas.splice(2, 3)

frutas.sort()

// SORT: ORDENA EM ORDEM ALFABÉTICA OU DO MENOR PARA O MAIOR
// UNSHIFT: ADICIONA NO INICIO DA LISTA
// POP: REMOVE O ULTIMO ITEM
// SHIFT: REMOVE O ITEM DO COMEÇO DA LISTA
// PUSH: ADICIONAR NO FINAL DA LISTA
// SPLICE: ESCOLHE A PARTIR DO LOCAL(INDEX) QUE REMOVE 
// O SEGUNDO NUMERO, no caso acima, 3, REMOVE O NUMERO DE ITENS ESCOLHIDO

const pessoas = ["João", "Maria", "Pedro", "Ana", "Abel"]

console.log(pessoas)
pessoas.push("Amanda") // ADICIONANDO NO FINAL DA LISTA
console.log(pessoas)
pessoas.shift() // REMOVE JOÃO
console.log(pessoas)
pessoas.unshift("Raimundo")
console.log(pessoas)
pessoas.splice(2, 2, "Thais", "Vitoria")
console.log(pessoas)
console.log(`Atualmente, a lista possui ${pessoas.length} pessoas!`)
pessoas.splice(1,1)
console.log(pessoas)
console.log(pessoas.sort())
console.log(pessoas.reverse())
console.log(`A posição do index de Thais é ${pessoas.indexOf("Thais")}`)
console.log(pessoas)

for(pessoa_da_vez of pessoas)
{
    console.log(pessoa_da_vez)
    if(pessoa_da_vez === "Abel")
    {
        console.log("Olha o Abel")
    }
}

// FAZER ATIVIDADES 01 e 02 DO CRONOGRAMA AULA 04









