function clicar(){
    let input = document.getElementById('input')
    let i = Number(input.value)

    if(i.length == 0 || !Number.isInteger(i)){
        alert("Dados inválidos, digite novamente!")
    } else {

        let c = 1
        let select = document.querySelector('#select')
        select.innerHTML = ""

        while(c <= 10){
            select.innerHTML += `<option>${i} x ${c} = ${i*c}</option>`
            console.log(select)
            c++
        }
    }
}