import { transpose } from "./util/ArrayUtil"
import { getFloatsForGameSeedStartingFromOffset } from "./generator/FloatGenerator"

import { MultipleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"
import { Symbol } from "./model/game/BlueSamuraiTypes"

import Probabilities from "./resources/BlueSamuraiProbabilities.json"

const REELS_LENGTHS = [3, 4, 4, 4, 3]
const NUMBER_OF_FLOATS_PER_ROUND = 18
const NUMBER_OF_FLOATS_PER_SPECIAL_ROUND = 12

export default function verifyBlueSamurai(
  gameSeed:       GameSeed, 
  fromRound:      number, 
  toRound:        number,
  special:        boolean = false
): MultipleResultGameEvent<Symbol[][]> {

  const numberOfIgnoredFloats = special 
    ? NUMBER_OF_FLOATS_PER_ROUND + ((fromRound - 1) * NUMBER_OF_FLOATS_PER_SPECIAL_ROUND)
    : fromRound * NUMBER_OF_FLOATS_PER_ROUND

  const numberOfFloats = (toRound - fromRound + 1) * NUMBER_OF_FLOATS_PER_ROUND
  
  const { floats, hmacsUsed } = getFloatsForGameSeedStartingFromOffset(
    gameSeed, 
    numberOfFloats, 
    numberOfIgnoredFloats
  )
  
  const rounds = generateRounds(
    fromRound, 
    toRound, 
    floats,
    special
  )
  
  return { results: rounds, hmacsUsed }
}

function generateRounds(
  fromRound:      number, 
  toRound:        number, 
  floats:         number[],
  special:        boolean
): Symbol[][][] {
  
  const rounds = []
  for (var i = fromRound; i <= toRound; i++) {
    rounds.push(
      generateView(
        i - fromRound, 
        floats, 
        special
      )
    )
  }
  return rounds
}

function generateView(
  currentRound:   number, 
  floats:         number[],
  special:        boolean
) {
  let cellPosition = currentRound * (special 
    ? NUMBER_OF_FLOATS_PER_SPECIAL_ROUND 
    : NUMBER_OF_FLOATS_PER_ROUND)

  const symbols: Symbol[][] = []
  for (let i = 0; i < REELS_LENGTHS.length; i++) {   
    const isOuter = i === 0 || i === 4
    if (special && isOuter) {
      continue
    }

    symbols[i] = []
    for (let j = 0; j < REELS_LENGTHS[i]; j++) {
      symbols[i][j] = selectSymbol(
        floats[cellPosition++], 
        isOuter
      )
    }
  }

  if (!special) {
    symbols[0][3] = Symbol.NONE
    symbols[4][3] = Symbol.NONE
  } else {
    symbols.shift()
  }
  
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
