//import {v4} from 'uuid'
let id = 0
export const addInput = (questionText, questionType) => ({
  type: 'ADD_INPUT',
  id: id++, //v4()
  questionText,
  questionType
})

export const updateInput = (id, newQuestionText, newQuestionType) => {
  type: 'UPDATE_INPUT',
  id,
  newQuestionText,
  newQuestionType
}
