import { type } from "os"

type aPoker = {
    color: '♣️'|'♠️'|'♥️'|'♦️',
    number:number
}

type Deck = aPoker[];

function createDeck(){
    let deck:Deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color: '♠️',
            number: i
        })
        deck.push({
            color: '♣️',
            number: i
        })
        deck.push({
            color: '♥️',
            number: i
        })
        deck.push({
            color: '♦️',
            number: i
        })
    }
    return deck;
}

function printDeck(deck:Deck){
    let res = '';
    deck.forEach( (card,i) => {
        let str = card.color
        if(card.number <= 10){
            str += card.number;
        } else if(card.number === 11){
            str += 'J'
        } else if(card.number === 12){
            str += 'Q'
        } else if(card.number === 13){
            str += 'K';
        }

        res += str + '\t';
        if((i+1) % 6 === 0){
            res += '\n'
        }
    })
    console.log(res)
}

printDeck(createDeck());