/**
 * Check if a number is even
 *
 * @param {String} num - String which will be used for search some movie inside an array
 * @param {Array} num - Array where the search will be performed
 * @returns {Array} - Filtered array
 */

export default function filterMovies (searchName = '', arr = []) {
  const result = arr.filter((movie) => movie.name.toLowerCase().includes(searchName.toLowerCase()));
  return result;
};
