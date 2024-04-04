const numero1 = 5
const numero2 = 8
const numero3 = "5"
console.log(numero1 == numero2)
console.log(numero1 == numero3)
console.log(numero1 === numero3) 
// === pra comparar o nome e o tipo da variável
console.log(numero1 != numero3)
console.log(numero1 !== numero3)
console.log(numero1 > numero2)
console.log(numero1 < numero2)
console.log(numero1 >= numero2)
console.log(numero1 <= numero2)

// CONDICIONAIS

const idade = Number(prompt("Qual a sua idade?"))

if(idade >= 16 && idade < 18)
{alert("Voto facultativo!")}
else if (idade >= 18 && idade <= 70)
{alert("Voto obrigatório")}
else if(idade > 70)
{alert("Voto facultativo")}
else
{alert("Você não pode votar!")}

