let agora = new Date();
let hora = agora.getHours();

var d = document.getElementById('div1');
var foto = document.createElement('img');

function carregar(){
    d.innerHTML = `Agora são ${hora} horas`;

    foto.style.height = '250px';
    foto.style.width = '250px';
    foto.style.marginTop = '1rem';

    if (hora >= 4 && hora < 12){
        foto.setAttribute("src", "img/manha1.png")
        d.appendChild(foto)
        document.body.style.backgroundColor = '#ffdc7b'

    } else if (hora >= 12 && hora <= 18){
        foto.setAttribute("src", "img/tarde1.png")
        d.appendChild(foto)
        document.body.style.backgroundColor = '#fd8609'

    } else if (hora > 18 && hora <= 24 || hora < 4){
        foto.setAttribute("src", "img/noite1.png")
        d.appendChild(foto)
        document.body.style.backgroundColor = '#0c0a32'
    }
}