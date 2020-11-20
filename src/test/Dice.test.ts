import verifyDice from "../main/Dice"

import { SingleResultGameEvent } from "../main/model/GameEvent"
import { GameSeed } from "../main/model/GameSeed"

import GameSeeds from "./resources/GameSeeds.json"

interface TestCaseData {
  gameSeed: GameSeed,
  expected: SingleResultGameEvent<number>
}

const testcase1: TestCaseData = {
  gameSeed: GameSeeds[0],
  expected: {
    result: 77.18,
    hmacsUsed: [
      'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92'
    ]
  }
}

const testcase2: TestCaseData = {
  gameSeed: GameSeeds[1],
  expected: {
    result: 19.59,
    hmacsUsed: [
      '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60'
    ]
  }
}

const testcase3: TestCaseData = {
  gameSeed: GameSeeds[2],
  expected: {
    result: 56.37,
    hmacsUsed: [
      '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4'
    ]
  }
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=dice&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
// test 2: https://stake.com/provably-fair/calculation?clientSeed=3c83fc7e07&game=dice&nonce=3&serverSeed=a9a09f7f84c9dc6d4f46f9b702d8e7e211e1fc219ac10e1145c4ca032eb000c6
// test 3: https://stake.com/provably-fair/calculation?clientSeed=8b3ca8298c&game=dice&nonce=54&serverSeed=a5022ccf5dd5a76d2014278e3d91d1dfc47c3f12e683ea0c8151fdc2f944beb1
test.each`
  gameSeed              | expected 
  ${testcase1.gameSeed} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.expected}
`('verifyDice - verifies dice game given game seed $gameSeed and provides hmac used in process', (testcase: TestCaseData) => {
  expect(verifyDice(testcase.gameSeed)).toStrictEqual(testcase.expected)
})