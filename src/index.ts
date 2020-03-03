import { ThunkDispatch } from 'redux-thunk'

import {
  createApp, Action, PositionSystemState,
} from '../lib'
import { game, GameState } from '../lib/game'
import { gameTickAction, gameAddObject } from '../lib/game/actions'
import { position } from '../lib/position'
import { movement, MovementSystemState } from '../lib/movement'

import { render, RenderSystemState } from '../lib/render'
import { config } from './config'
import { createCreature } from './creature/actions'
import { createTilemap } from './tilemap'

// export type RootState = RenderSystemDependencies & GameSystemDependencies


export interface RootState{
  game: GameState
  position: PositionSystemState
  movement: MovementSystemState
  render: RenderSystemState
}

export type AppDispatch = ThunkDispatch<RootState, undefined, Action>;

(async () => {

  //  LOAD RESOURCES
  const loader = new PIXI.Loader()
  loader
    .add('map', 'map.json')
    .add('atlas', 'atlas.json')
    .add('images/backgroundTiles.png')

  const l = (resolve: any): any => loader.load((
    lo: any,
    resources:Partial<Record<string, PIXI.LoaderResource>>,
  ): void => {
    resolve(resources)
  })
  const resources: any = await new Promise(l)
  console.log({resources})
  const app = createApp({
    game, position, movement, render,
  }, config)
  const state = app.store.getState()

  await app.init()

  const map = resources.map.data
  console.log({map})
  // const layer = map.layers.find(layer=>layer.name === 'land')
  await Promise.all(map.layers.map(layer=>{
    const tilemap = createTilemap(layer, resources.atlas.textures)
    return app.store.dispatch(gameAddObject(tilemap))
  }))

  app.store.dispatch(createCreature({}))
  const renderLoop = async () => {
    await app.store.dispatch(gameTickAction())
    requestAnimationFrame(renderLoop)
  }
  renderLoop()
})()
