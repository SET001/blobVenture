const { indexToX, indexToY } = require('./utils')

const tilemapwidth = 18
const tileWidth = 32
const toX = indexToX(tilemapwidth, tileWidth)
const toY = indexToY(tilemapwidth, tileWidth)

const res = {
  frames: Array.from({length: 343}).reduce((acc, k, index)=>Object.assign(
    acc,
    {[index]: {
      frame: {
        x: toX(index-1),
        y: toY(index-1),
        w: tileWidth,
        h: tileWidth
      },
      rotated: false,
      trimmed: false
    }}
  ), {}),
  meta: {
    "image": "images/backgroundTiles.png",
    "format": "RGBA8888",
    "scale": "1", 
    "size": {"w":576,"h":608},
  }
}

console.log(JSON.stringify(res, null, 2))