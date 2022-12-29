// Description:

// The deleteValues function takes an array and removes elements that answer true to the pred function.

// For some reason, some of the elements of the array for which the predicate holds are not deleted...

// Can you fix the code?


const deleteValues = (array, pred) => (array.filter(pred).forEach(number => array.splice(array.indexOf(number), 1)), array)

