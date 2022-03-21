const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr, arrcnt = 1, lastValue = false, maxValues = null) {

    if (maxValue == null) {
      var maxValues = [];
    }
    
    if (!lastValue) {
      lastValue = true;
      arr.push('last');
    }
    //console.log(arr);
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] != 'last') {
        if(!Array.isArray(arr[i])) {
          return 0;
        }

        return maxValues.push(this.calculateDepth(arr[i], arrcnt + 1));
      }
       
    }

   
    

    return this.calculateDepth(arr);
  }
};