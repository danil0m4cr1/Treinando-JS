let agora = new Date();
let ano = agora.getFullYear();
let anoNas = document.getElementById('ano-ins');
let s = document.getElementsByName('radSex');


function verificar(){
    if(anoNas.value.length <= 3 || Number(anoNas.value) > ano){
        window.alert("Dados inválidos, digite novamente!");
    } else {
        var idade = ano - Number(anoNas.value);
        let foto = document.createElement('img');
        foto.setAttribute('id', 'foto');
        let imagem = document.getElementById('foto');
        let d = document.getElementById('div3');
        sex = ''
        
        if(s[0].checked){
            sex = 'Homem';
            if(idade >= 4 && idade <= 10){
                foto.setAttribute('src', 'img/criancaM.png');
            }
            else if(idade > 10 && idade < 18){
                foto.setAttribute('src', 'img/jovemM.png');
            }
            else if(idade >= 18 && idade <= 59){
                foto.setAttribute('src', 'img/adultoM.png');
            }
            else {
                foto.setAttribute('src', 'img/idosoM.png');
            }

        } else if(s[1].checked){
            sex = 'Mulher';
            if(idade >= 4 && idade <= 10){
                foto.setAttribute('src', 'img/criancaF.png');
            }
            else if(idade > 10 && idade < 18){
                foto.setAttribute('src', 'img/jovemF.png');
            }
            else if(idade >= 18 && idade <= 59){
                foto.setAttribute('src', 'img/adultaF.png');
            }
            else {
                foto.setAttribute('src', 'img/idosaF.png');
            }
        }

        d.innerHTML += `<p>Verificamos ${sex} com ${idade} anos.</p>`;
        d.style.textAlign = 'center';
        d.appendChild(foto);
        foto.style.margin = '1rem';
    }
}