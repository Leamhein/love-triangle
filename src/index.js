/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0; // count of love triangles
  for (let i=0; i<preferences.length; i++) {
    if (preferences[i+1] == preferences[i]+1 && preferences[i+2] == preferences[i]-1) {
      count++;
    };
  };
  return count;
};
