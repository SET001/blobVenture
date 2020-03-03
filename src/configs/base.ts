import { clone } from 'ramda'
import { game, render, movement } from 'ecsr'

export const base = {
  game: clone(game.state),
  render: clone(render.state),
  movement: clone(movement.state),
}

base.render.container = document.getElementById('viewport')
