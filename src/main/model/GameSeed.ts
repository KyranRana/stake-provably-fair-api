export interface GameSeed {
  clientSeed: string
  serverSeed: string
  nonce: number
}

export interface MultiplayerGameSeed {
  hash: string,
  seed: string
}