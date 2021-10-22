function soma(n1, n2) { //parâmetros opcionais no JS, n1=0 e n2=0, no caso o parâmetro receberá o 0 se a soma não ouver 2 números como parâmetro. 
  return n1 + n2
}

console.log(soma(2, 5))


function soma(n1=0, n2=0) { //parâmetros opcionais no JS, n1=0 e n2=0, no caso o parâmetro receberá o 0 se a soma não ouver 2 números como parâmetro. 
  return n1 + n2
}

console.log(soma(7))