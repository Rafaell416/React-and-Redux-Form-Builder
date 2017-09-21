
let nextInputId = 0
export const addInput = (text) => ({
  type: 'ADD_INPUT',
  id: nextInputId++,
  text
})
