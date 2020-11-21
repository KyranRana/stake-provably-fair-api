import { range, transpose } from "./util/ArrayUtil"
import { getFloatsForGameSeedStartingFromOffset } from "./generator/FloatGenerator"

import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"
import { Symbol } from "./model/BlueSamurai/Symbol"

import Probabilities from "./resources/BlueSamuraiProbabilities.json"

const REELS_LENGTHS = [3, 4, 4, 4, 3]
  .map(length => range(0, length - 1))

const NUMBER_OF_FLOATS_PER_ROUND = 18

export default function verifyBlueSamurai(
  gameSeed: GameSeed, 
  fromRound: number, 
  toRound: number
): MultipleResultGameEvent<Symbol[][]> {

  const numberOfIgnoredFloats = fromRound * NUMBER_OF_FLOATS_PER_ROUND
  const numberOfFloats = (toRound - fromRound + 1) * NUMBER_OF_FLOATS_PER_ROUND
  
  const { floats, hmacsUsed } = getFloatsForGameSeedStartingFromOffset(
    gameSeed, 
    numberOfFloats, 
    numberOfIgnoredFloats
  )
  
  const rounds = generateRounds(fromRound, toRound, floats)
  return { results: rounds, hmacsUsed }
}

function generateRounds(fromRound: number, toRound: number, floats: number[]): Symbol[][][] {
  let cellPosition = 0;

  const rounds = []
  for (var i = fromRound; i <= toRound; i++) {
    const symbols = REELS_LENGTHS.map((reel, reelPosition) =>
      reel.map(() => {
        const isOuter = reelPosition === 0 || reelPosition === 4
        const float = floats[i * NUMBER_OF_FLOATS_PER_ROUND + cellPosition]

        cellPosition++

        return selectSymbol(float, isOuter)
      })
    )

    symbols[0][3] = Symbol.NONE
    symbols[4][3] = Symbol.NONE
    
    rounds.push(transpose(symbols))
  }
  return rounds
}

function selectSymbol(cellNumber: number, isOuter: boolean): Symbol {
  let selectedSymbol
  
  let current = 0
  let index = 0
  
  while (current <= cellNumber) {
    const { symbol, outer, inner } = Probabilities[index]
    
    selectedSymbol = symbol 
  
    current += isOuter ? outer : inner
    index++
  }
  
  if (!selectedSymbol) {
    throw Error('no symbol')
  }
  
  return selectedSymbol as Symbol
}
