import { getFloatsForGameSeed } from "./generator/FloatGenerator"

import { Direction, Drop, Rows } from "./model/game/PlinkoTypes"
import { SingleResultGameEvent } from "./model/GameEvent"
import { GameSeed } from "./model/GameSeed"
import { Risk } from "./model/Risk"

import PlinkoMultiplierRows from "./resources/PlinkoMultiplierRows.json"

export default function verifyPlinko(
  gameSeed:   GameSeed, 
  risk:       Risk, 
  rows:       Rows
): SingleResultGameEvent<Drop> {
  
  const { floats, hmacsUsed } = getFloatsForGameSeed(gameSeed, rows)  

  const multiplierRow   = PlinkoMultiplierRows[rows][risk]
  const directions      = floats.map(float => Math.floor(float * 2) ? Direction.RIGHT : Direction.LEFT)
  const index           = emulateDrop(directions, multiplierRow)

  const drop = { multiplierRow, directions, index }
  return { result: drop, hmacsUsed }
}

function emulateDrop(directions: Direction[], multiplierRow: number[]): number {
  return directions[0] === Direction.LEFT 
    ? directions.filter(direction => direction == Direction.RIGHT).length
    : multiplierRow.length - directions.filter(direction => direction == Direction.LEFT).length - 1
}
