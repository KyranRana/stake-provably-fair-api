import { range } from "./util/ArrayUtil"
import { getFloatsForGameSeed } from "./generator/FloatGenerator"

import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"

const NUMBER_OF_HITS = 10

export default function verifyKeno(gameSeed: GameSeed): MultipleResultGameEvent<number> {
  const { floats, hmacsUsed } = getFloatsForGameSeed(gameSeed, NUMBER_OF_HITS)
  const squares = range(1, 40) 

  const hits: number[] = []
  for (const float of floats) {
    hits.push(squares.splice(Math.floor(float * squares.length), 1)[0])
  }
  return { results: hits, hmacsUsed }
}