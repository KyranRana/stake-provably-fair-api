import { getFloatsForGameSeed } from "./generator/FloatGenerator"

import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"
import { Gem } from "./model/game/DiamondsTypes"

import Gems from "./resources/Gems.json"

const NUMBER_OF_GEMS_REQUIRED = 5

export default function verifyDiamonds(gameSeed: GameSeed): MultipleResultGameEvent<Gem> {
  const { floats, hmacsUsed } = getFloatsForGameSeed(gameSeed, NUMBER_OF_GEMS_REQUIRED)
   
  const gems = floats.map(float => Gems[Math.floor(float * Gems.length)]) as Gem[]
  return { results: gems, hmacsUsed }
}