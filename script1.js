const valor_hora = Number(prompt("Digite quanto você ganha por hora: "))
const qtde_horas = Number(prompt("Digite quantas horas você trabalha por mês: "))

const salario_bruto = qtde_horas * valor_hora
const desconto_IR = salario_bruto * 0.11
const desconto_INSS = salario_bruto * 0.08
const desconto_sindicato = salario_bruto * 0.05
const salario_liquido = salario_bruto - desconto_INSS - desconto_IR - desconto_sindicato

console.log(`Salário bruto: ${salario_bruto}`)
console.log(`Desconto do Imposto de Renda: ${desconto_IR}`)
console.log(`Desconto do INSS: ${desconto_INSS}`)
console.log(`Desconto do Sindicato: ${desconto_sindicato}`)
console.log(`Salário liquido: ${salario_liquido}`)