const movingMedians = require('../src/moving-medians.js')

describe('Moving Medians', () => {
  it('scenario 1', () => {
    const input = [3, 1, 3, 5, 10, 6, 4, 3, 1]
    const expected = "1,2,3,5,6,6,4,3"

    expect(movingMedians(input)).toEqual(expected)
  })

  it('scenario 2', () => {
    const input = [3, 0, 0, -2, 0, 2, 0, -2]
    const expected = "0,0,0,0,0,0,0"

    expect(movingMedians(input)).toEqual(expected)
  })

  it('scenario 3', () => {
    const input = [5, 2, 4, 6]
    const expected = "2,3,4"

    expect(movingMedians(input)).toEqual(expected)
  })
})
