import verifyBlueSamuraiInternal from "../BlueSamurai"
import verifyCardsInternal from "../Cards"
import verifyCrashInternal from "../Crash"
import verifyDiamondsInternal from "../Diamonds"
import verifyDiceInternal from "../Dice"
import verifyKenoInternal from "../Keno"
import verifyLimboInternal from "../Limbo"
import verifyMinesInternal from "../Mines"
import verifyPlinkoInternal from "../Plinko"
import verifyRouletteInternal from "../Roulette"
import verifyScarabSpinInternal from "../ScarabSpin"
import verifySlideInternal from "../Slide"
import verifyVideoPokerInternal from "../VideoPoker"
import verifyWheelInternal from "../Wheel"

import { Card } from "../model/Card"
import { Drop as PlinkoDrop } from "../model/Plinko/Drop"
import { SingleResultGameEvent, MultipleResultGameEvent } from "../model/GameEvent"
import { GameSeed, MultiplayerGameSeed } from "../model/GameSeed"
import { Gem as DiamondsGem } from "../model/Diamonds/Gem"
import { Risk } from "../model/Risk"
import { Rows as PlinkoRows } from "../model/Plinko/Rows"
import { Segments as WheelSegments } from "../model/Wheel/Segments"
import { Spin as WheelSpin } from "../model/Wheel/Spin"
import { Symbol as BlueSamuraiSymbol } from "../model/BlueSamurai/Symbol"
import { Symbol as ScarabSpinSymbol } from "../model/ScarabSpin/Symbol"

export class StakeVerificationApi {
  verifyBlueSamurai(
    gameSeed: GameSeed, 
    fromRound: number, 
    toRound: number
  ): MultipleResultGameEvent<BlueSamuraiSymbol[][]> {    
    return verifyBlueSamuraiInternal(gameSeed, fromRound, toRound)
  }
  
  verifyCards(gameSeed: GameSeed, numberOfCards: number): MultipleResultGameEvent<Card> {
    return verifyCardsInternal(gameSeed, numberOfCards)
  }
  
  verifyCrash(gameSeed: MultiplayerGameSeed): SingleResultGameEvent<number> {
    return verifyCrashInternal(gameSeed)
  }
  
  verifyDiamonds(gameSeed: GameSeed): MultipleResultGameEvent<DiamondsGem>  {
    return verifyDiamondsInternal(gameSeed)
  }

  verifyDice(gameSeed: GameSeed): SingleResultGameEvent<number> {
    return verifyDiceInternal(gameSeed)
  }

  verifyKeno(gameSeed: GameSeed): MultipleResultGameEvent<number> {
    return verifyKenoInternal(gameSeed)
  }

  verifyLimbo(gameSeed: GameSeed): SingleResultGameEvent<number> {
    return verifyLimboInternal(gameSeed)
  }

  verifyMines(gameSeed: GameSeed): MultipleResultGameEvent<number> {
    return verifyMinesInternal(gameSeed)
  }

  verifyPlinko(
    gameSeed: GameSeed, 
    risk: Risk,
    rows: PlinkoRows
  ): SingleResultGameEvent<PlinkoDrop> {  
    return verifyPlinkoInternal(gameSeed, risk, rows)
  }

  verifyRoulette(gameSeed: GameSeed): SingleResultGameEvent<number> {
    return verifyRouletteInternal(gameSeed)
  }

  verifyScarabSpin(
    gameSeed: GameSeed, 
    fromRound: number, 
    toRound: number
  ): MultipleResultGameEvent<ScarabSpinSymbol[][]> {    
    return verifyScarabSpinInternal(gameSeed, fromRound, toRound)
  }

  verifySlide(gameSeed: MultiplayerGameSeed): SingleResultGameEvent<number> {
    return verifySlideInternal(gameSeed)
  }

  verifyVideoPoker(gameSeed: GameSeed): MultipleResultGameEvent<Card> {
    return verifyVideoPokerInternal(gameSeed)
  }

  verifyWheel(
    gameSeed: GameSeed, 
    risk: Risk, 
    segments: WheelSegments
  ): SingleResultGameEvent<WheelSpin> {
    return verifyWheelInternal(gameSeed, risk, segments)
  }
}
