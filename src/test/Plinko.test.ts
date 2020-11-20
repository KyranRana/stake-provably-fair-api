import verifyPlinko from "../main/Plinko"

import { Direction } from "../main/model/Plinko/Direction"
import { Drop } from "../main/model/Plinko/Drop"
import { SingleResultGameEvent } from "../main/model/GameEvent"
import { GameSeed } from "../main/model/GameSeed"
import { Risk } from "../main/model/Risk"
import { Rows } from "../main/model/Plinko/Rows"

import GameSeeds from "./resources/GameSeeds.json"
import PlinkoMultiplierRows from "../main/resources/PlinkoMultiplierRows.json"

interface TestCaseData {
  variant: {
    gameSeed: GameSeed,
    rows: Rows,
    risk: Risk
  },
  expected: SingleResultGameEvent<Drop>
}

//
// TESTCASE 1
//

const testcase1_directions = [
  Direction.RIGHT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT
]

const testcase1_hmacsUsed = [
  'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92',
  '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67'
]

const testcase1_8rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.EIGHT,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.EIGHT][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.EIGHT),
      index: 3
    },
    hmacsUsed: testcase1_hmacsUsed.slice(0, 1)
  }
}

const testcase1_9rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.NINE,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.NINE][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.NINE),
      index: 4
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

const testcase1_10rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.TEN,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.TEN][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.TEN),
      index: 4
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

const testcase1_11rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.ELEVEN,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.ELEVEN][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.ELEVEN),
      index: 4
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

const testcase1_12rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.TWELVE,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.TWELVE][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.TWELVE),
      index: 4
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

const testcase1_13rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.THIRTEEN,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.THIRTEEN][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.THIRTEEN),
      index: 5
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

const testcase1_14rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.FOURTEEN,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.FOURTEEN][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.FOURTEEN),
      index: 5
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

const testcase1_15rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.FIFTEEN,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.FIFTEEN][Risk.LOW],
      directions: testcase1_directions.slice(0, Rows.FIFTEEN),
      index: 5
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

const testcase1_16rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    rows: Rows.SIXTEEN,
    risk: Risk.LOW
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.SIXTEEN][Risk.LOW],
      directions: testcase1_directions,
      index: 5
    },
    hmacsUsed: testcase1_hmacsUsed
  }
}

//
// TESTCASE 2
//

const testcase2_directions = [
  Direction.LEFT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT
]

const testcase2_hmacsUsed = [
  '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60',
  '17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59'
]

const testcase2_8rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.EIGHT,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.EIGHT][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.EIGHT),
      index: 3
    },
    hmacsUsed: testcase2_hmacsUsed.slice(0, 1)
  }
}

const testcase2_9rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.NINE,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.NINE][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.NINE),
      index: 3
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

const testcase2_10rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.TEN,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.TEN][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.TEN),
      index: 3
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

const testcase2_11rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.ELEVEN,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.ELEVEN][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.ELEVEN),
      index: 3
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

const testcase2_12rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.TWELVE,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.TWELVE][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.TWELVE),
      index: 4
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

const testcase2_13rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.THIRTEEN,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.THIRTEEN][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.THIRTEEN),
      index: 4
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

const testcase2_14rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.FOURTEEN,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.FOURTEEN][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.FOURTEEN),
      index: 4
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

const testcase2_15rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.FIFTEEN,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.FIFTEEN][Risk.MEDIUM],
      directions: testcase2_directions.slice(0, Rows.FIFTEEN),
      index: 5
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

const testcase2_16rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    rows: Rows.SIXTEEN,
    risk: Risk.MEDIUM
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.SIXTEEN][Risk.MEDIUM],
      directions: testcase2_directions,
      index: 5
    },
    hmacsUsed: testcase2_hmacsUsed
  }
}

//
// TESTCASE 3
//

const testcase3_directions = [
  Direction.RIGHT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.RIGHT,
  Direction.RIGHT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.LEFT,
  Direction.RIGHT
]

const testcase3_hmacsUsed = [
  '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4',
  '34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b'
]

const testcase3_8rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.EIGHT,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.EIGHT][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.EIGHT),
      index: 4
    },
    hmacsUsed: testcase3_hmacsUsed.slice(0, 1)
  }
}

