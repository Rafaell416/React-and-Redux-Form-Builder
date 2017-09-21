//import {v4} from 'uuid'
let id = 0
export const addInput = (questionText, questionType) => ({
  type: 'ADD_INPUT',
  id: id++, //v4()
  questionText,
  questionType
})

export const updateInputText = (id, newQuestionText) => ({
  type: 'UPDATE_INPUT_TEXT',
  id,
  newQuestionText
})

export const updateInputSelect = (id, newQuestionType) => ({
  type: 'UPDATE_INPUT_SELECT',
  id,
  newQuestionType
})
