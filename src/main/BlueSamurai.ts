import { transpose } from "./util/ArrayUtil"
import { getFloatsForGameSeedStartingFromOffset } from "./generator/FloatGenerator"

import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"
import { Symbol } from "./model/game/BlueSamuraiTypes"

import Probabilities from "./resources/BlueSamuraiProbabilities.json"

const REELS_LENGTHS = [3, 4, 4, 4, 3]
const NUMBER_OF_FLOATS_PER_ROUND = 18

export default function verifyBlueSamurai(
  gameSeed:   GameSeed, 
  fromRound:  number, 
  toRound:    number
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
  const rounds = []
  for (var i = fromRound; i <= toRound; i++) {
    rounds.push(generateView(i - fromRound, floats))
  }
  return rounds
}

function generateView(currentRound: number, floats: number[]) {
  let cellPosition = currentRound * NUMBER_OF_FLOATS_PER_ROUND

  const symbols: Symbol[][] = []

  for (let i = 0; i < REELS_LENGTHS.length; i++) {   
    const isOuter = i === 0 || i === 4
    
    symbols[i] = []
    
    for (let j = 0; j < REELS_LENGTHS[i]; j++) {
      const float = floats[currentRound * NUMBER_OF_FLOATS_PER_ROUND + cellPosition++]
      
      symbols[i][j] = selectSymbol(float, isOuter)
    }
  }

  symbols[0][3] = Symbol.NONE
  symbols[4][3] = Symbol.NONE

  return transpose(symbols)
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
