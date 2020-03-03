import { createAction } from '@reduxjs/toolkit'

import {
  PositionComponent, 
  game,

  MovementComponent, RenderComponent
 } from 'ecsr'

import { Jelly } from './view'

export const addAction = createAction<any>('creature/add')
export const removeAction = createAction('creature/remove')

// TODO: deal with dispatch
export const createCreature = (layer: any) => async (dispatch: any) => {
  const view = new Jelly()
  const object = {
    position: new PositionComponent(),
    // health: new HealthComponent(),
    movement: new MovementComponent(),
    render: new RenderComponent(view.mesh),
  }
  object.render.layer = layer

  await Promise.all([
    dispatch(game.actions.gameAddObject(object)),
    dispatch(addAction(object)),
  ])
}
