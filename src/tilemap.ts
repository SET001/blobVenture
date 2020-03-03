import { PositionComponent, RenderComponent } from "ecsr"

import * as PIXI from 'pixi.js'
(window as any).PIXI = PIXI
import 'pixi-tilemap'

export interface Map{
  data: Number[],
  height: Number,
  width: Number,
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

  const width = 50
  console.log(map.name)
  map.data.map((item, index)=>{
    console.log(`adding tile #${item}`)
    view.mesh.addFrame(
      item.toString(),
      ((index % width)+1)*32,
      Math.ceil((index+1)/width)*32
    )
  })
  return {
    position: new PositionComponent(),
    // health: new HealthComponent(),
    render: new RenderComponent(view.mesh),
  }
}