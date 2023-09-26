class Game{
    constructor(){
        this.screen = document.querySelector('.tela');
        this.alvo = document.createElement('div')

        this.initEvents();

    }

    initEvents(){

       this.createTarget();
       this.clicaNoAlvo();
    }

    createTarget(){
        let alvo = this.alvo;
        let tela = this.screen;

        let x = Math.floor(Math.random() * 800) + 1;
        let y = Math.floor(Math.random() * 800) + 1;

        alvo.classList.add('alvo');

         // Recuperando as coordenadas do alvo

        let targetCoordinates = alvo.getBoundingClientRect();
        let coordinatesX = targetCoordinates.x;
        let coordinatesY = targetCoordinates.y;

        coordinatesX = x + 'px';
        coordinatesY = y + 'px';

        alvo.style.top = coordinatesY;
        alvo.style.left = coordinatesX;

        tela.appendChild(alvo);

        //console.log('teste de recursão')

    }

    clicaNoAlvo(){
        if(this.alvo){
            this.alvo.addEventListener('click', e =>{

                let tela = this.screen.getBoundingClientRect();
                let alvoReady = this.alvo.getBoundingClientRect();

                if(parseInt(tela.width) < alvoReady.x && parseInt(tela.height) < alvoReady.y ){
                    console.log('a bolinha saiu da tela')
                }else{
                    console.log(' a bolinha não ta saindo da tela')
                    console.log(`largura da tela: ${tela.width} altura da tela: ${tela.height}`)
                }
               
                return this.createTarget();
                
            })
        }
    }

   

}

let game = new Game;



