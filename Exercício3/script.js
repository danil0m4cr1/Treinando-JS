function clicar(){
    let inicio = Number(document.querySelector('#inicio').value);
    let fim = Number(document.querySelector('#fim').value);
    let passo = Number(document.querySelector('#passo').value);
    let contagem = document.querySelector('.contagem');

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0 || !Number.isInteger(inicio) || !Number.isInteger(fim) || !Number.isInteger(passo)){
        alert("Dados inválidos, digite novamente");
    } else{
        contagem.innerHTML = `Contagem: `;

        if(inicio <= fim){
            for(let i = inicio; i <= fim; i += passo){
                console.log(i);
                contagem.innerHTML += `\u{1F449} ${i}`;
            }
        } else {
            for(let i = inicio; i >= fim; i -= passo){
                console.log(i);
                contagem.innerHTML += `\u{1F449} ${i}`;
            }
        }
    }
}