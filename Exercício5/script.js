let list = []

function validarNum(i){
    if(i >= 1 && i <= 100){
        return true
    } else {
        return false
    }
}

function adicionar() {
    let input = document.querySelector('#num')
    let i = Number(input.value)


    if(i.length == 0 || !Number.isInteger(i) || !validarNum(i)){
        alert("Dados inválidos, digite novamente!")
    } else {

        if(list.indexOf(i) == -1){
            let select = document.getElementById("select")

            select.innerHTML += `<option>${i} adicionado a lista!</option>`

            list.push(i)

        } else {
            console.log("Repetiu!")
        }
    }
}

function finalizar(){
    if(list.length == 0){
        alert("Você não pode finalizar sem adicionar um item!")
    } else {
        list.sort()
        let res = 0

        for(let c = 0; c < list.length; c++){
            res += list[c]
        }

        let media = res / list.length

        let d = document.querySelector(".div3")
        d.innerHTML = `<p>Ao todo temos ${list.length} números cadastrados.</p>`
        d.innerHTML += `<p>O maior valor informado é: ${list[list.length-1]}</p>`
        d.innerHTML += `<p>O menor valor informado é: ${list[0]}</p>`
        d.innerHTML += `<p>Somando todos os valores, temos: ${res}</p>`
        d.innerHTML += `<p>A média desses valores: ${media}</p>`
    }
}