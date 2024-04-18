let soma = 0
let qtde_notas = 0

while(true){
    const nota = Number(prompt("Digite uma nota: "))
    if(nota > 10 || nota <0){
        break
    }else{
        soma += nota
        qtde_notas++
    }
}

const media = soma / qtde_notas

if(media >= 7){
    alert(`Aprovado com a média ${media.toFixed(1)}`)
}else{
    alert(`Reprovado com a média ${media.toFixed(1)}`)
}

