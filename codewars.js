




//------------------------------------------------------------------------------




//------------------------------------------------------------------------------



//------------------------------------------------------------------------------



//------------------------------------------------------------------------------


//------------------------------------------------------------------------------




//------------------------------------------------------------------------------



//------------------------------------------------------------------------------

// Sort the odd

function sortArray(array) {
  if (array.length === 0) return array;
  odds = array.filter(n => n % 2 === 1);
  odds = odds.sort((a, b) => a - b);
  return array.map(n => {
    if (n % 2 === 1) {
      return odds.shift();
    } else {
      return n;
    }
  })
}


//------------------------------------------------------------------------------

// Number of people in the bus

var number = function (busStops) {
  let ppl = 0;
  for (let i = 0; i < busStops.length; i++) {
    let stop = busStops[i];
    ppl += stop[0];
    ppl -= stop[1];
  }
  return ppl;
}


//------------------------------------------------------------------------------

// Categorize New Member

function openOrSenior(data) {
  return data.map(d => {
    if (d[0] >= 55 && d[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  })
}


//------------------------------------------------------------------------------

// Square Every Digit

function squareDigits(num) {
  newNums = `${num}`.split("").map(n => {
    int = parseInt(n) ** 2;
    return `${int}`;
  });
  return parseInt(newNums.join(""));
}

// let num = 9119;
// squareDigits(num);