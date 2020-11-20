import verifyCrash from "../main/Crash"

import { SingleResultGameEvent } from "../main/model/GameEvent"
import { MultiplayerGameSeed } from "../main/model/GameSeed"

import MultiplayerGameSeeds from "./resources/MultiplayerGameSeeds.json"

interface TestCaseData {
  gameSeed: MultiplayerGameSeed,
  expected: SingleResultGameEvent<number>
}

const testcase1: TestCaseData = {
  gameSeed: MultiplayerGameSeeds[0],
  expected: {
    result: 2.5682504010713783,
    hmacsUsed: [
      '62ae955a1b219e9d4b990fe3d4231ac83c950083e72083e6a52b96a0301cef11'
    ]
  }
}

const testcase2: TestCaseData = {
  gameSeed: MultiplayerGameSeeds[1],
  expected: {
    result: 1.3193661251992947,
    hmacsUsed: [
      'c0179d51bca2bb6e3733f8e314410507029cb4b9a43985516f710a4452c095d4'
    ]
  }
}

const testcase3: TestCaseData = {
  gameSeed: MultiplayerGameSeeds[2],
  expected: {
    result: 3.018368989236868,
    hmacsUsed: [
      '53f743ba03405ed2f9fdad70a91c9a34dce27e47083dbd13b203ab222152aacb'
    ]
  }
}

// test 1: https://stake.com/provably-fair/calculation?seed=0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4&game=crash&hash=b4e7b335045da0a2666145980d03ed440a2e150e5369c72c7e6e24aeeb95f791
// test 2: https://stake.com/provably-fair/calculation?seed=0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4&game=crash&hash=3e473405bd819ed4171854194bae75a2b117739fc1ab2e1c4cd263e1904dae6f
// test 3: https://stake.com/provably-fair/calculation?seed=0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4&game=crash&hash=ca9b74c095c615cdf961892e54b35d42b6b8d3612266ff158547020fab514cf7
test.each`
  gameSeed              | expected 
  ${testcase1.gameSeed} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.expected}
`('verifyCrash - verifies crash game given multiplayer game seed $gameSeed and provides hmac used in process', (testcase: TestCaseData) => {
  expect(verifyCrash(testcase.gameSeed)).toStrictEqual(testcase.expected)
})