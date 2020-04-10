import { Deck } from "./type";
import { Color, Num } from "./enums";

export function createDeck(){
    let deck:Deck = [];
    const colors = Object.values(Color);
    const nums = Object.values(Num);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            deck.push({
                color: colors[j],
                number: nums[i]
            })
        }
    }
    return deck;
}

export function printDeck(deck:Deck){
    let res = '';
    deck.forEach( (card,i) => {
        let str = card.color + card.number;
        res += str + '\t';
        if((i+1) % 6 === 0){
            res += '\n'
        }
    })
    console.log(res)
}