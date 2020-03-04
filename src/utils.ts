export const indexToX = (width: number, size:number) =>
  (index: number) => (index % width)*size

export const indexToY = (width: number, size:number) =>
  (index: number) => (Math.floor((index)/width))*size
  