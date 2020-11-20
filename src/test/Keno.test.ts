import verifyKeno from "../main/Keno"

import { MultipleResultGameEvent } from "../main/model/GameEvent"
import { GameSeed } from "../main/model/GameSeed"

import GameSeeds from "./resources/GameSeeds.json"

interface TestCaseData {
  gameSeed: GameSeed,
  expected: MultipleResultGameEvent<number>
}

const testcase1: TestCaseData = {
  gameSeed: GameSeeds[0],
  expected: {
    results: [31, 36, 12, 32, 2, 8, 20, 10, 25, 17],
    hmacsUsed: [
      'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92',
      '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67'
    ]
  }
}

const testcase2: TestCaseData = {
  gameSeed: GameSeeds[1],
  expected: {
    results: [8, 19, 28, 29, 18, 30, 11, 13, 3, 2],
    hmacsUsed: [
      '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60',
      '17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59'
    ]
  }
}

const testcase3: TestCaseData = {
  gameSeed: GameSeeds[2],
  expected: {
    results: [23, 33, 1, 36, 9, 20, 19, 28, 8, 38],
    hmacsUsed: [
      '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4',
      '34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b'
    ]
  }
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=keno&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
// test 2: https://stake.com/provably-fair/calculation?clientSeed=3c83fc7e07&game=keno&nonce=3&serverSeed=a9a09f7f84c9dc6d4f46f9b702d8e7e211e1fc219ac10e1145c4ca032eb000c6
// test 3: https://stake.com/provably-fair/calculation?clientSeed=8b3ca8298c&game=keno&nonce=54&serverSeed=a5022ccf5dd5a76d2014278e3d91d1dfc47c3f12e683ea0c8151fdc2f944beb1
test.each`
  gameSeed              | expected 
  ${testcase1.gameSeed} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.expected}
`('verifyKeno - verifies keno game given game seed $gameSeed and provides hmacs used in process', (testcase: TestCaseData) => {
  expect(verifyKeno(testcase.gameSeed)).toStrictEqual(testcase.expected)
})