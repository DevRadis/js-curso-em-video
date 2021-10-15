// o JS agora entende a funcão Number sozinha também para as duas funcões. Number = Number.parseInt e Number.parseFloat

var n1 = Number(prompt('Digite um número: ')) // Para converter para números inteiros colocar o Number.parseInt a frente do prompt.
var n2 = Number(window.prompt('Digite outro número: ')) // Para converter para números fracionado (15.1) colocar o Number.parseFloat a frente do prompt.
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`) // Concatenação 
 // Outro modo de representação pode ser o ('A soma é igual a ' + s)
 // Também podemos fazer o + String(s)) ou s.ToString()) ou apenas usar o + s
 // (number + number) para adição
 // (string + string) para concatenação