export function chunk(array: any[], chunkSize: number): any[] {
  return Array.from({ length: array.length / chunkSize }, 
    (_, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize))
}

export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export function transpose(array: any[][]): any[][] {
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]))
}