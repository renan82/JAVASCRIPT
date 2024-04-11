// const n1 = Number(prompt("DIGITE O PRIMEIRO NUMERO"))
// const n2 = Number(prompt("DIGITE O SEGUNDO NUMERO"))
// const n3 = Number(prompt("DIGITE O TERCEIRO NUMERO"))

// if(n1 > n2 && n1 > n3)
// {alert(`O MAIOR NÚMERO É ${n1}`)}
// else if(n2 > n1 && n2 > n3)
// {alert(`O MAIOR NÚMERO É ${n2}`)}
// else if(n3 > n1 && n3 > n2)
// {alert(`O MAIOR NÚMERO É ${n3}`)}
// else if(n1 == n2 && n1==n3 || n2==n3)
// {alert(`TODOS SÃO IGUAIS!!!`)}

// const login = "joao@email.com"
// const senha = "123456J@"

// const login1 = (prompt("DIGITE O LOGIN CADASTRADO: "))

// const senha1 = (prompt("QUAL A SENHA CADASTRADA: "))


// if(login === login1){
//     if(senha === senha1)
//     {alert("ACESSO CONCEDIDO!!!")}
//     else{("SENHA INCORRETA!!!")}

// }else{alert("LOGIN INCORRETO, TENTE NOVAMENTE")}


// length = DETERMINA O TAMANHO DA PALAVRA IGUAL AO len() do PYTHON

// const letra = prompt("Digite uma letra ")

// if(letra.length === 1)
// {
// const vogais = "aeiou"
// const consoantes = "bcdfghjklmnpqrstvxywz"
// if(vogais.includes(letra.toLowerCase)){alert("A LETRA É VOGAL")}
// else if(consoantes.includes(letra.toLowerCase)){alert("A LETRA É CONSOANTE")}
// else(alert("DIGITE APENAS LETRAS"))

// }
// else(alert("DIGITE APENAS LETRAS DO ALFABETO (A - Z)"))

// AULA 03 ----- COMEÇA AQUI

while(true)
{
    const n = Number(prompt("Digite um número ou 0 para sair: "))
    if(n ===0)
    {alert("BYE BYE!!!")
    break}
    
}

// FAÇA UM PROGRAMA QUE PEDE UM NUMERO E MOSTRE SE ELE É POSITIVO OU NEGATIVO UMA QUANTIDADE ILIMITADA DE VEZES,
// ENQUANTO O USUÁRIO NÃO DIGITAR O NUMERO 0

while(true)
{
    const n = Number(prompt("Digite um número ou 0 para sair: "))
    if(n > 0)
    {alert("Número positivo")}
    else if(n < 0)
    {alert("Número negativo")}
    else if(n === 0)
    {alert('DIGITOU "O" , TCHAUZINHO!')}
    break

}

