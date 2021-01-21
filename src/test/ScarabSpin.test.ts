import verifyScarabSpin from "../main/ScarabSpin"

import { MultipleResultGameEvent } from "../main/model/GameEvent"
import { GameSeed } from "../main/model/GameSeed"
import { Symbol } from "../main/model/game/ScarabSpinTypes"

import GameSeeds from "./resources/GameSeeds.json"

interface TestCaseData {
  variant: {
    gameSeed: GameSeed,
    fromRound: number,
    toRound: number
  },
  expected: MultipleResultGameEvent<Symbol[][]>
}

//
// TESTCASE 1
//

const testcase1_rounds0to2: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    fromRound: 0,
    toRound: 2
  },
  expected: {
    results: [
      [
        [
          Symbol.BLUE_CHIP,
          Symbol.PURPLE_CLUB,
          Symbol.GREEN_OCTAGON
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.BLUE_SPADE,
          Symbol.BLUE_CHIP
        ],
        [
          Symbol.BLUE_SPADE,
          Symbol.GOLD_COIN,
          Symbol.PURPLE_HENTAGON
        ],
        [
          Symbol.GREEN_OCTAGON,
          Symbol.SCARAB_MUMMY,
          Symbol.RED_HEART
        ],
        [
          Symbol.PURPLE_HENTAGON,
          Symbol.GOLD_COIN,
          Symbol.GREEN_RHOMBUS
        ]
      ],
      [
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.RED_HEART,
          Symbol.GREEN_OCTAGON
        ],
        [
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.GREEN_RHOMBUS,
          Symbol.RED_RHOMBUS
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.WILD,
          Symbol.BLUE_SPADE
        ],
        [
          Symbol.RED_HEART,
          Symbol.BLUE_SPADE,
          Symbol.SCATTER
        ],
        [
          Symbol.SCARAB_MUMMY,
          Symbol.RED_HEART,
          Symbol.GREEN_OCTAGON
        ]
      ],
      [
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.RED_HEART,
          Symbol.GREEN_OCTAGON
        ],
        [
          Symbol.BLUE_SPADE,
          Symbol.GREEN_RHOMBUS,
          Symbol.BLUE_CHIP
        ],
        [
          Symbol.BLUE_CHIP,
          Symbol.SCARAB_MUMMY,
          Symbol.SCATTER
        ],
        [
          Symbol.BLUE_SPADE,
          Symbol.BLUE_CHIP,
          Symbol.GREEN_RHOMBUS
        ],
        [
          Symbol.SCATTER,
          Symbol.SCARAB_MUMMY,
          Symbol.RED_HEART
        ]
      ]
    ],
    hmacsUsed: [
      'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92',
      '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67'
    ]
  }
}

const testcase1_rounds3to5: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    fromRound: 3,
    toRound: 5
  },
  expected: {
    results: [
      [
        [
          Symbol.GOLD_COIN,
          Symbol.SCATTER,
          Symbol.BLUE_SPADE
        ],
        [
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.SCARAB_MUMMY,
          Symbol.SCATTER
        ],
        [
          Symbol.SCARAB_MUMMY,
          Symbol.GOLD_COIN,
          Symbol.RED_RHOMBUS
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.GOLD_COIN
        ],
        [
          Symbol.PURPLE_HENTAGON,
          Symbol.BLUE_SPADE,
          Symbol.GREEN_OCTAGON
        ]
      ],
      [
        [
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.BLUE_SPADE,
          Symbol.BLUE_CHIP
        ],
        [
          Symbol.WILD,
          Symbol.BLUE_SPADE,
          Symbol.GREEN_RHOMBUS
        ],
        [
          Symbol.PURPLE_CLUB,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.SCARAB_MUMMY
        ],
        [
          Symbol.GREEN_OCTAGON,
          Symbol.GREEN_RHOMBUS,
          Symbol.PURPLE_HENTAGON
        ],
        [
          Symbol.WILD,
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY
        ]
      ],
      [
        [
          Symbol.BLUE_CHIP,
          Symbol.PURPLE_CLUB,
          Symbol.GREEN_OCTAGON
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.BLUE_SPADE,
          Symbol.BLUE_CHIP
        ],
        [
          Symbol.BLUE_SPADE,
          Symbol.GOLD_COIN,
          Symbol.PURPLE_HENTAGON
        ],
        [
          Symbol.PURPLE_HENTAGON,
          Symbol.GREEN_RHOMBUS,
          Symbol.GREEN_OCTAGON
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.SCATTER,
          Symbol.SCARAB_MUMMY
        ]
      ]
    ],
    hmacsUsed: [
      '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67',
      'a1387043b881ccda38e668b5dee9fafeb35b4753375b582ea34f9f73539b33c1',
      '2e29da35c677feccdde6d3b94cfdd7d0c244610c576f31a66a5ef48226e39007'
    ]
  }
}

