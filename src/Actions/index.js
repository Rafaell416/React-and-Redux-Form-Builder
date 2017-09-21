import {v4} from 'uuid'
export const addInput = (questionText, questionType) => ({
  type: 'ADD_INPUT',
  id: v4(),
  questionText,
  questionType
})
