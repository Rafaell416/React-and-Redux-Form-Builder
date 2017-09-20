'use strict'

let nextInputId = 0
export const addInput = (questionText, questionType) => ({
  type: 'ADD_INPUT',
  id: nextInputId++,
  questionText,
  questionType
})
