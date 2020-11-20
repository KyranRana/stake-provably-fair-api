import verifyMines from "../main/Mines"

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
    results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25],
    hmacsUsed: [
      'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92',
      '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67',
      'a1387043b881ccda38e668b5dee9fafeb35b4753375b582ea34f9f73539b33c1'
    ]
  }
}

const testcase2: TestCaseData = {
  gameSeed: GameSeeds[1],
  expected: {
    results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25],
    hmacsUsed: [
      '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60',
      '17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59',
      '09c0ad13225307187bd1d3e8c4510a52f5cb1c857e1d956d45069a9e4396d411'
    ]
  }
}

const testcase3: TestCaseData = {
  gameSeed: GameSeeds[2],
  expected: {
    results: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    hmacsUsed: [
      '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4',
      '34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b',
      '607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7'
    ]
  }
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=mines&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
// test 2: https://stake.com/provably-fair/calculation?clientSeed=3c83fc7e07&game=mines&nonce=3&serverSeed=a9a09f7f84c9dc6d4f46f9b702d8e7e211e1fc219ac10e1145c4ca032eb000c6
// test 3: https://stake.com/provably-fair/calculation?clientSeed=8b3ca8298c&game=mines&nonce=54&serverSeed=a5022ccf5dd5a76d2014278e3d91d1dfc47c3f12e683ea0c8151fdc2f944beb1
test.each`
  gameSeed              | expected 
  ${testcase1.gameSeed} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.expected}
`('verifyMines - verifies mines game given game seed $gameSeed and provides hmacs used in process', (testcase: TestCaseData) => {
  const mines = verifyMines(testcase.gameSeed)
  mines.results.sort((a, b) => a - b)
  expect(mines).toStrictEqual(testcase.expected)
})