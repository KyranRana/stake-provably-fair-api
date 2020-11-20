import { 
  getSha256HmacForMultiplayerGameSeed, 
  getSha256HmacsForGameSeedStartingFromOffset
} from "../../main/util/Sha256Util"

import { GameSeed, MultiplayerGameSeed } from "../../main/model/GameSeed"

import GameSeeds from "../resources/GameSeeds.json"
import MultiplayerGameSeeds from "../resources/MultiplayerGameSeeds.json"

interface GameSeedTestCaseData {
  gameSeed: GameSeed,
  offset: number
  numberOfHmacs: number
  expected: string[]
}

interface MultiplayerGameSeedTestCaseData {
  gameSeed: MultiplayerGameSeed,
  expected: string
}

const multiplayerTestcase1: MultiplayerGameSeedTestCaseData = {
  gameSeed: MultiplayerGameSeeds[0],
  expected: "62ae955a1b219e9d4b990fe3d4231ac83c950083e72083e6a52b96a0301cef11"
}

const multiplayerTestcase2: MultiplayerGameSeedTestCaseData = {
  gameSeed: MultiplayerGameSeeds[1],
  expected: "c0179d51bca2bb6e3733f8e314410507029cb4b9a43985516f710a4452c095d4"
}

const multiplayerTestcase3: MultiplayerGameSeedTestCaseData = {
  gameSeed: MultiplayerGameSeeds[2],
  expected: "53f743ba03405ed2f9fdad70a91c9a34dce27e47083dbd13b203ab222152aacb"
}

const testcase1: GameSeedTestCaseData = {
  gameSeed: GameSeeds[0],
  offset: 0,
  numberOfHmacs: 3,
  expected: [
    'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92',
    '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67',
    'a1387043b881ccda38e668b5dee9fafeb35b4753375b582ea34f9f73539b33c1'
  ]
}

const testcase2: GameSeedTestCaseData = {
  gameSeed: GameSeeds[1],
  offset: 0,
  numberOfHmacs: 4,
  expected: [
    '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60',
    '17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59',
    '09c0ad13225307187bd1d3e8c4510a52f5cb1c857e1d956d45069a9e4396d411',
    '3658aad61aa2cd03c37be929a255ee0ccc21658731dae6f80bb48668c93611f8'
  ]
}

const testcase3: GameSeedTestCaseData = {
  gameSeed: GameSeeds[2],
  offset: 0,
  numberOfHmacs: 2,
  expected: [
    '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4',
    '34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b',
  ]
}

const testcase4: GameSeedTestCaseData = {
  gameSeed: GameSeeds[1],
  offset: 1,
  numberOfHmacs: 3,
  expected: [
    '17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59',
    '09c0ad13225307187bd1d3e8c4510a52f5cb1c857e1d956d45069a9e4396d411',
    '3658aad61aa2cd03c37be929a255ee0ccc21658731dae6f80bb48668c93611f8'
  ]
}

const testcase5: GameSeedTestCaseData = {
  gameSeed: GameSeeds[1],
  offset: 2,
  numberOfHmacs: 2,
  expected: [
    '09c0ad13225307187bd1d3e8c4510a52f5cb1c857e1d956d45069a9e4396d411',
    '3658aad61aa2cd03c37be929a255ee0ccc21658731dae6f80bb48668c93611f8'
  ]
}

const testcase6: GameSeedTestCaseData = {
  gameSeed: GameSeeds[1],
  offset: 3,
  numberOfHmacs: 3,
  expected: [
    '3658aad61aa2cd03c37be929a255ee0ccc21658731dae6f80bb48668c93611f8',
    '2773c7b233cb76f62c202ddba2c35be2fc9463921bceaacd23be66840579867c',
    'c7209b1d6252d6dafb6ebc382c0aaa37c7ea2f1183b4df5e2920363b25b13d55',
  ]
}

const testcase7: GameSeedTestCaseData = {
  gameSeed: GameSeeds[2],
  offset: 3,
  numberOfHmacs: 3,
  expected: [
    'fe0acfc9c2b559eaa7bc1997dc64f2f1c649416796d3aca153dee8e10264ea71',
    '38850a86c6d4693aa795dfc5f842bfafe090b83b8b58048975f592068a8fe2b7',
    '4bb51cb691da1167edbdeae1dad22ae85d1303dc343dfdcc9b1d89070575d39e',
  ]
}

// test 1: https://stake.com/provably-fair/calculation?seed=0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4&game=slide&hash=b4e7b335045da0a2666145980d03ed440a2e150e5369c72c7e6e24aeeb95f791
// test 2: https://stake.com/provably-fair/calculation?seed=0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4&game=slide&hash=3e473405bd819ed4171854194bae75a2b117739fc1ab2e1c4cd263e1904dae6f
// test 3: https://stake.com/provably-fair/calculation?seed=0000000000000000001b34dc6a1e86083f95500b096231436e9b25cbdd0075c4&game=slide&hash=ca9b74c095c615cdf961892e54b35d42b6b8d3612266ff158547020fab514cf7
test.each`
  gameSeed                         | expected
  ${multiplayerTestcase1.gameSeed} | ${multiplayerTestcase1.expected}
  ${multiplayerTestcase2.gameSeed} | ${multiplayerTestcase2.expected}
  ${multiplayerTestcase3.gameSeed} | ${multiplayerTestcase3.expected}
`('getSha256HmacForMultiplayerGameSeed - gets hmac given multiplayer game seed $gameSeed', (testcase: MultiplayerGameSeedTestCaseData) => {
  expect(getSha256HmacForMultiplayerGameSeed(testcase.gameSeed)).toStrictEqual(testcase.expected)
})

test.each`
  gameSeed              | numberOfHmacs              | offset              | expected
  ${testcase1.gameSeed} | ${testcase1.numberOfHmacs} | ${testcase1.offset} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.numberOfHmacs} | ${testcase2.offset} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.numberOfHmacs} | ${testcase3.offset} | ${testcase3.expected}
  ${testcase4.gameSeed} | ${testcase4.numberOfHmacs} | ${testcase4.offset} | ${testcase4.expected}
  ${testcase5.gameSeed} | ${testcase5.numberOfHmacs} | ${testcase5.offset} | ${testcase5.expected}
  ${testcase6.gameSeed} | ${testcase6.numberOfHmacs} | ${testcase6.offset} | ${testcase6.expected}
  ${testcase7.gameSeed} | ${testcase7.numberOfHmacs} | ${testcase7.offset} | ${testcase7.expected}
`('getSha256HmacsForGameSeedStartingFromOffset - gets $numberOfHmacs hmacs after discounting $offset hmacs given game seed $gameSeed', (testcase: GameSeedTestCaseData) => {
  expect(getSha256HmacsForGameSeedStartingFromOffset(testcase.gameSeed, testcase.numberOfHmacs, testcase.offset as number)).toStrictEqual(testcase.expected)
})