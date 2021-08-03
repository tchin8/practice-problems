// const _ = require('lodash');


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------


function sortEvensAndOdds(arr) {
  let evens = 0;
  arr.forEach(num => {
    if (num % 2 === 0) evens += 1;
  });
  let moves = 0;
  for (let i = 0; i < evens; i++) {
    if (arr[i] % 2 !== 0) moves += 1;
  }
  return moves;
}


//------------------------------------------------------------------------------

// currency conversion
// INCOMPLETE

function currencyConverter(curr) {
  let rates = [['USD', 'JPY', 110], ['USD', 'AUD', 1.45], ['JPY', 'GBP', 0.0070]];

  let current = rates.filter(c => c[1] === curr[0])[0];
  let conversion = 1 / current[2];
  // debugger;

  while (current[0] !== curr[1]) {
    current = rates.filter(c => c[1] === current[0])[0];
    conversion = 1 / current[2];
    // debugger
  }

  return conversion;
}

let currencies = ['GBP', 'AUD'];
console.log(currencyConverter(currencies))      // 1.89


//------------------------------------------------------------------------------

// Given a string s, find the length of the longest substring without repeating characters.
// k = 3
// None
// Example 1:
// Input: s = "abcabcbb"
// "abcca"
// "abcc"
// "c"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

function longestSubstring(str) {
  let sub = '';
  let longestSub = '';
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      if (longestSub.length < sub.length) {
        longestSub = sub;
      }
      sub = '';
      count = {};
      count[char] = true;
      sub += char;
    } else {
      count[char] = true;
      sub += char;
    }
  }
  return longestSub;
}

str = "abcabcbbcdefgfgg";
console.log(longestSubstring(str));       

//------------------------------------------------------------------------------


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------



// helping jenny w/ objects
// 05 Frequency Analysis

function frequencyAnalysis(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!count[char]) count[char] = 0;
    count[char] += 1;
  }

  return count;
}


//------------------------------------------------------------------------------

// helping jenny w/ objects
// 04 Pet Sounds

function petSounds(animal, country) {
  let animalNoises = [
    {
      'dog': {
        'America': 'Woof! Woof!',
        'Germany': 'Wau Wau!',
        'England': 'Bow wow!',
        'Uruguay': 'Jua jua!',
        'Afrikaans': 'Blaf!',
        'Korea': 'Mong mong!',
        'Iceland': 'Voff voff!',
        'Albania': 'Ham!',
        'Algeria': 'Ouaf ouaf!'
      }
    },
    {
      'cat': {
        'America': 'Meow',
        'Germany': 'Miauw!',
        'England': 'mew mew',
        'Uruguay': 'Miau Miau!',
        'Afrikaans': 'Purr',
        'Korea': 'Nyaong!',
        'Iceland': 'Kurnau!',
        'Albania': 'Miau',
        'Algeria': 'Miaou!'
      }
    },
    {
      'chicken': {
        'America': 'Cluck cluck',
        'Germany': 'tock tock tock',
        'England': 'Cluck Cluck',
        'Uruguay': 'gut gut gdak',
        'Afrikaans': 'kukeleku',
        'Korea': 'ko-ko-ko',
        'Iceland': 'Chuck-chuck!',
        'Albania': 'Kotkot',
        'Algeria': 'Cotcotcodet'
      }
    }
  ];

  let idx;
  if (animal === 'dog') {
    idx = 0;
  } else if (animal === 'cat') {
    idx = 1;
  } else {
    idx = 2;
  }

  return `${animal.charAt(0).toUpperCase() + animal.slice(1)}s in ${country} say ${animalNoises[idx][animal][country]}`;
}



//------------------------------------------------------------------------------

// helping jenny w/ objects
// 03 Leet Translator

function leetTranslator(str) {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#', 'l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'", '><', 'j', '2'];

  let leetCodex = {};
  let newStr = ""
  for (i = 0; i < letters.length; i++) {
    let letter = letters[i];
    let leetChar = leetChars[i];
    leetCodex[letter] = leetChar;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (leetCodex[char]) {
      newStr += leetCodex[char];
    }
  }
  return newStr;
}



//------------------------------------------------------------------------------

// helping jenny w/ objects
// 02 Compare Objects

function compareObjects(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}




//------------------------------------------------------------------------------

function myLastIndexOf(array, searchValue, startIdx) {
  startIdx = startIdx || array.length - 1;

  for (let i = startIdx; i >= 0; i--) {
    if (array[i] === searchValue) return i;
  }
  return -1;
}

// console.log(myLastIndexOf([0, 10, 20, 10, 0], 10));


//------------------------------------------------------------------------------

function solution2(N) {
  if (N === 1) return [0];

  let nums = [];

  let i = 1;
  while (N > 0) {
    if (N % 2 === 1) {
      nums.push(0)
      N--;
      continue;
    };

    nums.push(i);
    nums.push(-i);

    i++
    N -= 2;
  }

  return nums;
}



//------------------------------------------------------------------------------

function solution1(S, K) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  K = K % 7;
  let sIdx = days.indexOf(S);
  let newIdx = (sIdx + K) % 7;

  return days[newIdx];
}

// console.log(solution1("Wed", 0));



//------------------------------------------------------------------------------




//------------------------------------------------------------------------------

// random incomplete q 

function closest(s, queries) {
  let matches = [];
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!hash[char]) hash[char] = [];
    hash[char].push[i];
  }

  for (let i = 0; i < queries.length; i++) {
    let idx = queries[i];
    let char = s[idx];

    let indices = hash[char];
    if (indices.length > 1) {
      let idxOfIdx = indices.indexOf(idx);
      // let diffLeft = indices[idxOfIdx - 1] ? 
    } else {
      matches.push(-1);
    }
  }
}




//------------------------------------------------------------------------------

function justifyNewspaperText(lines, aligns, width) {
  let justified = [];
  let newLine = "";

  for (let i = 0; i < lines.length; i++) {
    let words = lines[i];
    let align = aligns[i];
    if (words.join(" ").length <= width) {
      newLine = words.join(" ");
    } else {
      for (let i = words.length; i > 0; i--) {
        let sub = words.slice(0, i);
        if (sub.join(" ").length > width) continue;

        newLine = sub.join(" ");
        lines.push(words.slice(i));
        break;
      }
    }

    if (newLine.length < width) {
      for (let j = 0; j < (width - newLine.length); j++) {
        if (align === 'LEFT') {
          newLine += " ";
        } else {
          newLine = " " + newLine;
        }
      }
    }

    newLine = `*${newLine}*`
    justified.push(newLine);
  }

  let border = "";
  for (let i = 0; i < width + 2; i++) {
    border += "*";
  }

  justified.unshift(border);
  justified.push(border);
  return justified;
}

// let lines = [["hello", "world"], ["How", "areYou", "doing"], ["Please look", "and align", "to right"]];
// let aligns = ["LEFT", "RIGHT", "RIGHT"];
// let width = 16;

// console.log(justifyNewspaperText(lines, aligns, width));


//------------------------------------------------------------------------------

function threeDivSubsequences(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i; j < number.length; j++) {
      let sub = number.slice(i, j + 1);
      if ((sub[0] !== "0" && parseInt(sub) % 3 === 0) || sub === "0") count += 1;
    }
  }

  return count;
}

// console.log(threeDivSubsequences("456"));
// console.log(threeDivSubsequences("6666"));
// console.log(threeDivSubsequences("303"));
