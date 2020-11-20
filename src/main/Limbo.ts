import { getFloatForGameSeed } from "./generator/FloatGenerator"

import { SingleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"

const HOUSE_EDGE = 0.99
const MAX_MULTIPLIER = 1e8

export default function verifyLimbo(gameSeed: GameSeed): SingleResultGameEvent<number> {
  const { float, hmacsUsed } = getFloatForGameSeed(gameSeed)
  
  const floatPoint = MAX_MULTIPLIER / (float * MAX_MULTIPLIER) * HOUSE_EDGE
  const crashPoint = Math.floor(floatPoint * 100) / 100
  
  return { result: crashPoint, hmacsUsed }
}