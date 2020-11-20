import verifyVideoPoker from "../main/VideoPoker"

import { Card, CardSuit, CardValue } from "../main/model/Card"
import { MultipleResultGameEvent } from "../main/model/GameEvent"
import { GameSeed } from "../main/model/GameSeed"

import GameSeeds from "./resources/GameSeeds.json"

interface TestCaseData {
  gameSeed: GameSeed,
  expected: MultipleResultGameEvent<Card>
}

const testcase1: TestCaseData = {
  gameSeed: GameSeeds[0],
  expected: {
    results: [
      {
        cardValue: CardValue.QUEEN,
        cardSuit: CardSuit.DIAMOND 
      },
      {
        cardValue: CardValue.KING,
        cardSuit: CardSuit.SPADE
      },
      {
        cardValue: CardValue.FIVE,
        cardSuit: CardSuit.CLUB
      },
      {
        cardValue: CardValue.QUEEN,
        cardSuit: CardSuit.HEART 
      },
      {
        cardValue: CardValue.TWO,
        cardSuit: CardSuit.HEART
      },
      {
        cardValue: CardValue.FOUR,
        cardSuit: CardSuit.SPADE
      },
      {
        cardValue: CardValue.EIGHT,
        cardSuit: CardSuit.HEART
      },
      {
        cardValue: CardValue.FIVE,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.NINE,
        cardSuit: CardSuit.CLUB
      },
      {
        cardValue: CardValue.SEVEN,
        cardSuit: CardSuit.HEART
      }
    ],
    hmacsUsed: [
      'c590d171e39b70404ee1fff2ce09c3e1090688e1320a9cd27f58b1ac3dfa8c92',
      '98e4513c6a0c341d2c3323a84166c5c0f5be65b369787c8e633146b66e98ff67'
    ]
  }
}

const testcase2: TestCaseData = {
  gameSeed: GameSeeds[1],
  expected: {
    results: [
      {
        cardValue: CardValue.FOUR,
        cardSuit: CardSuit.SPADE 
      },
      {
        cardValue: CardValue.EIGHT,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.TEN,
        cardSuit: CardSuit.CLUB
      },
      {
        cardValue: CardValue.JACK,
        cardSuit: CardSuit.HEART 
      },
      {
        cardValue: CardValue.SEVEN,
        cardSuit: CardSuit.SPADE
      },
      {
        cardValue: CardValue.JACK,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.FIVE,
        cardSuit: CardSuit.HEART
      },
      {
        cardValue: CardValue.SIX,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.THREE,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.TWO,
        cardSuit: CardSuit.HEART
      }
    ],
    hmacsUsed: [
      '322ab22075326005adcf6abfb26f8ec77426ad03afff325946541dfb53fedc60',
      '17bbc18f09b1cbcd60738e3185455b7a424cbef404b96e9e89775c5711787f59'
    ]
  }
}

const testcase3: TestCaseData = {
  gameSeed: GameSeeds[2],
  expected: {
    results: [
      {
        cardValue: CardValue.NINE,
        cardSuit: CardSuit.HEART 
      },
      {
        cardValue: CardValue.QUEEN,
        cardSuit: CardSuit.SPADE
      },
      {
        cardValue: CardValue.TWO,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.KING,
        cardSuit: CardSuit.SPADE 
      },
      {
        cardValue: CardValue.FOUR,
        cardSuit: CardSuit.SPADE
      },
      {
        cardValue: CardValue.EIGHT,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.EIGHT,
        cardSuit: CardSuit.HEART
      },
      {
        cardValue: CardValue.JACK,
        cardSuit: CardSuit.DIAMOND
      },
      {
        cardValue: CardValue.FOUR,
        cardSuit: CardSuit.CLUB
      },
      {
        cardValue: CardValue.ACE,
        cardSuit: CardSuit.DIAMOND
      }
    ],
    hmacsUsed: [
      '904e9ab7d196e089042c7f2de3ee9a8a33dc4f417d1450ab7edf8fc3b1e863c4',
      '34b2400ee9da856aa70693ce07dd99fe094746243b0788a526cd1272c83e490b'
    ]
  }
}

// test 1: https://stake.com/provably-fair/calculation?clientSeed=bb62964774&game=videoPoker&nonce=1&serverSeed=18e93f4a7b5b58d2569765766d1b6c3296bbd8430d6f20249044d72f14720159
// test 2: https://stake.com/provably-fair/calculation?clientSeed=3c83fc7e07&game=videoPoker&nonce=3&serverSeed=a9a09f7f84c9dc6d4f46f9b702d8e7e211e1fc219ac10e1145c4ca032eb000c6
// test 3: https://stake.com/provably-fair/calculation?clientSeed=8b3ca8298c&game=videoPoker&nonce=54&serverSeed=a5022ccf5dd5a76d2014278e3d91d1dfc47c3f12e683ea0c8151fdc2f944beb1
test.each`
  gameSeed              | expected 
  ${testcase1.gameSeed} | ${testcase1.expected}
  ${testcase2.gameSeed} | ${testcase2.expected}
  ${testcase3.gameSeed} | ${testcase3.expected}
`('verifyVideoPoker - verifies video poker game given game seed $gameSeed and provides hmacs used in process', (testcase: TestCaseData) => {
  expect(verifyVideoPoker(testcase.gameSeed)).toStrictEqual(testcase.expected)
})