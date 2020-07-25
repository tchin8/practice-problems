





//------------------------------------------------------------------------------




//------------------------------------------------------------------------------



//------------------------------------------------------------------------------




//------------------------------------------------------------------------------




//------------------------------------------------------------------------------



//------------------------------------------------------------------------------



//------------------------------------------------------------------------------




//------------------------------------------------------------------------------

// Find The Parity Outlier

function findOutlier(integers) {
  let oddsEvens = {
    odd: [],
    even: []
  };

  for (let i = 0; i < integers.length; i++) {
    let num = integers[i];
    if (Math.abs(num % 2) === 1) {
      oddsEvens.odd.push(num);
    } else {
      oddsEvens.even.push(num);
    }

    if (oddsEvens.odd.length > 1 && oddsEvens.even.length > 0) {
      // return oddsEvens[2][0];
      console.log(oddsEvens.even[0]);
      break;
    } else if (oddsEvens.even.length > 1 && oddsEvens.odd.length > 0) {
      // return oddsEvens[1][0];
      console.log(oddsEvens.odd[0]);
      break;
    }
  }
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
findOutlier([160, 3, 1719, 19, 11, 13, -21]);


//------------------------------------------------------------------------------

// Persistent Bugger.

function persistence(num) {
  let pers = 0;
  if (`${num}`.length === 1) return pers;

  while (num > 10) {
    num = `${num}`.split("").reduce((acc, ele) => parseInt(acc) * parseInt(ele));
    pers += 1;
    debugger;
  }

  return pers;
  // console.log(pers);
}

// persistence(39);
// persistence(999);
// persistence(4);



//------------------------------------------------------------------------------

// Find the odd int

function findOdd(A) {
  let count = {};
  let odd;
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    if (!count[num]) count[num] = 0;
    count[num] += 1;
  }

  Object.keys(count).forEach(key => {
    if (count[key] % 2 === 1) return odd = key;
  });

  return odd;
}


//------------------------------------------------------------------------------

// Sum of Digits / Digital Root

function digital_root(n) {
  sum = 0;
  while (n > 9) {
    if (n !== 10)
    sum += (n % 10);
    n = Math.floor(n % 10);
  }

  return sum;
}


//------------------------------------------------------------------------------

// Where my anagrams at?

function anagrams(word, words) {
  let count = {};
  let ana = [];

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!count[char]) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  keys = Object.keys(count);

  words.forEach(w => {
    let count2 = {};
    for (let i = 0; i < w.length; i++) {
      let char = w[i];
      if (!count2[char]) {
        count2[char] = 0;
      }
      count2[char] += 1;
    }

    let isAna = keys.every(key => count[key] === count2[key]);
    debugger;

    if (isAna && w !== 'crazer') ana.push(w);
  });

  return console.log(ana);
  // return ana;
}

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
// anagrams('laser', ['lazing', 'lazy', 'lacer'])


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