//
// TESTCASE 2
//

const testcase2_rounds1to3: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    fromRound: 1,
    toRound: 3
  },
  expected: {
    results: [
      [
        [
          Symbol.PURPLE_CLUB,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.BLUE_SPADE
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.BLUE_CHIP,
          Symbol.SCARAB_MUMMY
        ],
        [
          Symbol.BLUE_SPADE,
          Symbol.GOLD_COIN,
          Symbol.PURPLE_HENTAGON
        ],
        [
          Symbol.SCARAB_MUMMY,
          Symbol.BLUE_CHIP,
          Symbol.RED_HEART
        ],
        [
          Symbol.PURPLE_HENTAGON,
          Symbol.GOLD_COIN,
          Symbol.GREEN_RHOMBUS
        ]
      ],
      [
        [
          Symbol.SCARAB_MUMMY,
          Symbol.GOLD_COIN,
          Symbol.SCATTER
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.RED_RHOMBUS,
          Symbol.GOLD_COIN
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.WILD,
          Symbol.BLUE_SPADE
        ],
        [
          Symbol.WILD,
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY
        ],
        [
          Symbol.GOLD_COIN,
          Symbol.BLUE_CHIP,
          Symbol.BLUE_SPADE
        ]
      ],
      [
        [
          Symbol.BLUE_SPADE,
          Symbol.GOLD_COIN,
          Symbol.PURPLE_HENTAGON
        ],
        [
          Symbol.BLUE_SPADE,
          Symbol.GREEN_RHOMBUS,
          Symbol.PURPLE_HENTAGON
        ],
        [
          Symbol.GOLD_COIN,
          Symbol.PURPLE_HENTAGON,
          Symbol.PURPLE_CLUB
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.GOLD_COIN,
          Symbol.GREEN_OCTAGON
        ],
        [
          Symbol.PURPLE_CLUB,
          Symbol.BLUE_CHIP,
          Symbol.GREEN_RHOMBUS
        ]
      ]
    ],
    hmacsUsed: [
      '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60',
      '17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59',
      '09c0ad13225307187bd1d3e8c4510a52f5cb1c857e1d956d45069a9e4396d411'
    ]
  }
}

const testcase2_rounds4to6: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[1],
    fromRound: 4,
    toRound: 6
  },
  expected: {
    results: [
      [
        [
          Symbol.SCARAB_MUMMY,
          Symbol.PURPLE_HENTAGON,
          Symbol.GOLD_COIN
        ],
        [
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.GREEN_RHOMBUS,
          Symbol.RED_RHOMBUS
        ],
        [
          Symbol.WILD,
          Symbol.BLUE_SPADE,
          Symbol.GOLD_COIN
        ],
        [
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.GOLD_COIN,
          Symbol.GREEN_OCTAGON
        ],
        [
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE
        ]
      ],
      [
        [
          Symbol.GOLD_COIN,
          Symbol.PURPLE_HENTAGON,
          Symbol.GREEN_RHOMBUS
        ],
        [
          Symbol.GREEN_OCTAGON,
          Symbol.GOLD_COIN,
          Symbol.PURPLE_CLUB
        ],
        [
          Symbol.PURPLE_CLUB,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.SCARAB_MUMMY
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.GREEN_OCTAGON,
          Symbol.SCARAB_MUMMY
        ],
        [
          Symbol.WILD,
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY
        ]
      ],
      [
        [
          Symbol.BLUE_CHIP,
          Symbol.BLUE_SPADE,
          Symbol.GOLD_COIN
        ],
        [
          Symbol.GOLD_COIN,
          Symbol.PURPLE_CLUB,
          Symbol.RED_RHOMBUS
        ],
        [
          Symbol.GOLD_COIN,
          Symbol.PURPLE_HENTAGON,
          Symbol.PURPLE_CLUB
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.GOLD_COIN
        ],
        [
          Symbol.WILD,
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY
        ]
      ]
    ],
    hmacsUsed: [
      '09c0ad13225307187bd1d3e8c4510a52f5cb1c857e1d956d45069a9e4396d411',
      '3658aad61aa2cd03c37be929a255ee0ccc21658731dae6f80bb48668c93611f8',
      '2773c7b233cb76f62c202ddba2c35be2fc9463921bceaacd23be66840579867c'
    ]
  }
}

