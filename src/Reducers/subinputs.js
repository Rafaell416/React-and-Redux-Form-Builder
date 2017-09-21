
const subinputs = (state=[], action) => {
    switch (action.type){
        case 'ADD_SUB_INPUT':
            return state.map(input =>
                (input.id === action.parentId)
                ? {
                    ...input.id{
                        id: action.id,
                        questionText: action.questionText,
                        questionType: action.questionType,
                        condition: action.condition,
                        answer: action.condition
                    }
                  }
                : input
            )
        default:
            return state
    }
}

export default subinputs