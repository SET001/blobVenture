import * as PIXI from 'pixi.js'

const width = 31
const height = 36
export class Jelly {
  mesh: PIXI.AnimatedSprite

  constructor() {
    const atlassData = {
      frames: {
        f1: {
          frame: {
            x: 17, y: 31, w: width, h: height,
          },
          rotated: false,
          trimmed: false,
        },
        f2: {
          frame: {
            x: 56, y: 31, w: width, h: height,
          },
          rotated: false,
          trimmed: false,
        },
        f3: {
          frame: {
            x: 97, y: 31, w: width, h: height,
          },
          rotated: false,
          trimmed: false,
        },
      },
      animations: {
        iddle: [
          'f1',
          'f2',
          'f3',
          'f2',
        ],
      },
      meta: {
        scale: 1,
        format: 'R7GBA8888',
      },
    }
    const texture = PIXI.BaseTexture.from('images/blobsheet_0_transparent.png')
    const spritesheet = new PIXI.Spritesheet(
      texture,
      atlassData,
    )
    spritesheet.parse(() => {
      this.mesh = new PIXI.AnimatedSprite(spritesheet.animations.iddle)
      this.mesh.animationSpeed = 0.15
      this.mesh.position.x = 250
      this.mesh.position.y = 320
      this.mesh.play()
    })
  }
}
