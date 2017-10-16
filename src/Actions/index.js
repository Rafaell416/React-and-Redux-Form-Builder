import {v4} from 'uuid'

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

export const deleteSubInput = (familyId, fatherId, id) => ({
  type: 'DELETE_SUB_INPUT',
  familyId,
  fatherId,
  id
})

export const updateSubInputCondition = (familyId, fatherId, id, newSubInputCondition) => ({
  type: 'UPDATE_SUB_INPUT_CONDITION',
  familyId,
  fatherId,
  id,
  newSubInputCondition
})

export const updateSubInputAnswer = (familyId, fatherId, id, newSubInputAnswer) => ({
  type: 'UPDATE_SUB_INPUT_ANSWER',
  familyId,
  fatherId,
  id,
  newSubInputAnswer
})

export const updateSubInputQuestion = (familyId, fatherId, id, newSubInputQuestion) => ({
  type: 'UPDATE_SUB_INPUT_QUESTION',
  familyId,
  fatherId,
  id,
  newSubInputQuestion
})

export const updateSubInputQuestionType = (familyId, fatherId, id, newSubInputQuestionType) => ({
  type: 'UPDATE_SUB_INPUT_QUESTION_TYPE',
  familyId,
  fatherId,
  id,
  newSubInputQuestionType
})
