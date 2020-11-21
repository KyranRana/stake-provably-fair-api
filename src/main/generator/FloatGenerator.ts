import { chunk } from "../util/ArrayUtil"
import { getBytesForGameSeedStartingFromOffset } from "./ByteGenerator"
import { getSha256HmacForMultiplayerGameSeed } from "../util/Sha256Util"

import { InternalGameEventFloat, InternalGameEventFloats } from "../model/GameEvent"
import { GameSeed, MultiplayerGameSeed } from "../model/GameSeed"

export function getFloatForMultiplayerGameSeed(
  gameSeed: MultiplayerGameSeed
): InternalGameEventFloat {
  
  const hmac = getSha256HmacForMultiplayerGameSeed(gameSeed)
  const float = parseInt(hmac.substr(0, 8), 16)

  return { float, hmacsUsed: [hmac] }
}

export function getFloatForGameSeed(gameSeed: GameSeed): InternalGameEventFloat {
  const  { floats, hmacsUsed } = getFloatsForGameSeed(gameSeed, 1)
  return { float: floats[0], hmacsUsed }
}

export function getFloatsForGameSeed(
  gameSeed:         GameSeed, 
  numberOfFloats:   number
): InternalGameEventFloats {  
  return getFloatsForGameSeedStartingFromOffset(gameSeed, numberOfFloats, 0)
}

export function getFloatsForGameSeedStartingFromOffset(
  gameSeed:         GameSeed, 
  numberOfFloats:   number, 
  offset:           number
): InternalGameEventFloats {  
  
  const { bytes, hmacsUsed } = getBytesForGameSeedStartingFromOffset(
    gameSeed, 
    numberOfFloats  * 4, 
    offset          * 4
  )

  const floats = chunk(bytes, 4).map(fourBytes =>
    +fourBytes.reduce(calculateFloatFromFourBytes, 0).toFixed(12))

  return { floats, hmacsUsed }
}

function calculateFloatFromFourBytes(result: number, value: number, i: number): number {
  const divider = 256 ** (i + 1)
  const partialResult = value / divider

  return result + partialResult
}
