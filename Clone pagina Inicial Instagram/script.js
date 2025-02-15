let imagem = document.querySelector('.trocar-imagem');

function AlternarVisibilidade(){


            if (imagem.style.opacity == 0) {
            imagem.style.opacity = 1; 
        } else {
            imagem.style.opacity = 0; 
        }
    }




setInterval(AlternarVisibilidade, 5000); 