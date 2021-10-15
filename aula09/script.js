/*
    SIGNIFICADO DE DOM = DOCUMENT OBJECT MODEL
    */

    /*  
    DIV ID = # 
    CLASS = .
    */
   
    /* 
    Posso usar também o SELETOR, var d = window.document.querySelector('div#msg')
    */

    /* 
    Neste caso do ID eu posso modificar por NAME="msg" que no JS eu usaria o .getElementsByName
    */

    /* 
    Posso também usar o CLASS="msg" usando no JS o getElementsByClassName 
    */
    var corpo = window.document.body
    var p1 = window.document.getElementsByTagName('p')[1]
    var d = window.document.getElementById('msg')
    window.document.write('Está escrito assim: ' + p1.innerHTML)
    d.style.background = 'green'
    d.innerText = 'Estou aguardando...' // Feita alteração no div id="msg", nesse caso foi substituido o conteudo completo do parágrafo. Podemos também fazer o documento da maneira completa com o window.document.getElementById('msg').innerText = 'Estou aguardando...'

    // se for transformar o .innerHTML em .alert ele irá abrir com as tags, o correto nesse caso é usar o .innerText

    // document.write(p1.innerText) << pega o texto sem formatação.

    // document.write(p1.innerHTML) << pega o texto com formatação

    // corpo.style.background = 'black'

    // p1.style.color = 'blue'