/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
for (let i = 0; i < preferences.length; i++) {
  if (preferences[preferences[preferences[i]-1]-1] - 1 == i && preferences[i] != preferences[preferences[i]-1] && preferences[preferences[i]-1] != preferences[preferences[preferences[i]-1]-1]) { // check the linked list and absence of identical values
    preferences[i] = null;
    preferences[preferences[i]-1] = null;
    preferences[preferences[preferences[i]-1]-1] = null; // fill the list to exclude false positives in the future
    count++; // +1 triangle
  };
};
  return count;
};
