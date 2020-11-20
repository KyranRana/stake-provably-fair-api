import { getFloatForGameSeed } from "./generator/FloatGenerator"

import { SingleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"

const NUMBER_OF_POCKETS = 37

export default function verifyRoulette(gameSeed: GameSeed): SingleResultGameEvent<number> {
  const { float, hmacsUsed } = getFloatForGameSeed(gameSeed) 
  
  const spin = Math.floor(float * NUMBER_OF_POCKETS)
  return { result: spin, hmacsUsed }
}