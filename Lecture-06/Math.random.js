console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);
/**
 * Generates a random integer between a minimum and maximum value (inclusive).
 * @param {number} min The minimum possible value.
 * @param {number} max The maximum possible value.
 * @returns {number} A random integer within the range.
 */
function getRandomInt(min, max) {
  // 1. Calculate the number of possible outcomes (the size of our range).
  const range = max - min + 1;

  // 2. Scale up Math.random() to create a float in the range [0, range).
  const scaled = Math.random() * range;

  // 3. Round down to get an integer in the range [0, range-1].
  const floored = Math.floor(scaled);

  // 4. Shift the range up to [min, max] by adding the minimum value.
  const result = floored + min;

  return result;
}

// Example usage:
console.log("Random number between 1 and 10:", getRandomInt(1, 10));
console.log("Random number between 50 and 100:", getRandomInt(50, 100));
console.log("Random dice roll (1 to 6):", getRandomInt(1, 6));
