//Adiciona evento para quando for clicado no botao converter
document.getElementById('btn-converter').addEventListener('click', e => { verificaOpcao() })

//Adiciona evento para quando for pressionado ENTER
document.addEventListener('keydown', e =>{ 
    if (event.keyCode == 13){    
        verificaOpcao()
    }
})

//Grava em uma constante o valor digitado pelo usuário
const entradaUsuario = document.querySelector("#valorA")

//Verifica qual opcao o usuario selecionou
function verificaOpcao(){
    
    if(document.getElementById('binario').checked){
        converteBinario()        
    } else if (document.getElementById('decimal').checked){
        converteDecimal()
    } else if (document.getElementById('hexadecimal').checked){
        converteHexadecimal()
    } else if (document.getElementById('octal').checked){
        converteOctal()
    }
}

//Função para calcular potencia
function calculaPotencia(valor, potencia){
    let soma = 1
    for(let i = 0; i < potencia; i++){
        soma *= valor
    }
    return soma
}

//Converte de binário para decimal OK
function binarioParaDecimal (binario){
    let converte = 0
    for(let i = 0; i < binario.length; i++){
        if(binario[i] == 1){
            converte += calculaPotencia(2, binario.length-i-1)
        }
    }
    return converte
}

//Converte decimal para binario OK
function decimalParaBinario(decimal){
    let conversao = ''
    let valor = decimal
    while(valor >= 1){
        let resultado = valor % 2
        conversao = resultado + conversao
        valor = parseInt(valor / 2)
    }
    return conversao
}

//Converte de Hexadecimal para binário OK
function hexadecimalParaBinario(hexadecimal){
    let conversao = ''
    for(let i = 0; i < hexadecimal.length; i++){
        if(hexadecimal[i] == 'A'){
            conversao += '1010'
        } else if(hexadecimal[i] == 'B') {
            conversao += '1011'
        } else if (hexadecimal[i] == 'C'){
            conversao += '1100'
        } else if (hexadecimal[i] == 'D') {
            conversao += '1101'
        } else if (hexadecimal[i] == 'E'){
            conversao += '1110'
        } else if (hexadecimal[i] == 'F'){
            conversao += '1111'
        } else {
            conversao += decimalParaBinario(hexadecimal[i])
        }
    }
    return conversao
}

//Converte binario para hexadecimal OK
function binarioParaHexadecimal(binario){
    let converter = ''
    let contador = binario.length
    let separaDados = []
    while(contador >= 0){
        separaDados.push(binario.substring(contador, contador-4))
        contador -= 4
    }

    for(let i = separaDados.length; i >= 0; i--){
        if (separaDados[i] == '1010'){
            converter += 'A'
        } else if (separaDados[i] == '1011'){
            converter += 'B'
        } else if (separaDados[i] == '1100'){
            converter += 'C'
        } else if (separaDados[i] == '1101'){
            converter += 'D'
        } else if (separaDados[i] == '1110'){
            converter += 'E'
        } else if (separaDados[i] == '1111'){
            converter += 'F'
        } else {
            converter += binarioParaDecimal(String(separaDados[i]))
        }
    }
    return converter
}


//Converte binario para Octal 
function binarioParaOctal(binario){
    let converter = ''
    let contador = binario.length
    let separaDados = []
    while(contador >= 0){
        separaDados.push(binario.substring(contador, contador-3))
        contador -= 3
    }

    for(let i = separaDados.length; i >= 0; i--){
        if (separaDados[i] == '000'){
            converter += '0'
        } else if (separaDados[i] == '001' || separaDados[i] == '01' || separaDados[i] == '1'){
            converter += '1'
        } else if (separaDados[i] == '010' || separaDados[i] == '10'){
            converter += '2'
        } else if (separaDados[i] == '011' || separaDados[i] == '11'){
            converter += '3'
        } else if (separaDados[i] == '100'){
            converter += '4'
        } else if (separaDados[i] == '101'){
            converter += '5'
        } else if (separaDados[i] == '110'){
            converter += '6'
        } else if (separaDados[i] == '111'){
            converter += '7'
        }
    }
    return converter
}

//Decimal para Hexadecimal
function decimalParaHexadecimal(decimal){
    let conversao = ''
    let valor = decimal
    while(valor >= 1){
        let resultado = valor % 16
        if(resultado == 10){
            conversao = 'A' + conversao
        } else if(resultado == 11){
            conversao = 'B' + conversao
        } else if(resultado == 12){
            conversao = 'C' + conversao
        } else if(resultado == 13){
            conversao = 'D' + conversao
        } else if(resultado == 14){
            conversao = 'E' + conversao
        } else if(resultado == 15){
            conversao = 'F' + conversao
        } else {
            conversao = resultado + conversao
        }
        valor = parseInt(valor / 16)
    }
    return conversao
}

