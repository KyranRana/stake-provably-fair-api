import verifyBlueSamurai from "../main/BlueSamurai"

import { MultipleResultGameEvent } from "../main/model/GameEvent"
import { GameSeed } from "../main/model/GameSeed"
import { Symbol } from "../main/model/game/BlueSamuraiTypes"

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

const testcase1_rounds0: TestCaseData = {
  variant: {
    gameSeed: GameSeeds[0],
    fromRound: 0,
    toRound: 0
  },
  expected: {
    results: [
      [
        [
          Symbol.S9,
          Symbol.SAMURAI,
          Symbol.S3,
          Symbol.S4,
          Symbol.S6
        ],
        [
          Symbol.SAMURAI,
          Symbol.S1,
          Symbol.S8,
          Symbol.WILD,
          Symbol.S8
        ],
        [
          Symbol.S4,
          Symbol.S3,
          Symbol.S6,
          Symbol.S6,
          Symbol.S9
        ],
        [
          Symbol.NONE,
          Symbol.S7,
          Symbol.S2,
          Symbol.S5,
          Symbol.NONE
        ]
      ]
    ],
    hmacsUsed: [
      'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92',
      '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67',
      'a1387043b881ccda38e668b5dee9fafeb35b4753375b582ea34f9f73539b33c1'
    ]
  }
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=slotsSamurai&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
test.each`
  variant                      | expected 
  ${testcase1_rounds0.variant} | ${testcase1_rounds0.expected}
`('verifyBlueSamurai - verifies blue samurai game given variant (gameSeed: $variant.gameSeed, fromRound: $variant.fromRound, toRound: $variant.toRound) and provides hmac used in process', (testcase: TestCaseData) => {
  const { gameSeed, fromRound, toRound } = testcase.variant
  expect(verifyBlueSamurai(gameSeed, fromRound, toRound)).toStrictEqual(testcase.expected)
})

// test 2: https://stake.com/provably-fair/calculation?clientSeed=Provably&game=slotsSamurai&nonce=13757&serverSeed=60ea10dc52c124b7d5f26475761fd69992cc01a552c09069a417c6135d7bfec1
test('verifyBlueSamurai - special spin', () => {
  const gameSeed = {
    clientSeed: "Provably",
    serverSeed: "60ea10dc52c124b7d5f26475761fd69992cc01a552c09069a417c6135d7bfec1",
    nonce: 13757
  }

  const expectedRounds = {
    results: [
      [
        [
          Symbol.S9,
          Symbol.S7,
          Symbol.S4,
          Symbol.S9,
          Symbol.SAMURAI
        ],
        [
          Symbol.S9,
          Symbol.S9,
          Symbol.SCATTER,
          Symbol.S5,
          Symbol.SAMURAI
        ],
        [
          Symbol.WILD,
          Symbol.S3,
          Symbol.S7,
          Symbol.S4,
          Symbol.SAMURAI
        ],
        [
          Symbol.NONE,
          Symbol.S8,
          Symbol.S9,
          Symbol.S6,
          Symbol.NONE
        ]
      ],
      [
        [
          Symbol.S9,
          Symbol.S1,
          Symbol.S1
        ],
        [
          Symbol.SAMURAI,
          Symbol.WILD,
          Symbol.SCATTER
        ],
        [
          Symbol.SAMURAI,
          Symbol.S6,
          Symbol.S1
        ],
        [
          Symbol.S3,
          Symbol.SAMURAI,
          Symbol.S5
        ]
      ],
      [
        [
          Symbol.SAMURAI,
          Symbol.SCATTER,
          Symbol.SAMURAI
        ],
        [
          Symbol.SAMURAI,
          Symbol.S7,
          Symbol.S5
        ],
        [
          Symbol.SAMURAI,
          Symbol.S1,
          Symbol.S9
        ],
        [
          Symbol.S4,
          Symbol.SAMURAI,
          Symbol.S8
        ]
      ],
      [
        [
          Symbol.SAMURAI,
          Symbol.S5,
          Symbol.SAMURAI
        ],
        [
          Symbol.SAMURAI,
          Symbol.S7,
          Symbol.S9
        ],
        [
          Symbol.SAMURAI,
          Symbol.S9,
          Symbol.S2
        ],
        [
          Symbol.S4,
          Symbol.SAMURAI,
          Symbol.SAMURAI
        ]
      ],
      [
        [
          Symbol.SAMURAI,
          Symbol.S7,
          Symbol.SAMURAI
        ],
        [
          Symbol.SAMURAI,
          Symbol.SAMURAI,
          Symbol.S1
        ],
        [
          Symbol.SAMURAI,
          Symbol.SCATTER,
          Symbol.SCATTER
        ],
        [
          Symbol.SAMURAI,
          Symbol.SAMURAI,
          Symbol.SAMURAI
        ]
      ],
      [
        [
          Symbol.SAMURAI,
          Symbol.S1,
          Symbol.SAMURAI
        ],
        [
          Symbol.SAMURAI,
          Symbol.SAMURAI,
          Symbol.S5
        ],
        [
          Symbol.SAMURAI,
          Symbol.S7,
          Symbol.S7
        ],
        [
          Symbol.SAMURAI,
          Symbol.SAMURAI,
          Symbol.SAMURAI
        ]
      ]
    ],
    hmacsUsed: [
      'b7482b73b120d9ceff798fa685971a75bdac00b83ad4ad149dc0628e4291845b',
      'eaad8bf7834a210faaa1827cadf632435bf6b941400edd1a7a17ef28f1255f2f',
      'e884ca28d8cf27d7a0d3f826e5024769c71d0be631773cb607e8651ef688be6b',
      '7536e470d979c0ea107c2adae84145f40f6d1f2d56278b0ae1a34d1c7e4257b0',
      'd081398841b7c5d5ee2d756085d7b75d026e0ea0557462ead76a7d0056b7c062',
      'a8bb17d39dadb41260a468856a22d6975ce443ca4bfd47cd561920fd8685a99b',
      'c0d013b8bd6442f4c65d7f8abcfd3c362791ffe2c735fa321e8ad1b4a627aed2',
      'cee7388ae22645a181995241dff4db3be5a768bf2b8800ce2e56fd6c0dbecc74',
      'ecbe47222e8c85ede33a55942efdb22b99d880073c889ced12af5b30547e44c8',
      '7b4169d249c6f389758b5df45a819dc97e567911080ce56c6ecba84d1a7d26f9',
      '782aa3c29e930bc4069e906d341eaeebf0bb899e275c60e5aa9e62ba83bcfcda',
      'd365a2484aae32daa01f61526eec94362a84820b722bea5210ee54b3d774017d',
      'e4eaf54787d1058e4749962ad7ccefc3c0f8190863b1e4fe306ac789fb0259dd',
      '4142de0921109c29b8c1aa84dc0d119909aad49280acc53e6bacd650e97e3802'
    ]
  }

  const rounds = verifyBlueSamurai(gameSeed, 0, 0)
  expect(rounds.results).toStrictEqual(expectedRounds.results.slice(0, 1))
  expect(rounds.hmacsUsed).toStrictEqual(expectedRounds.hmacsUsed.slice(0, 3))

  const specialRounds = verifyBlueSamurai(gameSeed, 1, 5, true)
  expect(specialRounds.hmacsUsed).toStrictEqual(expectedRounds.hmacsUsed.slice(2))

  let round = specialRounds.results[0]
  for (let i = 1; i <= 5; i++) {
    round = round.map((line, ii) => 
      line.map((item, jj) => 
        item == Symbol.SAMURAI 
          ? item 
          : specialRounds.results[i - 1][ii][jj]))

    expect(round).toStrictEqual(expectedRounds.results[i])
  }
})