// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// Check my other katas:


function nearestSq(n) {
  // If n is already a perfect square, return n
  if (Math.sqrt(n) % 1 === 0) {
    return n;
  }

  // Find the nearest perfect square
  let lower = Math.floor(Math.sqrt(n));
  let upper = Math.ceil(Math.sqrt(n));
  let lowerDiff = n - Math.pow(lower, 2);
  let upperDiff = Math.pow(upper, 2) - n;

  if (lowerDiff < upperDiff) {
    return Math.pow(lower, 2);
  } else {
    return Math.pow(upper, 2);
  }
}
