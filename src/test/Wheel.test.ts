import verifyWheel from "../main/Wheel"

import { SingleResultGameEvent } from "../main/model/GameEvent"
import { GameSeed } from "../main/model/GameSeed"
import { Risk } from "../main/model/Risk"
import { Segments, Spin } from "../main/model/game/WheelTypes"

import GameSeeds from "./resources/GameSeeds.json"
import WheelMultiplierTable from "../main/resources/WheelMultiplierTable.json"

interface TestCaseData {
  variant: {
    gameSeed: GameSeed,
    risk: Risk,
    segments: Segments
  },
  expected: SingleResultGameEvent<Spin>
}

//
// TESTCASE 1
//

const testcase1_hmacsUsed = [
  'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92'
]

const testcase1_low_10: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    risk: Risk.LOW,
    segments: Segments.TEN  
  },
  expected: {
    result: {
      multipliers:WheelMultiplierTable[Segments.TEN][Risk.LOW],
      index: 7
    },
    hmacsUsed: testcase1_hmacsUsed
  }  
}

const testcase1_low_20: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    risk: Risk.LOW,
    segments: Segments.TWENTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.TWENTY][Risk.LOW],
      index: 15
    },
    hmacsUsed: testcase1_hmacsUsed
  }  
}

const testcase1_low_30: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    risk: Risk.LOW,
    segments: Segments.THIRTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.THIRTY][Risk.LOW],
      index: 23
    },
    hmacsUsed: testcase1_hmacsUsed
  }  
}

const testcase1_low_40: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    risk: Risk.LOW,
    segments: Segments.FOURTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.FOURTY][Risk.LOW],
      index: 30
    },
    hmacsUsed: testcase1_hmacsUsed
  }  
}

const testcase1_low_50: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    risk: Risk.LOW,
    segments: Segments.FIFTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.FIFTY][Risk.LOW],
      index: 38
    },
    hmacsUsed: testcase1_hmacsUsed
  }  
}

//
// TESTCASE 2
//

const testcase2_hmacsUsed = [
  '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60'
]

const testcase2_medium_10: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    risk: Risk.MEDIUM,
    segments: Segments.TEN
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.TEN][Risk.MEDIUM],
      index: 1
    },
    hmacsUsed: testcase2_hmacsUsed
  }  
}

const testcase2_medium_20: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    risk: Risk.MEDIUM,
    segments: Segments.TWENTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.TWENTY][Risk.MEDIUM],
      index: 3
    },
    hmacsUsed: testcase2_hmacsUsed
  }  
}

const testcase2_medium_30: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    risk: Risk.MEDIUM,
    segments: Segments.THIRTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.THIRTY][Risk.MEDIUM],
      index: 5
    },
    hmacsUsed: testcase2_hmacsUsed
  }  
}

const testcase2_medium_40: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    risk: Risk.MEDIUM,
    segments: Segments.FOURTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.FOURTY][Risk.MEDIUM],
      index: 7
    },
    hmacsUsed: testcase2_hmacsUsed
  }  
}

const testcase2_medium_50: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    risk: Risk.MEDIUM,
    segments: Segments.FIFTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.FIFTY][Risk.MEDIUM],
      index: 9
    },
    hmacsUsed: testcase2_hmacsUsed
  }  
}

//
// TESTCASE 3
//

const testcase3_hmacsUsed = [
  '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4'
]

const testcase3_high_10: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    risk: Risk.HIGH,
    segments: Segments.TEN  
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.TEN][Risk.HIGH],
      index: 5
    },
    hmacsUsed: testcase3_hmacsUsed
  }  
}

const testcase3_high_20: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    risk: Risk.HIGH,
    segments: Segments.TWENTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.TWENTY][Risk.HIGH],
      index: 11
    },
    hmacsUsed: testcase3_hmacsUsed
  }  
}

const testcase3_high_30: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    risk: Risk.HIGH,
    segments: Segments.THIRTY
  },
  expected: {
    result:  {
      multipliers: WheelMultiplierTable[Segments.THIRTY][Risk.HIGH],
      index: 16
    },
    hmacsUsed: testcase3_hmacsUsed
  }  
}

const testcase3_high_40: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    risk: Risk.HIGH,
    segments: Segments.FOURTY
  },
  expected: {
    result:  {
      multipliers: WheelMultiplierTable[Segments.FOURTY][Risk.HIGH],
      index: 22
    },
    hmacsUsed: testcase3_hmacsUsed
  }  
}

const testcase3_high_50: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    risk: Risk.HIGH,
    segments: Segments.FIFTY
  },
  expected: {
    result: {
      multipliers: WheelMultiplierTable[Segments.FIFTY][Risk.HIGH],
      index: 28
    },
    hmacsUsed: testcase3_hmacsUsed
  }  
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=wheel&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
// test 2: https://stake.com/provably-fair/calculation?clientSeed=3c83fc7e07&game=wheel&nonce=3&serverSeed=a9a09f7f84c9dc6d4f46f9b702d8e7e211e1fc219ac10e1145c4ca032eb000c6
// test 3: https://stake.com/provably-fair/calculation?clientSeed=8b3ca8298c&game=wheel&nonce=54&serverSeed=a5022ccf5dd5a76d2014278e3d91d1dfc47c3f12e683ea0c8151fdc2f944beb1
test.each`
  variant                        | expected 
  ${testcase1_low_10.variant}    | ${testcase1_low_10.expected}
  ${testcase1_low_20.variant}    | ${testcase1_low_20.expected}
  ${testcase1_low_30.variant}    | ${testcase1_low_30.expected}
  ${testcase1_low_40.variant}    | ${testcase1_low_40.expected}
  ${testcase1_low_50.variant}    | ${testcase1_low_50.expected}
  ${testcase2_medium_10.variant} | ${testcase2_medium_10.expected}
  ${testcase2_medium_20.variant} | ${testcase2_medium_20.expected}
  ${testcase2_medium_30.variant} | ${testcase2_medium_30.expected}
  ${testcase2_medium_40.variant} | ${testcase2_medium_40.expected}
  ${testcase2_medium_50.variant} | ${testcase2_medium_50.expected}
  ${testcase3_high_10.variant}   | ${testcase3_high_10.expected}
  ${testcase3_high_20.variant}   | ${testcase3_high_20.expected}
  ${testcase3_high_30.variant}   | ${testcase3_high_30.expected}
  ${testcase3_high_40.variant}   | ${testcase3_high_40.expected}
  ${testcase3_high_50.variant}   | ${testcase3_high_50.expected}
  `('verifyWheel - verifies wheel game given variant (risk: $variant.risk, segments: $variant.segments, gameSeed: $variant.gameSeed) and provides hmac used in process', (testcase: TestCaseData) => {
  const { gameSeed, risk, segments } = testcase.variant
  expect(verifyWheel(gameSeed, risk, segments)).toStrictEqual(testcase.expected)
})