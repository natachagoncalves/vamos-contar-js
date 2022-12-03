function contar () {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value == 0 || fim.value == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(inicio.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('"Pular de" não preenchido. Consideramos pular de 1 em 1.')
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) { // += o contator vai ganhar o passo/pulo
                res.innerHTML += ` ${c}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {  // -= o contador vai perder o passo/pula
                res.innerHTML += ` ${c}`
            } 
        }

    } 
    res.style.fontSize = '17px'

}