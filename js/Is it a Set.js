// DESCRIPTION:
// set! is a card game where you compete with other players, to find out who can find a set of cards first.
// Your task is to write a function that checks if a collection of three input cards qualifies as a set.

// The cards
// Every card has one, two or three symbols in it. A symbol has three distinct features:

// Shape (either diamond, snake or capsule)
// Colour (either green, blue or red)
// Pattern (either blank, striped or solid)

const card1 = {shape: 'diamond', color: 'green', pattern: 'blank'};
const card2 = {shape: 'snake', color: 'blue', pattern: 'striped'};
const card3 = {shape: 'capsule', color: 'red', pattern: 'solid'};

console.log(isSet(card1, card2, card3)); // Output: true
