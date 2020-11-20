import { getFloatForGameSeed } from "./generator/FloatGenerator"

import { SingleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"

const NUMBER_OF_POSSIBLE_OUTCOMES = 10001

export default function verifyDice(gameSeed: GameSeed): SingleResultGameEvent<number> {
  const { float, hmacsUsed } = getFloatForGameSeed(gameSeed) 

  const rollNumber = Math.floor(float * NUMBER_OF_POSSIBLE_OUTCOMES) / 100
  return { result: rollNumber, hmacsUsed }
}