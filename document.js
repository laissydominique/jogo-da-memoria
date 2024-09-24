document.addEventListener("DOMContentLoaded",() =>{

    const cards = [
        {
            name:'flora',
            img: 'imgs/flora.png'
        },
        {
            name: 'tecna',
            img: 'imgs/tecna.png'
        },
        {
            name: 'bloom',
            img: 'imgs/bloom.png'
        },
        {
            name: 'layla',
            img: 'imgs/layla.png'
        },
        {
            name: 'musa',
            img: 'imgs/musa.png'
        },
        {
            name: 'stella',
            img: 'imgs/stella.png'
        },
        {
            name:'flora',
            img: 'imgs/flora.png'
        },
        {
            name: 'tecna',
            img: 'imgs/tecna.png'
        },
        {
            name: 'bloom',
            img: 'imgs/bloom.png'
        },
        {
            name: 'layla',
            img: 'imgs/layla.png'
        },
        {
            name: 'musa',
            img: 'imgs/musa.png'
        },
        {
            name: 'stella',
            img: 'imgs/stella.png'
        }
    ] 

    cards.sort(() => 0.5 - Math.random());

    const result = document.querySelector('.result');
    const game = document.querySelector('.memory-game');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let points = 0;
    const pontuation = document.querySelector('.pontuation');


    function createBoard(){
        for(let i = 0; i <cards.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'imgs/image.png');
            card.setAttribute('width', '250px');
            card.setAttribute('height', '300px');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            game.appendChild(card);
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img)

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500);
        }

    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'imgs/image.png');
            cards[optionTwoId].setAttribute('src', 'imgs/image.png');
            alert("Você clicou na mesma imagem!");
        }

        else if(cardsChosen[0] === cardsChosen[1]){
            cards[optionOneId].setAttribute('src', 'imgs/check.png');
            cards[optionTwoId].setAttribute('src', 'imgs/check.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen)
            points = points + 10;
            pontuation.innerHTML = "Pontuação: " + points;

        }else{
            cards[optionOneId].setAttribute('src', 'imgs/image.png');
            cards[optionTwoId].setAttribute('src', 'imgs/image.png');
            
        }
        cardsChosen = [];
        cardsChosenId = [];
        if(cardsWon === cards.length/2){
            const result = document.querySelector('.result');
        }

    }

    createBoard();
})