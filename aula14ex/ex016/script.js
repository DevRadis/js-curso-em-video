function contar() {
  var ini = window.document.querySelector('div#txti')
  var fim = window.document.querySelector('div#txtf')
  var passo = window.document.querySelector('div#txtp')
  
  if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    //res.innerHTML = 'Impossível contar!'
  } else {
    window.alert('TUDO OK!')
    /*
    var ini = Number(txtin.value)
    var fim = Number(txtfim.value)
    var pass = Number(txtpas.value)
    if ((ini.value + fim.value) * pass == res) {
      res.innerHTML += `${res} Este é o resultado`
    }*/
  }
}

