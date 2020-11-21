import { getSha256HmacsForGameSeedStartingFromOffset } from "../util/Sha256Util"

import { InternalGameEventBytes } from "../model/GameEvent"
import { GameSeed } from "../model/GameSeed"

export function getBytesForGameSeedStartingFromOffset(
  gameSeed: GameSeed, 
  numberOfBytes: number, 
  numberOfIgnoredBytes: number
): InternalGameEventBytes {

  const numberOfIgnoredHmacs = Math.floor(numberOfIgnoredBytes / 32)
  const numberOfHmacs = Math.ceil((numberOfBytes + (numberOfIgnoredBytes % 32)) / 32)

  numberOfIgnoredBytes -= (numberOfIgnoredHmacs * 32)

  const hmacs = getSha256HmacsForGameSeedStartingFromOffset(gameSeed, numberOfHmacs, numberOfIgnoredHmacs)
  const bytes = getBytesFromHmacsStartingFromOffsetForFirstHmac(numberOfBytes, hmacs, numberOfIgnoredBytes)
  
  return { bytes, hmacsUsed: hmacs }
}

function getBytesFromHmacsStartingFromOffsetForFirstHmac(
  numberOfBytes: number, 
  hmacs: string[], 
  offset: number
): number[] {
  
  const bytes: number[] = []
  
  let ptr = 0
  while (numberOfBytes) {
    const bytesToTake = Math.min(numberOfBytes, ptr == 0 ? 32 - offset : 32)
    numberOfBytes -= bytesToTake

    const start = ptr == 0 ? offset : 0
    const finish = start + bytesToTake

    const hmac = hmacs[ptr]
    for (let i = start; i < finish; i++) {
      bytes.push(parseInt(hmac.substr(i * 2, 2), 16))
    }
    ptr++
  }

  return bytes
}