const testcase3_9rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.NINE,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.NINE][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.NINE),
      index: 4
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

const testcase3_10rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.TEN,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.TEN][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.TEN),
      index: 5
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

const testcase3_11rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.ELEVEN,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.ELEVEN][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.ELEVEN),
      index: 6
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

const testcase3_12rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.TWELVE,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.TWELVE][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.TWELVE),
      index: 6
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

const testcase3_13rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.THIRTEEN,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.THIRTEEN][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.THIRTEEN),
      index: 6
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

const testcase3_14rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.FOURTEEN,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.FOURTEEN][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.FOURTEEN),
      index: 6
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

const testcase3_15rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.FIFTEEN,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.FIFTEEN][Risk.HIGH],
      directions: testcase3_directions.slice(0, Rows.FIFTEEN),
      index: 6
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

const testcase3_16rows: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    rows: Rows.SIXTEEN,
    risk: Risk.HIGH
  },
  expected: {
    result: {
      multiplierRow: PlinkoMultiplierRows[Rows.SIXTEEN][Risk.HIGH],
      directions: testcase3_directions,
      index: 7
    },
    hmacsUsed: testcase3_hmacsUsed
  }
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=plinko&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
// test 2: https://stake.com/provably-fair/calculation?clientSeed=3c83fc7e07&game=plinko&nonce=3&serverSeed=a9a09f7f84c9dc6d4f46f9b702d8e7e211e1fc219ac10e1145c4ca032eb000c6
// test 3: https://stake.com/provably-fair/calculation?clientSeed=8b3ca8298c&game=plinko&nonce=54&serverSeed=a5022ccf5dd5a76d2014278e3d91d1dfc47c3f12e683ea0c8151fdc2f944beb1
test.each`
  variant                     | expected 
  ${testcase1_8rows.variant}  | ${testcase1_8rows.expected}
  ${testcase1_9rows.variant}  | ${testcase1_9rows.expected}
  ${testcase1_10rows.variant} | ${testcase1_10rows.expected}
  ${testcase1_11rows.variant} | ${testcase1_11rows.expected}
  ${testcase1_12rows.variant} | ${testcase1_12rows.expected}
  ${testcase1_13rows.variant} | ${testcase1_13rows.expected}
  ${testcase1_14rows.variant} | ${testcase1_14rows.expected}
  ${testcase1_15rows.variant} | ${testcase1_15rows.expected}
  ${testcase1_16rows.variant} | ${testcase1_16rows.expected}
  ${testcase2_8rows.variant}  | ${testcase2_8rows.expected}
  ${testcase2_9rows.variant}  | ${testcase2_9rows.expected}
  ${testcase2_10rows.variant} | ${testcase2_10rows.expected}
  ${testcase2_11rows.variant} | ${testcase2_11rows.expected}
  ${testcase2_12rows.variant} | ${testcase2_12rows.expected}
  ${testcase2_13rows.variant} | ${testcase2_13rows.expected}
  ${testcase2_14rows.variant} | ${testcase2_14rows.expected}
  ${testcase2_15rows.variant} | ${testcase2_15rows.expected}
  ${testcase2_16rows.variant} | ${testcase2_16rows.expected}
  ${testcase3_8rows.variant}  | ${testcase3_8rows.expected}
  ${testcase3_9rows.variant}  | ${testcase3_9rows.expected}
  ${testcase3_10rows.variant} | ${testcase3_10rows.expected}
  ${testcase3_11rows.variant} | ${testcase3_11rows.expected}
  ${testcase3_12rows.variant} | ${testcase3_12rows.expected}
  ${testcase3_13rows.variant} | ${testcase3_13rows.expected}
  ${testcase3_14rows.variant} | ${testcase3_14rows.expected}
  ${testcase3_15rows.variant} | ${testcase3_15rows.expected}
  ${testcase3_16rows.variant} | ${testcase3_16rows.expected}
`('verifyPlinko - verifies plinko game given variant (risk: $variant.risk, rows: $variant.rows, gameSeed: $variant.gameSeed) and provides hmacs used in process', (testcase: TestCaseData) => {
  const { gameSeed, risk, rows } = testcase.variant
  expect(verifyPlinko(gameSeed, risk, rows)).toStrictEqual(testcase.expected)
})