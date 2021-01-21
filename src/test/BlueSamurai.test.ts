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

// todo: More tests ...

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=slotsSamurai&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
test.each`
  variant                      | expected 
  ${testcase1_rounds0.variant} | ${testcase1_rounds0.expected}
`('verifyBlueSamurai - verifies blue samurai game given variant (gameSeed: $variant.gameSeed, fromRound: $variant.fromRound, toRound: $variant.toRound) and provides hmac used in process', (testcase: TestCaseData) => {
  const { gameSeed, fromRound, toRound } = testcase.variant
  expect(verifyBlueSamurai(gameSeed, fromRound, toRound)).toStrictEqual(testcase.expected)
})