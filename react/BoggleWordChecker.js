// Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

// [ ["I","L","A","W"],
//   ["B","N","G","E"],
//   ["I","U","A","O"],
//   ["A","S","R","L"] ]

// Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

// For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

// Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

// Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.


const getAllIdx = (arr, val) => {
    let indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

const intersect = (a, b) => {
    const setA = new Set(a);
    const setB = new Set(b);
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
}

const range = (start, stop, step) => {
    const result = [];
    for (let i = start; i <= stop; i += step) {
        result.push(i);
    }

    return result;
}

const canBuildWord = (height, [first, second, ...rest], used=[]) => {
    let res = [];
    if (second === undefined) return true;

    for(let i = 0; i < first.length; i++) {

        nextUsed = [...used, first[i]];
        let val = first[i];
        ajacentIdx = [val-height, val+height];
        const rightBound = range(height-1, (height-1) + (height * (height-1)), height);
        const leftBound = range(0, height * height - 1, height);

        if (!rightBound.includes(val)) {
            ajacentIdx.push(val+1, val-height+1, val+height+1);
        }
        if (!leftBound.includes(val)) {
            ajacentIdx.push(val-1, val-height-1, val+height-1);
        }

        ajacentIdx = ajacentIdx.filter(x => !nextUsed.includes(x));

        let intersection = intersect(ajacentIdx, second);
        if (intersection.length === 0) {
            res.push(false);
        } else {
            for(let j = 0; j < intersection.length; j++) {
                res.push(canBuildWord(height, [intersection, ...rest], [...nextUsed, intersection[j]]));
            }
        }

    }
    return res.some(x => x);
}

const checkWord = (board, guess) => {
    const chars = guess.split('');
    const flat = [].concat.apply([], board);

    const startingPoints =[];
    for (let i = 0; i < chars.length; i++) {
        startingPoints.push(getAllIdx(flat, chars[i]));
    }

    const missingLetter = startingPoints.filter(points => points.length === 0).length !== 0;
    if (missingLetter) return false;

    return canBuildWord(board.length, startingPoints);}