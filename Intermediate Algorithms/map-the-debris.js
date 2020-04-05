/**
 * Transforms elements average altitude into their orbital periods (in seconds).
 * @param {array} arr Array holding the object with avgAlt property.
 * @return {array} newArray Array holding new orbitalPeriod.
 */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var newArray = arr.map(obj => ({
    name: obj.name,
    orbitalPeriod: Math.round(
      (Math.PI * 2) *
      Math.sqrt(
        Math.pow((earthRadius + obj.avgAlt), 3) /
        GM
      )
    ) 
  }))

  return newArray;
}

let test = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(test);
// Returns [ { name: 'sputnik', orbitalPeriod: 86400 } ]

let testTwo = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
console.log(testTwo);
/**
 * Returns...
 * [ { name: 'iss', orbitalPeriod: 5557 },
 * { name: 'hubble', orbitalPeriod: 5734 },
 * { name: 'moon', orbitalPeriod: 2377399 } ]
 */
