/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
var shech = 0;

for (var i = 0; i<preferences.length; i++) {
  var firstChel = i;
  var secondChel = preferences[i] - 1;
  if (firstChel == secondChel){
    continue;
  }
  var thirdChel = preferences[secondChel] - 1;
  
  if (firstChel == (preferences[thirdChel] - 1)) {
    shech++;
  }
}

var ret = shech/3;
return ret;
};
