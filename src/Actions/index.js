import {v4} from 'uuid'
//let id = 0
export const addInput = (questionText, questionType) => ({
  type: 'ADD_INPUT',
  familyId: v4(),
  id: v4(),
  questionText,
  questionType,
  children: []
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

export const deleteInput = (id) => ({
  type: 'DELETE_INPUT',
  id
})

export const addSubInput = (familyId, fatherId, condition, answer, questionText, questionType) => ({
  type: 'ADD_SUB_INPUT',
  familyId,
  fatherId,
  id: v4(),
  questionText,
  questionType,
  condition,
  answer
})
