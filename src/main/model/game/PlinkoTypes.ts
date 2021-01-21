export enum Direction {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export interface Drop {
  directions: Direction[],
  multiplierRow: number[],
  index: number
}

export enum Rows {
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ELEVEN = 11,
  TWELVE = 12,
  THIRTEEN = 13,
  FOURTEEN = 14,
  FIFTEEN = 15,
  SIXTEEN = 16
}