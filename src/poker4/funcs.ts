import { Deck, Joker, Card, aPoker } from "./type";
import { Color, Num } from "./enums";

export function createDeck(){
    let deck:Deck = [];
    const colors = Object.values(Color);
    const nums = Object.values(Num);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            deck.push({
                color: colors[j],
                number: nums[i],
                getString(){
                    return this.color + this.number
                }
            } as Card)
        }
    }
    deck.push({
        type: 'big',
        getString(){
            return 'JOKER'
        }
    } as Joker)

    deck.push({
        type: 'small',
        getString(){
            return 'joker'
        }
    } as Joker)

    return deck;
}

export function printDeck(deck:Deck){
    let res = '';
    deck.forEach( (card,i) => {
        res += card.getString() + '\t';
        if((i+1) % 6 === 0){
            res += '\n'
        }
    })
    console.log(res)
}