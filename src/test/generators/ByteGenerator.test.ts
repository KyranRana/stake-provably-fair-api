import { getBytesForGameSeedStartingFromOffset} from "../../main/generator/ByteGenerator"

import { InternalGameEventBytes } from "../../main/model/GameEvent"
import { GameSeed } from "../../main/model/GameSeed"

import GameSeeds from "../resources/GameSeeds.json"

interface TestCaseData {
  gameSeed: GameSeed
  offset: number
  numberOfBytes: number
  expected: InternalGameEventBytes
}

const testcase1: TestCaseData = {
  gameSeed: GameSeeds[0],
  offset: 0,
  numberOfBytes: 12,
  expected: {
    bytes: [197, 144, 209, 113, 227, 155, 112, 64, 78, 225, 255, 242],
    hmacsUsed: [
      "c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92"
    ]
  }
}

const testcase2: TestCaseData = {
  gameSeed: GameSeeds[1],
  offset: 0,
  numberOfBytes: 34,
  expected: {
    bytes: [
      50, 42, 178, 32, 117, 50, 96, 5, 173, 207, 106, 191, 178, 111, 142, 199, 116, 38, 173, 3, 175, 255, 50, 89, 70, 84, 29, 251, 83, 254, 220, 96,
      23, 187
    ],
    hmacsUsed: [
      "322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60",
      "17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59"
    ]
  }
}

const testcase3: TestCaseData = {
  gameSeed: GameSeeds[2],
  offset: 0,
  numberOfBytes: 48,
  expected: {
    bytes: [
      144, 78, 154, 183, 209, 150, 224, 137, 4, 44, 127, 45, 227, 238, 154, 138, 51, 220, 79, 65, 125, 20, 80, 171, 126, 223, 143, 195, 177, 232, 99, 196, 
      52, 178, 64, 14, 233, 218, 133, 106, 167, 6, 147, 206, 7, 221, 153, 254
    ],
    hmacsUsed: [
      "904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4",
      "34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b"
    ]
  }
}

const testcase4: TestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfBytes: 36,
  offset: 12,
  expected: {
    bytes: [
      227, 238, 154, 138, 51, 220, 79, 65, 125, 20, 80, 171, 126, 223, 143, 195, 177, 232, 99, 196, 52, 178, 64, 14, 233, 218, 133, 106, 167, 6, 147, 206, 
      7, 221, 153, 254
    ],
    hmacsUsed: [
      "904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4",
      "34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b"
    ]
  }
}

const testcase5: TestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfBytes: 15,
  offset: 33,
  expected: {
    bytes: [178, 64, 14, 233, 218, 133, 106, 167, 6, 147, 206, 7, 221, 153, 254],
    hmacsUsed: [
      "34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b"
    ]
  }
}

const testcase6: TestCaseData = {
  gameSeed: GameSeeds[1],
  numberOfBytes: 32,
  offset: 2,
  expected: {
    bytes: [
      178, 32, 117, 50, 96, 5, 173, 207, 106, 191, 178, 111, 142, 199, 116, 38, 173, 3, 175, 255, 50, 89, 70, 84, 29, 251, 83, 254, 220, 96,23, 187
    ],
    hmacsUsed: [
      "322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60",
      "17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59"
    ]
  }
}

const testcase7: TestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfBytes: 8,
  offset: 65,
  expected: {
    bytes: [123, 64, 95, 210, 183, 2, 186, 234],
    hmacsUsed: [
      '607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7'
    ]
  }
}

const testcase8: TestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfBytes: 31,
  offset: 65,
  expected: {
    bytes: [
      123, 64, 95, 210, 183, 2, 186, 234, 143, 129, 115, 232, 9, 227, 9, 234, 14, 219, 41, 40, 21, 179, 245, 98, 138, 249, 243, 251, 174, 161, 247
    ],
    hmacsUsed: [
      '607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7'
    ]
  }
}

const testcase9: TestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfBytes: 32,
  offset: 65,
  expected: {
    bytes: [
      123, 64, 95, 210, 183, 2, 186, 234, 143, 129, 115, 232, 9, 227, 9, 234, 14, 219, 41, 40, 21, 179, 245, 98, 138, 249, 243, 251, 174, 161, 247,
      254
    ],
    hmacsUsed: [
      '607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7',
      'fe0acfc9c2b559eaa7bc1997dc64f2f1c649416796d3aca153dee8e10264ea71'
    ]
  }
}

test.each`
  gameSeed              | numberOfBytes              | offset              | expected
  ${testcase1.gameSeed} | ${testcase1.numberOfBytes} | ${testcase1.offset} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.numberOfBytes} | ${testcase2.offset} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.numberOfBytes} | ${testcase3.offset} | ${testcase3.expected}
  ${testcase4.gameSeed} | ${testcase4.numberOfBytes} | ${testcase4.offset} | ${testcase4.expected}
  ${testcase5.gameSeed} | ${testcase5.numberOfBytes} | ${testcase5.offset} | ${testcase5.expected}
  ${testcase6.gameSeed} | ${testcase6.numberOfBytes} | ${testcase6.offset} | ${testcase6.expected}
  ${testcase7.gameSeed} | ${testcase7.numberOfBytes} | ${testcase7.offset} | ${testcase7.expected}
  ${testcase8.gameSeed} | ${testcase8.numberOfBytes} | ${testcase8.offset} | ${testcase8.expected}
  ${testcase9.gameSeed} | ${testcase9.numberOfBytes} | ${testcase9.offset} | ${testcase9.expected}
`('getBytesForGameSeedStartingFromOffset - gets $numberOfBytes bytes after discounting $offset bytes given game seed $gameSeed and provides hmac(s) used in the process', (testcase: TestCaseData) => {
  expect(getBytesForGameSeedStartingFromOffset(testcase.gameSeed, testcase.numberOfBytes, testcase.offset as number)).toStrictEqual(testcase.expected)
})