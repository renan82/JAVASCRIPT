// for (let i = 55; i <= 97; i= i + 1)
// {

// if (i % 2 === 0)
// {
//     console.log(i)
// }
// }


// TABUADA
// const n = Number(prompt("Digite um número para a TABUADA: "))
// console.log(`TABUADA de ${n}`)
// for(let i = 1; i <=10;i++)
// {
//     console.log (`${n} x ${i} = ${n * i}`)
// }

// PROGRAMA CONTAR DE TRÁS PRA FRENTE
// const n = Number(prompt("Digite um número inteiro positivo: "))

// for(let i = n; i >= 0; i--)
// {
//     console.log(i)

// }
// const nome1 = prompt("Digite seu nome")
// let qtde_letra = 0
// const todos_os_a = "aáàâã"
// for(let letra of nome1.toLowerCase()){
//     if(letra === "a")
//     {qtde_letra ++}
// }
// alert(`Seu nome tem ${qtde_letra} letra(s) "a"`)


// const nome = prompt("Digite seu nome: ")
// let qtde_de_a = 0
// const todos_os_as = "aáàãâä"


// for(let letra_da_vez of nome.toLowerCase()){
//     if(todos_os_as.includes(letra_da_vez)){
//         qtde_de_a++
//     }
// }
// alert(`Seu nome tem ${qtde_de_a} letras A`)

// MOSTRADOR DE SOMENTE CONSOANTES
// const palavra = prompt("DIGITE UMA PALAVRA")
// const vogais = "aeiou"
// let consoante = ""
// for(let letra_da_vez of palavra.toLowerCase){
// if(!vogais.includes(letra_da_vez))
// {
//         consoante += letra_da_vez
// }

// }
// alert(consoante)


// CONTADOR DE VOGAIS USANDO FUNÇÃO
const palavra = prompt("Digite uma palavra")

function Contar(palavra)
{
const vogais = "aeiou"
let contador = 0
for(let letra of palavra)
{
    if(vogais.includes(letra))
    {contador++}
}
return contador
}
const numero_vogais = Contar(palavra)

alert(`A palavra tem ${numero_vogais} vogais`)

// ATIVIDADE 08
n1 = prompt

