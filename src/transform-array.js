const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  var transformedArray = arr;
  var newArray = [];
  for(i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
          if (arr[i + 2] == '--discard-prev') {
            i += 2;
          } else {
            i += 1;
          }
        break;
      case '--discard-prev':
        if(i != 0) {
          newArray.splice(newArray.length - 1, 1);
        }
        break;
      case '--double-next':
        if(i != arr.length-1) {
          newArray.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if(i != 0 && arr[i - 2] != '--discard-next') {
          newArray.push(arr[i - 1]);
        }
        break;
      default:
          newArray.push(transformedArray[i]);
        break;
    }
  }
  return newArray;

};
