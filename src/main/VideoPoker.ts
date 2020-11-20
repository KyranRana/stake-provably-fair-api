import { getFloatsForGameSeed } from "./generator/FloatGenerator"

import { Card } from "./model/Card"
import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"

import Cards from "./resources/Cards.json"

const NUMBER_OF_CARDS_REQUIRED = 10

export default function verifyVideoPoker(gameSeed: GameSeed): MultipleResultGameEvent<Card> {
  const { floats, hmacsUsed } = getFloatsForGameSeed(gameSeed, NUMBER_OF_CARDS_REQUIRED) 
  const CopyOfCards = JSON.parse(JSON.stringify(Cards))
  
  const cards: Card[] = []
  for (const float of floats) {
    cards.push(CopyOfCards.splice(Math.floor(float * CopyOfCards.length), 1)[0] as Card)
  }
  return { results: cards, hmacsUsed }
}