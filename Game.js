'use strict';

let counter = 0;
let firstClick = '';
let secondClick = '';

// let cardsNumber = Math.trunc( Math.random () * 16)+1
const cards = document.querySelectorAll('.cards .card');
let score=0;
let chance=5;
cards.forEach((card) =>{
  card.addEventListener('click',()=>{
    card.classList.add('clicked');
    if(counter===0){
      firstClick= card.getAttribute('image');
      counter++;
    }else{
      secondClick =card.getAttribute('image');
      counter=0;

      if (firstClick === secondClick){

        score++;
        document.querySelector('.score').textContent=score;
        const correctCard= document.querySelectorAll('.card[image= ' + secondClick + ']' );
        correctCard[0].classList.add('checked');
        correctCard[0].classList.remove('clicked');
        correctCard[1].classList.add('checked');
        correctCard[1].classList.remove('clicked');
        correctCard[0].classList.add('remove');
        correctCard[1].classList.add('remove');
        document.querySelector('.message').textContent='Matched'
        if(score > 7){
          document.querySelector('.message').textContent='Congratulation You Win 🏆🎉'
          document.querySelector('body').style.backgroundColor='#ff00f0'
        }
      }else if(firstClick !== secondClick){
        chance--;
        document.querySelector('.highscore').textContent=chance;
        document.querySelector('.message').textContent='Try again!'
        if(chance < 1){
          document.querySelector('.message').textContent='Sorry You Lose💔😖 ';
          document.querySelector('body').style.backgroundColor='#f00';
          document.querySelector('.highscore').textContent=0
        }
        const incorrectCard = document.querySelectorAll('.card.clicked');
        incorrectCard[0].classList.add('shake');
        incorrectCard[1].classList.add('shake');

        setTimeout(()=>{
        incorrectCard[0].classList.remove('shake');
        incorrectCard[0].classList.remove('clicked');
        incorrectCard[1].classList.remove('shake');
        incorrectCard[1].classList.remove('clicked');
        },800)
      }
    }
  } )
} )

