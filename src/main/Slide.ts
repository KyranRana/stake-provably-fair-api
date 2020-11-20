import { getFloatForMultiplayerGameSeed } from "./generator/FloatGenerator"

import { SingleResultGameEvent } from "./model/GameEvent"
import { MultiplayerGameSeed } from "./model/GameSeed"

const HOUSE_EDGE = 0.98

export default function verifySlide(gameSeed: MultiplayerGameSeed): SingleResultGameEvent<number> {
  const { float, hmacsUsed } = getFloatForMultiplayerGameSeed(gameSeed)

  const slidePoint = Math.max(1, (2 ** 32 / (float + 1)) * HOUSE_EDGE)
  return { result: slidePoint, hmacsUsed }
}