//Converte decimal para octal
function decimalParaOctal(decimal){
    let conversao = ''
    let valor = decimal
    while(valor >= 1){
        let resultado = valor % 8
        conversao = resultado + conversao
        valor = parseInt(valor / 8)
    }
    return conversao
}

//Converte Hexadecimal para Decimal
function hexadecimalParaDecimal(hexadecimal){
    let converte = 0
    let inverterOrdem = []
    let j = 0
    for(let i = hexadecimal.length-1; i >= 0; i--){
        inverterOrdem[j] = hexadecimal[i]
        j++ 
    }

    for(let i = 0; i < hexadecimal.length; i++){

        if(inverterOrdem[i] == 'A'){
            inverterOrdem[i] = 10
        } else if(inverterOrdem[i] == 'B'){
            inverterOrdem[i] = 11
        } else if(inverterOrdem[i] == 'C'){
            inverterOrdem[i] = 12
        } else if(inverterOrdem[i] == 'D'){
            inverterOrdem[i] = 13
        } else if(inverterOrdem[i] == 'E'){
            inverterOrdem[i] = 14
        } else if(inverterOrdem[i] == 'F'){
            inverterOrdem[i] = 15
        }
        
        converte += parseInt(inverterOrdem[i]) * (calculaPotencia(16, i))
    }
    return converte
}

//Converte hexadecimal para octal
function hexadecimalParaOctal(hexadecimal){
    let binario = hexadecimalParaBinario(hexadecimal)
    let octal = binarioParaOctal(binario)
    return octal
}

//Converte Octal para Binario
function octalParaBinario(octal){
    let converte = ''

    for(let i = 0; i <= octal.length-1; i++){
        if(octal[i] > 3){
            converte += decimalParaBinario(octal[i])
        } else {
            converte += '0'
            converte += decimalParaBinario(octal[i])
        }
    }
    return converte
}

//Converte octal para Decimal
function octalParaDecimal(octal){
    let converte = 0
    for(let i = 0; i < octal.length; i++){
        converte += octal[i] * (calculaPotencia(8, octal.length-i-1))    
    }
    return converte
}

//Converte octal para hexadecimal
function octalParaHexadecimal(octal){
    let decimal = octalParaDecimal(octal)
    let hexadecimal = decimalParaHexadecimal(decimal)
    return hexadecimal
}

//Insere linha com conversões a partir de um binário
function converteBinario(){
    //Criando o template das colunas da linha atual
    let template = `
    <td>${entradaUsuario.value}</td>
    <td>${binarioParaDecimal(entradaUsuario.value)}</td>
    <td>${binarioParaHexadecimal(entradaUsuario.value)}</td>
    <td>${binarioParaOctal(entradaUsuario.value)}</td>
    `

    //Criando o elemnto tr
    let tr = document.createElement("tr");

    //Inserindo as colunas na linha
    tr.innerHTML = template;

    //Inserindo linha na tabela
    conversor.append(tr);
}

//Insere linha com conversões a partir de um decimal
function converteDecimal(){
    //Criando o template das colunas da linha atual
    let template = `
    <td>${decimalParaBinario(entradaUsuario.value)}</td>
    <td>${entradaUsuario.value}</td>
    <td>${decimalParaHexadecimal(entradaUsuario.value)}</td>
    <td>${decimalParaOctal(entradaUsuario.value)}</td>
    `

    //Criando o elemnto tr
    let tr = document.createElement("tr");

    //Inserindo as colunas na linha
    tr.innerHTML = template;

    //Inserindo linha na tabela
    conversor.append(tr);

}

//Insere linha com conversões a partir de um Hexadecimal
function converteHexadecimal(){
    //Criando o template das colunas da linha atual
    let template = `
    <td>${hexadecimalParaBinario(entradaUsuario.value)}</td>
    <td>${hexadecimalParaDecimal(entradaUsuario.value)}</td>
    <td>${entradaUsuario.value}</td>
    <td>${hexadecimalParaOctal(entradaUsuario.value)}</td>
    `

    //Criando o elemnto tr
    let tr = document.createElement("tr");

    //Inserindo as colunas na linha
    tr.innerHTML = template;

    //Inserindo linha na tabela
    conversor.append(tr);

}

//Insere linha com conversões a partir de um Octal
function converteOctal(){
    //Criando o template das colunas da linha atual
    let template = `
    <td>${octalParaBinario(entradaUsuario.value)}</td>
    <td>${octalParaDecimal(entradaUsuario.value)}</td>
    <td>${octalParaHexadecimal(entradaUsuario.value)}</td>
    <td>${entradaUsuario.value}</td>
    `

    //Criando o elemnto tr
    let tr = document.createElement("tr");

    //Inserindo as colunas na linha
    tr.innerHTML = template;

    //Inserindo linha na tabela
    conversor.append(tr);
}