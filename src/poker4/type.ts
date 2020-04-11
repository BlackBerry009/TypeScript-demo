import { Color, Num } from "./enums";

export interface Card {
    getString(): string
}

export interface aPoker extends Card{
    color: Color
    number: Num
}

export interface Joker extends Card{
    type: "big" | "small"
}

export type Deck = Card[]
