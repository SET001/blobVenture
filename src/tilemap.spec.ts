import { indexToX, indexToY } from './utils'
import { assert } from 'chai'

const width = 2
const size = 32
const toX = indexToX(width, size)
const toY = indexToY(width, size)

describe('tilemap', ()=>{
  it('getIndexX', ()=>{
    assert.equal(toX(0), 0)
    assert.equal(toX(1), size)
  })

  it('getIndexY', ()=>{
    assert.equal(toY(0), 0)
    assert.equal(toY(1), 0)
  })
})