import { PositionComponent, RenderComponent } from "ecsr"
import { indexToX, indexToY } from './utils'


import * as PIXI from 'pixi.js'
(window as any).PIXI = PIXI
import 'pixi-tilemap'

export interface Map{
  data: number[],
  width: number,
  name: string,
}

export class PixiTilemap{
  mesh: any
}
export const createTilemap = (map: Map, textures: any)=>{
  const view = new  PixiTilemap()
  view.mesh = new PIXI.tilemap.CompositeRectTileLayer(
    0,
    textures,
  )

  const width = map.width
  const toX = indexToX(width, 32)
  const toY = indexToY(width, 32)

  map.data.map((item, index)=>{
    const x = toX(index)
    const y = toY(index)
    view.mesh.addFrame(
      item.toString(),
      x, y
      
    )
  })
  return {
    position: new PositionComponent(),
    // health: new HealthComponent(),
    render: new RenderComponent(view.mesh),
  }
}