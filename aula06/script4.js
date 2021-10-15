    var nome = window.prompt('Qual é o seu nome?')
    document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`)
    document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}!<br>`)
    document.write(`Seu nome em minúsculas é <strong>${nome.toLowerCase()}</strong>!<br>`)
    
    // n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    // n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    // n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})