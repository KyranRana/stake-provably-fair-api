import { getFloatForGameSeed } from "./generator/FloatGenerator"

import { SingleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"
import { Risk } from "./model/Risk"
import { Segments, Spin } from "./model/game/WheelTypes"

import WheelMultiplierTable from "./resources/WheelMultiplierTable.json"

export default function verifyWheel(
  gameSeed:   GameSeed, 
  risk:       Risk, 
  segments:   Segments
): SingleResultGameEvent<Spin> {
  
  const { float, hmacsUsed } = getFloatForGameSeed(gameSeed)
  
  const spin = {
    multipliers:  WheelMultiplierTable[segments][risk], 
    index:        Math.floor(float * segments)
  }
  return { result: spin, hmacsUsed }
}
