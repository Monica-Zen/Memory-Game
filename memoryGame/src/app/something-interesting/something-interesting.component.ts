import { Component } from '@angular/core';

export interface Card { value: string; flipped: boolean; }

@Component({
  selector: 'app-something-interesting',
  standalone: true,
  imports: [],
  template: `
  <div class="intro-text">
  <h2>Avengers Assemble!</h2>
  Hey there! Ready to test your memory skills? Click a tile and let the fun begin!
  </div>
  <div class="memory-game">
    @for(card of cards; track trackByValue) {
    <div class="card" (click)="flipCard(card)">
        <div [class.flipped]="card.flipped">
          <div class="front">*</div>
          <div class="back">{{ card.value }}</div>
        </div>
        @if (cards.length === 0) {
        <div>No cards to show</div>
        }
    </div>
    }
  </div>
  <div class="controls"> <button (click)="resetGame()">Reset</button> </div>
  `,
  styles: [` 
  body {
    font-style: 'Segoe UI'
  }

  .intro-text {
    text-align: center;
    margin: 40px 20px;
    font-size: 20px
  }

  .memory-game {
    display: grid;
    grid-template-columns: repeat(6, 10px);
    gap: 120px;
    justify-content: center;
    margin-top: 50px;
  }

  .card {
    width: 120px;
    height: 110px;
    cursor: pointer;
  }

  .card div {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }

  .front {
    background: #3498db;
    color: white;
    font-size: 18px;
  }

  .back {
    background: #2ecc71;
    color: black;
    transform: rotateY(180deg);
  }

  .controls {
    text-align: center;
    margin-top: 125px;
  }

  button {
    font-style: 'Segoe UI';
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  `]
})
  
export class SomethingInterestingComponent {
  cards: Card[] = [
    { value: 'Iron Man', flipped: false },
    { value: 'Iron Man', flipped: false },
    { value: 'Thor', flipped: false },
    { value: 'Thor', flipped: false },
    { value: 'Captain America', flipped: false },
    { value: 'Captain America', flipped: false },
    { value: 'Hulk', flipped: false },
    { value: 'Hulk', flipped: false },
    { value: 'Black Widow', flipped: false },
    { value: 'Black Widow', flipped: false },
    { value: 'Hawkeye', flipped: false },
    { value: 'Hawkeye', flipped: false }
  ];

  flippedCards: Card[] = [];

  constructor() {
    this.shuffleCards();
  }

  shuffleCards() {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  flipCard(card: Card) {
    if (card.flipped || this.flippedCards.length === 2) return;

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      setTimeout(() => {
        if (this.flippedCards[0].value === this.flippedCards[1].value) {
          this.flippedCards = [];
        } else {
          this.flippedCards.forEach(c => c.flipped = false);
          this.flippedCards = [];
        }
      }, 1000);
    }
  }

  trackByValue(index: number, card: Card): string {
    return card.value;
  }

  resetGame() {
    this.cards.forEach(card => card.flipped = false);
    this.flippedCards = [];
    this.shuffleCards();
  }
}
