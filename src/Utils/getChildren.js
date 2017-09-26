
function getValues (familyId, fatherId) {
  return function (x) {
    return x.familyId === familyId && x.fatherId === fatherId
  }
}

function subinputs (input, familyId, fatherId) {
    let Subinputs = input.children
    let sub = Subinputs.filter(getValues(familyId, fatherId))
    return sub
}

<<<<<<< HEAD
export function getChildren (inputs, familyId, fatherId) {
  let res = subinputs(inputs, familyId, fatherId)
=======
export function getChildren (input, familyId, fatherId) {
  let res = subinputs(input, familyId, fatherId)
>>>>>>> object
  return res
}
