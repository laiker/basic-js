const DepthCalculator = require('../src/recursive-depth.js');
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);
console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]));