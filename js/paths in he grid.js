// DESCRIPTION:
// You have a grid with 
// �
// m rows and 
// �
// n columns. Return the number of unique ways that start from the top-left corner and go to the bottom-right corner. You are only allowed to move right and down.

// For example, in the below grid of 
// 2
// 2 rows and 
// 3
// 3 columns, there are 
// 10
// 10 unique paths:

// o----o----o----o
// |    |    |    |
// o----o----o----o
// |    |    |    |
// o----o----o----o
// Note: there are random tests for grids up to 1000 x 1000 in most languages, so a naive solution will not work.

function numberOfRoutes(m, n){
    return factorial(n+m) / factorial(n) /factorial(m)
  }
  function factorial(n){
      return n ?n*factorial(n-1):1
  }
  