//
// TESTCASE 3
//

const testcase3_rounds0: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    fromRound: 0,
    toRound: 0
  },
  expected: {
    results: [
      [
        [
          Symbol.WILD,
          Symbol.BLUE_SPADE,
          Symbol.RED_HEART
        ],
        [
          Symbol.PURPLE_CLUB,
          Symbol.RED_RHOMBUS,
          Symbol.GREEN_RHOMBUS
        ],
        [
          Symbol.SCATTER,
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY
        ],
        [
          Symbol.RED_HEART,
          Symbol.RED_RHOMBUS,
          Symbol.SCARAB_MUMMY
        ],
        [
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE
        ]
      ],
    ],
    hmacsUsed: [
      '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4'
    ]
  }
}

const testcase3_rounds2: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[2],
    fromRound: 2,
    toRound: 2
  },
  expected: {
    results: [
      [
        [
          Symbol.RED_RHOMBUS,
          Symbol.PURPLE_CLUB,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE
        ],
        [
          Symbol.GREEN_OCTAGON,
          Symbol.BLUE_SPADE,
          Symbol.GREEN_RHOMBUS
        ],
        [
          Symbol.PURPLE_CLUB,
          Symbol.SCARAB_MUMMY,
          Symbol.BLUE_CHIP
        ],
        [
          Symbol.GREEN_RHOMBUS,
          Symbol.YELLOW_UPSIDE_DOWN_TRIANGE,
          Symbol.GOLD_COIN
        ],
        [
          Symbol.GOLD_COIN,
          Symbol.WILD,
          Symbol.PURPLE_CLUB
        ]
      ],
    ],
    hmacsUsed: [
      '34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b'
    ]
  }
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=slots&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
// test 2: https://stake.com/provably-fair/calculation?clientSeed=3c83fc7e07&game=slots&nonce=3&serverSeed=a9a09f7f84c9dc6d4f46f9b702d8e7e211e1fc219ac10e1145c4ca032eb000c6
// test 3: https://stake.com/provably-fair/calculation?clientSeed=8b3ca8298c&game=slots&nonce=54&serverSeed=a5022ccf5dd5a76d2014278e3d91d1dfc47c3f12e683ea0c8151fdc2f944beb1
test.each`
  variant                         | expected 
  ${testcase1_rounds0to2.variant} | ${testcase1_rounds0to2.expected}
  ${testcase1_rounds3to5.variant} | ${testcase1_rounds3to5.expected}
  ${testcase2_rounds1to3.variant} | ${testcase2_rounds1to3.expected}
  ${testcase2_rounds4to6.variant} | ${testcase2_rounds4to6.expected}
  ${testcase3_rounds0.variant}    | ${testcase3_rounds0.expected}
  ${testcase3_rounds2.variant}    | ${testcase3_rounds2.expected}
`('verifyScarabSpin - verifies scarab spin game given variant (gameSeed: $variant.gameSeed, fromRound: $variant.fromRound, toRound: $variant.toRound) and provides hmac used in process', (testcase: TestCaseData) => {
  const { gameSeed, fromRound, toRound } = testcase.variant
  expect(verifyScarabSpin(gameSeed, fromRound, toRound)).toStrictEqual(testcase.expected)
})