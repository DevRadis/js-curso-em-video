function calcular() {
  var txtp = window.document.querySelector('input#txtpais')
  var pais = (txtp.value).toLowerCase()
  var paisCapitalized = pais[0].toUpperCase() + pais.substr(1)
  var res = window.document.querySelector('div#res')
  res.innerHTML = `<p>Seu País atual é ${paisCapitalized}</p>`
if (pais === 'brasil') {
    res.innerHTML += `<p>Você é <strong>Brasileiro</strong>!</p>`
} else {
    res.innerHTML += `<p>Você é <strong>Estrangeiro</strong>!</p>`
  }
}
