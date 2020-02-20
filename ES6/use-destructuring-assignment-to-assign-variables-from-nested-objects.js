const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// change code below this line
  
const { today: {low : lowToday, high : highToday} } = LOCAL_FORECAST

// change code above this line

console.log(lowToday); // should be 64
console.log(highToday); // should be 77
