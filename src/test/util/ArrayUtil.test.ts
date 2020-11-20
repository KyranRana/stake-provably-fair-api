import { chunk, range, transpose } from "../../main/util/ArrayUtil"

interface ChunkTestCaseData {
  array: number[]
  chunkSize: number
  expected: number[][]
}

interface RangeTestCaseData {
  start: number
  end: number
  expected: number[]
}

interface TransposeTestCase {
  array: number[][]
  expected: number[][]
}

test.each`
  array                                 | chunkSize | expected
  ${[1,2,3,4,5,6,7,8,9,10,11,12]}       | ${3}      | ${[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]}
  ${[4,5,6,7,8,9,10,11,12,13,14,15]}    | ${4}      | ${[[4,5,6,7],[8,9,10,11],[12,13,14,15]]}
  ${[6,7,8,9,10,11,13,13,16,19,20,32]}  | ${6}      | ${[[6,7,8,9,10,11],[13,13,16,19,20,32]]}
`('chunk - chunks array into sub arrays of size $chunkSize', (testcase: ChunkTestCaseData) => {
  expect(chunk(testcase.array, testcase.chunkSize)).toStrictEqual(testcase.expected)
})

test.each`
  start | end   | expected
  ${0}  | ${10} | ${[0,1,2,3,4,5,6,7,8,9,10]}
  ${5}  | ${10} | ${[5,6,7,8,9,10]}
  ${10} | ${25} | ${[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
`('range - generates array with numbers between $start and $end (inclusive)', (testcase: RangeTestCaseData) => {
  expect(range(testcase.start, testcase.end)).toStrictEqual(testcase.expected)
})

test.each`
  id   | array                        | expected
  ${1} | ${[[1,2,3],[4,5,6],[7,8,9]]} | ${[[1,4,7],[2,5,8],[3,6,9]]}
  ${2} | ${[[1,4,7],[2,5,8],[3,6,9]]} | ${[[1,2,3],[4,5,6],[7,8,9]]}
`('transpose - transposes array test $id', (testcase: TransposeTestCase) => {
  expect(transpose(testcase.array)).toStrictEqual(testcase.expected)
})