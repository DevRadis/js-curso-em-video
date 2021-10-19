function contar() {
  let ini = window.document.querySelector('div#txti')
  let fim = window.document.querySelector('div#txtf')
  let passo = window.document.querySelector('div#txtp')
  let res = window.document.querySelector('div#res')
  
  if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(txti.value)
    let f = Number(txtf.value)
    let p = Number(txtp.value)
    if (p <= 0) {
      window.alert('Passo inválido! Será considerado PASSO 1')
      p = 1
    }
    if (i < f) {
      // Contagem crescente
      for(let c = i; c <= f; c+= p) {
        res.innerHTML += ` ${c} \u{1F449} `
      }
    } else {
      // Contagem regressiva
      for(let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
      res.innerHTML += `\u{1F3C1}`
    }
  }