import { HMAC } from "fast-sha256"
import { encode } from "@stablelib/utf8"

import { GameSeed, MultiplayerGameSeed } from "../model/GameSeed"

export function getSha256HmacForMultiplayerGameSeed(
  gameSeed: MultiplayerGameSeed
): string {
  
  const { hash, seed } = gameSeed
  return getSha256Hmac(hash, seed)
}

export function getSha256HmacsForGameSeedStartingFromOffset(
  gameSeed:       GameSeed, 
  numberOfHmacs:  number, 
  offset:         number
): string[] {

  const { clientSeed, serverSeed, nonce } = gameSeed

  const hmacs = []
  for (let i = 0; i < numberOfHmacs; i++) {
    hmacs.push(getSha256Hmac(serverSeed, `${clientSeed}:${nonce}:${i + offset}`))
  }
  return hmacs
}

function getSha256Hmac(key: string, data: string): string {
  const hmac = new HMAC(encode(key))
  const bytes = hmac.update(encode(data)).digest()
  
  let hash = ""
  for (let i = 0; i < bytes.length; i++) {
    hash += bytes[i].toString(16).padStart(2, '0')
  }
  return hash
}
