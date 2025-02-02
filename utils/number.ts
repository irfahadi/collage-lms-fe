export const nthNumber = (number: number) => {
  switch (number % 10) {
    case 1:
      return `${number}st`
    case 2:
      return `${number}nd`
    case 3:
      return `${number}rd`
    default:
      return `${number}th`
  }
}

export function calculateRowAndColumn(index: number, columns: number) {
  const row = Math.floor(index / columns) + 1
  const column = (index % columns) + 1
  return { row, column }
}

export const arrayRange = (start: any, stop: any, step: any) =>
  Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step
)