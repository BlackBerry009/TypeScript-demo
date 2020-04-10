import { type } from "os";

enum Color {
    heitao = '♠️',
    meihua = '♣️',
    hongtao = '♥️',
    fangkuai = '♦️'
}

enum Num {
    A = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    J = 'J',
    Q = 'Q',
    K = 'K'
}

type aPoker = {
    color: Color,
    number: Num
}

type Deck = aPoker[];

function createDeck(){
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

function printDeck(deck:Deck){
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

printDeck(createDeck());