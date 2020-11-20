import { Direction } from "./Direction";

export interface Drop {
  directions: Direction[],
  multiplierRow: number[],
  index: number
}