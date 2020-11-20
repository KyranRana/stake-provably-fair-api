import { getFloatForMultiplayerGameSeed } from "./generator/FloatGenerator"

import { SingleResultGameEvent } from "./model/GameEvent"
import { MultiplayerGameSeed } from "./model/GameSeed"

const HOUSE_EDGE = 0.99

export default function verifyCrash(gameSeed: MultiplayerGameSeed): SingleResultGameEvent<number> {
  const { float, hmacsUsed } = getFloatForMultiplayerGameSeed(gameSeed)
  
  const crashPoint = Math.max(1, (2 ** 32 / (float + 1)) * HOUSE_EDGE)
  return { result: crashPoint, hmacsUsed }
}