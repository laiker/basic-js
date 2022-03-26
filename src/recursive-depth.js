const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr, arrcnt = 1, lastValue = false, maxValues = null) {
    
    if (maxValues == null) {
      var maxValues = [];
    }
    
    if (!lastValue) {
      lastValue = true;
      arr.push('last');
    }

    for(var i = 0; i < arr.length; i++) {

      if (arr[i] == 'last') {
        if (![...maxValues].length) {
          return 1;
        }
        return Math.max(...maxValues);
      }

      if(!Array.isArray(arr[i])) {
        continue;
      }
      
      maxValues.push(this.calculateDepth(arr[i], arrcnt + 1, lastValue, maxValues));
    }

    return arrcnt;
  }
}

module.exports = {
  DepthCalculator
};
