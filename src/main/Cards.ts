import { getFloatsForGameSeed } from "./generator/FloatGenerator"

import { Card } from "./model/Card"
import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"

import Cards from "./resources/Cards.json"

export default function verifyCards(
  gameSeed: GameSeed, numberOfCards: number): MultipleResultGameEvent<Card> {
  
  const { floats, hmacsUsed } = getFloatsForGameSeed(gameSeed, numberOfCards) 
  
  const cards = floats.map(float => Cards[Math.floor(float * Cards.length)]) as Card[]
  return { results: cards, hmacsUsed }
}