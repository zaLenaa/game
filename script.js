class Game {
    constructor() {
        this.el = {
            main: document.querySelector('.main'),
            form: document.querySelector('.menu__form'),
            card: document.querySelectorAll('.container__cards .container__card'),
            bug: document.querySelectorAll('.card__face_back'),
            container: document.querySelector('.container'),
            wrap: document.querySelector('.container__wrap'),
            cards: document.querySelector('.container__cards')
        };

        this.isTurn = false;

        this.el.form.addEventListener('submit', event => {
            const checked = this.el.form.querySelector('input[name="level"]:checked');

            this.el.main.dataset.screen = checked.value;

            this.el.form.reset();

            event.preventDefault();

            this.bug();
        });


    }
     bug() {
         function random(min, max){
             return Math.floor(Math.random() * (max - min + 1)) + min;

         }
         let number;
         const countSimple = 3;
         const countMedium = 6;
         const countComplicated = 10;

        if(this.el.main.dataset.screen === 'simple') {
            for(let i = 0; i < countSimple; i++){
                let card = this.el.wrap.children[0].cloneNode(true);
                this.el.cards.appendChild(card);
            }

            this.el.cards.classList.add('simple');

            this.el.bug  = document.querySelectorAll('.card__face_back');

            number = random(1, 3);
            this.bugCard = this.el.bug[number];
            this.bugCard.classList.add('bug');

        }else if(this.el.main.dataset.screen === 'medium'){

            for(let i = 0; i < countMedium; i++){
                let card = this.el.wrap.children[0].cloneNode(true);
                this.el.cards.appendChild(card);
            }

            this.el.cards.classList.add('medium');

            this.el.bug  = document.querySelectorAll('.card__face_back');

            number = random(1, 6);
            this.bugCard = this.el.bug[number];
            this.bugCard.classList.add('bug');

        }else if(this.el.main.dataset.screen === 'complicated'){

            for(let i = 0; i < countComplicated; i++){
                let card = this.el.wrap.children[0].cloneNode(true);
                this.el.cards.appendChild(card);
            }

            this.el.cards.classList.add('complicated');

            this.el.bug  = document.querySelectorAll('.card__face_back');

            number = random(1, 10);
            this.bugCard = this.el.bug[number];
            this.bugCard.classList.add('bug');
        }

        this.el.card = document.querySelectorAll('.container__cards .container__card');

         this.el.card.forEach(item => {
             item.addEventListener('click', () => {
                 if (this.isTurn) {
                     this.el.main.dataset.screen = 'menu';
                     this.isTurn.classList.remove('active');
                     this.isTurn = false;
                     this.bugCard.classList.remove('bug');
                     this.el.cards.innerHTML = ''
                 } else {
                     item.classList.add('active');
                     this.isTurn = item;
                 }
             })
         });
    };
}

new Game();





