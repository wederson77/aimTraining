let tela = document.querySelector('#tela');
let alvo = document.createElement('div') ;

createTarget();

function createTarget(){

    let larguraDaTela = tela.offsetWidth;
    let alturaDaTela = tela.offsetHeight;

    let x = Math.floor(Math.random() * 1000) + 1;
    let y = Math.floor(Math.random() * 1000) + 1;


    alvo.classList.add('alvo');
    tela.appendChild(alvo);

// Recuperando as coordenadas do alvo

    let targetCoordinates = alvo.getBoundingClientRect();
    let coordinatesX = targetCoordinates.x;
    let coordinatesY = targetCoordinates.y;

    coordinatesX = x + 'px';
    coordinatesY = y + 'px';
    

  

        alvo.style.top = coordinatesY;
        alvo.style.left = coordinatesX;



   

    console.log(larguraDaTela,alturaDaTela )

    console.log(coordinatesX, coordinatesY)
  
    //console.log('porra')
  
   // console.log('altura: ' +  alturaDaTela, 'largura: ' +  larguraDaTela)
   // console.log(alturaDaTela, larguraDaTela)

    

}

alvo.addEventListener('click', e =>{
    
    createTarget()
})