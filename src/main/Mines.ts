import { range } from "./util/ArrayUtil"
import { getFloatsForGameSeed } from "./generator/FloatGenerator"

import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"

const NUMBER_OF_MINES = 24

export default function verifyMines(gameSeed: GameSeed): MultipleResultGameEvent<number> {
  const { floats, hmacsUsed } = getFloatsForGameSeed(gameSeed, NUMBER_OF_MINES)
  const positions = range(1, 25) 

  const mines: number[] = []
  for (const float of floats) {
    mines.push(positions.splice(Math.floor(float * positions.length), 1)[0])
  }
  return { results: mines, hmacsUsed }
}