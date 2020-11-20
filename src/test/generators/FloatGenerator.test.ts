import { 
  getFloatForMultiplayerGameSeed, 
  getFloatForGameSeed, 
  getFloatsForGameSeed,
  getFloatsForGameSeedStartingFromOffset
} from "../../main/generator/FloatGenerator"

import { InternalGameEventFloat, InternalGameEventFloats } from "../../main/model/GameEvent"
import { GameSeed, MultiplayerGameSeed } from "../../main/model/GameSeed"

import GameSeeds from "../resources/GameSeeds.json"
import MultiplayerGameSeeds from "../resources/MultiplayerGameSeeds.json"

interface MultiplayerGameSeedTestCaseData {
  gameSeed: MultiplayerGameSeed
  expected: InternalGameEventFloat
}

interface SingleFloatGameSeedTestCaseData {
  gameSeed: GameSeed,
  expected: InternalGameEventFloats
}

interface MultipleFloatsGameSeedTestCaseData extends SingleFloatGameSeedTestCaseData {
  numberOfFloats: number,
  offset?: number
}

const multiplayerTestcase1: MultiplayerGameSeedTestCaseData = {
  gameSeed: MultiplayerGameSeeds[0],
  expected: {
    float: 1655608666,
    hmacsUsed: [
      '62ae955a1b219e9d4b990fe3d4231ac83c950083e72083e6a52b96a0301cef11'
    ]
  }
}

const multiplayerTestcase2: MultiplayerGameSeedTestCaseData = {
  gameSeed: MultiplayerGameSeeds[1],
  expected: {
    float: 3222773073,
    hmacsUsed: [
      'c0179d51bca2bb6e3733f8e314410507029cb4b9a43985516f710a4452c095d4'
    ]
  }
}

const multiplayerTestcase3: MultiplayerGameSeedTestCaseData = {
  gameSeed: MultiplayerGameSeeds[2],
  expected: {
    float: 1408713658,
    hmacsUsed: [
      '53f743ba03405ed2f9fdad70a91c9a34dce27e47083dbd13b203ab222152aacb'
    ]
  }
}

const testcase1: MultipleFloatsGameSeedTestCaseData = {
  gameSeed: GameSeeds[0],
  numberOfFloats: 10,
  expected: {
    floats: [
      0.771740999306, 0.889090552926, 0.308135983068, 0.804836504394, 0.035255961353, 
      0.195474435110, 0.497447113506, 0.242104325909, 0.597233845852, 0.414248711662
    ],
    hmacsUsed: [
      "c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92",
      "98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67"
    ]
  }
}

const testcase2: MultipleFloatsGameSeedTestCaseData = {
  gameSeed: GameSeeds[1],
  numberOfFloats: 12,
  expected: {
    floats: [
      0.195963986218, 0.457799912663, 0.678946181899, 0.697014735779, 0.453715146286, 
      0.687487742165, 0.274721025256, 0.328107617795, 0.092708680546, 0.037869203137, 
      0.376763236010, 0.520589558873
    ],
    hmacsUsed: [
      "322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60",
      "17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59"
    ]
  }
}

const testcase3: MultipleFloatsGameSeedTestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfFloats: 17,
  expected: {
    floats: [
      0.56369940727,  0.818708451698, 0.016303966986, 0.890359553043, 0.202580407495, 
      0.488591233967, 0.495598778827, 0.694952235557, 0.205844882410, 0.913490618113, 
      0.652444112580, 0.030725121032, 0.036243804730, 0.230583706172, 0.151566651184, 
      0.782200398622, 0.376880667871
    ],
    hmacsUsed: [
      "904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4",
      "34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b",
      "607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7"
    ]
  }
}

const testcase4: MultipleFloatsGameSeedTestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfFloats: 15,
  offset: 2,
  expected: {
    floats: [
      0.016303966986, 0.890359553043, 0.202580407495, 0.488591233967, 0.495598778827, 
      0.694952235557, 0.205844882410, 0.913490618113, 0.652444112580, 0.030725121032, 
      0.036243804730, 0.230583706172, 0.151566651184, 0.782200398622, 0.376880667871
    ],
    hmacsUsed: [
      "904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4",
      "34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b",
      "607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7"
    ]
  }
}

const testcase5: MultipleFloatsGameSeedTestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfFloats: 9,
  offset: 8,
  expected: {
    floats: [
      0.205844882410, 0.913490618113, 0.652444112580, 0.030725121032, 0.036243804730, 
      0.230583706172, 0.151566651184, 0.782200398622, 0.376880667871
    ],
    hmacsUsed: [
      "34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b",
      "607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7"
    ]
  }
}

const testcase6: MultipleFloatsGameSeedTestCaseData = {
  gameSeed: GameSeeds[2],
  numberOfFloats: 1,
  offset: 16,
  expected: {
    floats: [0.376880667871],
    hmacsUsed: [
      "607b405fd2b702baea8f8173e809e309ea0edb292815b3f5628af9f3fbaea1f7"
    ]
  }
}

const testcase7: MultipleFloatsGameSeedTestCaseData = {
  gameSeed: GameSeeds[1],
  numberOfFloats: 8,
  offset: 4,
  expected: {
    floats: [
      0.453715146286, 0.687487742165, 0.274721025256, 0.328107617795, 0.092708680546, 
      0.037869203137, 0.376763236010, 0.520589558873
    ],
    hmacsUsed: [
      "322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60",
      "17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59"
    ]
  }
}

test.each`
  gameSeed                         | expected
  ${multiplayerTestcase1.gameSeed} | ${multiplayerTestcase1.expected}
  ${multiplayerTestcase2.gameSeed} | ${multiplayerTestcase2.expected}
  ${multiplayerTestcase3.gameSeed} | ${multiplayerTestcase3.expected}
`('getFloatForMultiplayerGameSeed - gets float given multiplayer game seed $gameSeed and provides hmac used in the process', (testcase: MultiplayerGameSeedTestCaseData) => {
  expect(getFloatForMultiplayerGameSeed(testcase.gameSeed)).toStrictEqual(testcase.expected)
})

test.each`
  gameSeed              | expected
  ${testcase1.gameSeed} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.expected}
`('getFloatForGameSeed - gets float given game seed $gameSeed and provides hmac used in the process', (testcase: SingleFloatGameSeedTestCaseData) => {
  const expected: InternalGameEventFloat = {
    float: testcase.expected.floats[0],
    hmacsUsed: [testcase.expected.hmacsUsed[0]]
  }
  expect(getFloatForGameSeed(testcase.gameSeed)).toStrictEqual(expected)
})

test.each`
  gameSeed              | numberOfFloats              | expected
  ${testcase1.gameSeed} | ${testcase1.numberOfFloats} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.numberOfFloats} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.numberOfFloats} | ${testcase3.expected}
`('getFloatsForGameSeed - gets $numberOfFloats floats given game seed $gameSeed and provides hmac(s) used in the process', (testcase: MultipleFloatsGameSeedTestCaseData) => {
  expect(getFloatsForGameSeed(testcase.gameSeed, testcase.numberOfFloats)).toStrictEqual(testcase.expected)
})

test.each`
  gameSeed              | numberOfFloats              | offset              | expected
  ${testcase4.gameSeed} | ${testcase4.numberOfFloats} | ${testcase4.offset} | ${testcase4.expected}
  ${testcase5.gameSeed} | ${testcase5.numberOfFloats} | ${testcase5.offset} | ${testcase5.expected}
  ${testcase6.gameSeed} | ${testcase6.numberOfFloats} | ${testcase6.offset} | ${testcase6.expected}
  ${testcase7.gameSeed} | ${testcase7.numberOfFloats} | ${testcase7.offset} | ${testcase7.expected}
`('getFloatsFromGameSeedStartingFromOffset - gets $numberOfFloats floats discounting $offset floats given game seed $gameSeed and provides hmac(s) used in the process', (testcase: MultipleFloatsGameSeedTestCaseData) => {
  expect(getFloatsForGameSeedStartingFromOffset(testcase.gameSeed, testcase.numberOfFloats, testcase.offset as number)).toStrictEqual(testcase.expected)
})