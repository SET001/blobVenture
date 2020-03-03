const tilemapwidth = 18
const tileWidth = 32
const res = {
  frames: Array.from({length: 343}).reduce((acc, k, index)=>Object.assign(
    acc,
    {[index]: {
      frame: {
        x: ((index % tilemapwidth)-1)*tileWidth,
        y: Math.ceil((index)/tilemapwidth-1)*tileWidth,
        // x: ((index % tilemapwidth)+1)*tileWidth,
        // y: Math.ceil((index+1)/tilemapwidth)*tileWidth,
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