export interface InternalGameEventBytes {
  bytes: number[]
  hmacsUsed: string[]
}

export interface InternalGameEventFloat {
  float: number
  hmacsUsed: string[]
}

export interface InternalGameEventFloats {
  floats: number[]
  hmacsUsed: string[]
}

export interface SingleResultGameEvent<T> {
  result: T
  hmacsUsed: string[]
}

export interface MultipleResultGameEvent<T> {
  results: T[]
  hmacsUsed: string[]
}