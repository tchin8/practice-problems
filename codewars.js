

//------------------------------------------------------------------------------




//------------------------------------------------------------------------------


//------------------------------------------------------------------------------



//------------------------------------------------------------------------------


//------------------------------------------------------------------------------

// Sentences should start with capital letters.

function fix(paragraph){
  let chars = paragraph.split("");
  for (let i = 0; i < chars.length; i++) {
    if (i === 0 || chars[i - 2] === '.') chars[i] = chars[i].toUpperCase();
  }
  return chars.join("");
}


//------------------------------------------------------------------------------

// Human readable duration format

function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  let years, days, hours, mins, secs, time = {};

  if (seconds >= 31536000) {
    years = Math.floor(seconds / 31536000)
    seconds = seconds - (years * 31536000);

    time["years"] = years === 1 ? `${years} year` : `${years} years`;
  }
  if (seconds >= 86400) {
    days = Math.floor(seconds / 86400) 
    seconds = seconds - (days * 86400);

    time["days"] = days === 1 ? `${days} day` : `${days} days`;
  }
  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
    seconds = seconds - (hours * 3600);

    time["hours"] = hours === 1 ? `${hours} hour` : `${hours} hours`;
  }
  if (seconds >= 60) {
    mins = Math.floor(seconds / 60);
    seconds = seconds - (mins * 60);

    time["mins"] = mins === 1 ? `${mins} minute` : `${mins} minutes`;
  }
  if (seconds < 60 && seconds > 0) {
    time["secs"] = seconds === 1 ? `${seconds} second` : `${seconds} seconds`;;
  }

  keys = Object.keys(time);
  if (keys.length === 1) {
    return time[keys];
  } else {
    let timeInWords = "";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (i === 0) {
        timeInWords += time[key];
      } else if (i !== keys.length - 1) {
        timeInWords += `, ${time[key]}`;
      } else {
        timeInWords += ` and ${time[key]}`;
      }
    }

    return timeInWords;
  }
}



//------------------------------------------------------------------------------

// Repetitive Sequence - Easy Version

function find(n) {
  if (n === 0) return 0;

  let seq = [];
  let multiple = 1;
  let num = 0;

  while (n >= seq.length) {
    if (num === 0) {
      seq.push(num);
      debugger;
    } else {
      debugger;
      for (let i = 0; i < multiple; i++) {
        seq.push(num);
      }
    }

    if (num % 2 === 1) {
      multiple += 1;
    }

    num += 1;
  }
  debugger;

  // return seq[n];
  console.log(seq[n - 1]);
} 

// find(839);

// [
  // 0, 
  // 1, 
  // 2, 2, 
  // 3, 3, 
  // 4, 4, 4, 
  // 5, 5, 5, 
  // 6, 6, 6, 6, 
  // 7, 7, 7, 7, 
  // 8, 8, 8, 8, 
       // 9, 9, 9, 9, 9, 
  // 10, 10, 10, 10, 10, 
  // 11, 11, 11, 11, 11, 
  // 12, 12, 12, 12, 12, 12, 
  // 13, 13, 13, 13, 13, 13, 
  // 14, 14, 14, 14, 14, 14, 
  // 15, 15, 15, 15, 15, 15, 
  // 16, 16, 16, 16, 16, 16, 16, 
  // 17, 17, 17, 17, 17, 17, 17, 
  // 18, 18, 18, 18, 18, 18, 18, 
  // 19, 19, 19, 19, 19, 19, 19, 
  // 20, 20, 20, 20, 20, 20, 20, 20, 
  // 21, 21, 21, 21, 21, 21, 21, 21
// ]


//------------------------------------------------------------------------------

// The Hashtag Generator

function generateHashtag(str) {
  if (str.length === 0) return false;

  let hashtag = "#";

  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    let ele = str[i];
    if (ele !== " ") {
      let newWord = ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
      
    }
  }
}



//------------------------------------------------------------------------------

// // First non-repeating character

// function firstNonRepeatingLetter(s) {
//   let count = {};
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (count[char.toUpperCase()]) {
//       count[count[char.toUpperCase()]] += 1;
//     } else if (count[char.toLowerCase()]) {
//       count[char.toLowerCase()] += 1;
//     } else if (!count[char]) {
//       count[char] = 1;
//     }
//   }

//   let chars = Object.keys(count);
//   for (let i = 0; i < chars.length; i++) {
//     let char = chars[i];
//     if (count[char] === 1) return char;
//   }
// }



//------------------------------------------------------------------------------

// Pete, the baker

function cakes(recipe, available) {
  let ingredients = Object.keys(recipe);
  let max = 0;

  for (let i = 0; i < ingredients.length; i++) {
    let ingred = ingredients[i];
    if (!available[ingred]) {
      return 0;
    }

    let maxIngred = Math.floor(available[ingred] / recipe[ingred]);

    if (i === 0) {
      max = maxIngred;
    } else {
      if (maxIngred < max) {
        max = maxIngred;
      }
    }
  }

  return max;

}



//------------------------------------------------------------------------------

// Mumbling

function accum(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    newStr += char.toUpperCase();

    if (i > 0) {
      for (let j = 0; j < i; j++) {
        newStr += char.toLowerCase();
      }
    }

    if (i !== s.length - 1) {
      newStr += "-";
    }
  }

  return newStr;
}



//------------------------------------------------------------------------------

// Sum Strings as Numbers

function sumStrings(a, b) {
  if (a === '') {
    a = '0';
  } else if (b === '') {
    b = '0'
  }

  let newNumStr = '', extra = '0';

  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  for (let i = 0; i < a.length || i < b.length; i++) {
    let numA = a[i];
    let numB = b[i];

    if (!numA) numA = '0';
    if (!numB) numB = '0';

    let sum = parseInt(numA) + parseInt(numB) + parseInt(extra);
    sum = sum.toString();

    if (sum.length > 1) {
      extra = sum.slice(0, sum.length - 1);

      if ((a.length === b.length && i === a.length - 1) 
      || (a.length > b.length && i === a.length - 1) 
      || (b.length > a.length && i === b.length - 1)) {
        newNumStr += sum[sum.length - 1];
        newNumStr += extra;
        break;
      }

    } else {
      extra = '0';
    }

    newNumStr += sum[sum.length - 1];
  }

  newNumStr = newNumStr.split("").reverse().join("");

  if (newNumStr[0] === '0') {
    newNumStr = newNumStr.slice(1);
  }
  return newNumStr;
}

sumStrings('800', '9567')
// sumStrings('123', '456')
// sumStrings('712569312664357328695151392', '8100824045303269669937');
// sumStrings('50095301248058391139327916261', '81055900096023504197206408605') 



//------------------------------------------------------------------------------

// String incrementer

function incrementString(strng) {
  if (strng.length === 0) return "1";

  let ints = "1234567890", letters, nums;

  if (!ints.includes(strng[strng.length - 1])) {
    letters = strng;
    nums = '0';
  } else if (ints.includes(strng[0])) {
    letters = "";
    nums = strng;
  } else {
    for (let i = 0; i < strng.length; i++) {
      let char = strng[i];
      if (ints.includes(char)) {
        letters = strng.slice(0, i);
        nums = strng.slice(i);
        break;
      }
    }
  }

  let num = parseInt(nums);
  num = `${num + 1}`;
  if (nums.length > num.length) {
    let diff = nums.length - num.length;
    for (let i = 0; i < diff; i++) {
      num = '0' + `${num}`;
    }
  }

  return `${letters + num}`;
}

incrementString("1");



//------------------------------------------------------------------------------

// Human Readable Time

function humanReadable(seconds) {
  let hour = "00";
  let min = "00";
  let sec = "00";

  if (seconds >= 3600) {
    hour = Math.floor(seconds / 3600);
    if (`${hour}`.length === 1) {
      hour = `0${hour}`;
    }

    seconds = seconds - (hour * 3600);
  }

  if (seconds >= 60) {
    min = Math.floor(seconds / 60);
    if (`${min}`.length === 1) {
      min = `0${min}`;
    }

    seconds = seconds - (min * 60);
  }
  if (seconds < 60 && seconds > 0) {
    sec = seconds;
    if (`${sec}`.length === 1) {
      sec = `0${sec}`;
    }
  }

  return `${hour}:${min}:${sec}`;
}




//------------------------------------------------------------------------------

// Extract the domain name from a URL

function domainName(url) {
  url = url.split('.');

  for (let i = 0; i < url.length; i++) {
    let ele = url[i];
    if (ele.includes('//')) {
      if (ele.includes('www')) {
        continue;
      }
      let idx = ele.indexOf('/');
      return ele.slice(idx + 2);
    } else if (ele !== 'co' && ele !== 'com' && ele !== 'www' && i !== url.length - 1) {
      return ele;
    }
  }
}

domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");


//------------------------------------------------------------------------------

// Find the missing letter

function findMissingLetter(array) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';

  if (!alpha.includes(array[0])) {
    alpha = alpha.toUpperCase();
  } 

  let missingChar, prevIdx = alpha.indexOf(array[0]);

  for (let i = 1; i < array.length; i++) {
    let char = array[i];
    let alphaIdx = alpha.indexOf(char);

    if (prevIdx !== alphaIdx - 1) {
      missingChar = alpha[alphaIdx - 1];
      break;
    } else {
      prevIdx = alphaIdx;
    }
  }

  return missingChar;
}

// findMissingLetter(['O', 'Q', 'R', 'S'])


//------------------------------------------------------------------------------

// Are they the "same"?

function comp(array1, array2) {
  let newArr1 = array1.map(num => { return num * num});

  // debugger;
  for (let i = 0; i < array2.length; i++) {
    let num = array2[i];
    if (newArr1.includes(num)) {
      let idx = newArr1.indexOf(num);
      newArr1.splice(idx, 1);
      // debugger
    } else {
      // debugger;
      return false;
    }
  }

  // debugger;

  return newArr1.length === 0;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a1, a2);   // true

//------------------------------------------------------------------------------

// Consecutive strings

function longestConsec(strarr, k) {
  if (k <= 0 || strarr.length === 0 || k > strarr.length) return "";

  let longest;

  for (let i = 0; i < strarr.length; i++) {
    let sub = strarr.slice(i, i + k).join("");
    if (!longest || longest.length < sub.length) {
      longest = sub;
    } 
  }

  return longest;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
longestConsec([], 3)
longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)



//------------------------------------------------------------------------------

// Equal Sides Of An Array

function findEvenIndex(arr) {
  let idx = -1;
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);

    if (i === 0) {
      let rightSum = right.reduce((a, b) => a + b);
      if (rightSum === 0) return i;
    } else if (i === arr.length - 1) {
      let leftSum = left.reduce((a, b) => a + b);
      if (leftSum === 0) return i;
    } else {
      let leftSum = left.reduce((a, b) => a + b);
      let rightSum = right.reduce((a, b) => a + b);
      if (leftSum === rightSum) return i;
    }
  }

  return idx;
}


//------------------------------------------------------------------------------

// Counting Duplicates

function duplicateCount(text) {
  if (text.length === 0) return 0;

  text = text.toLowerCase();
  let counts = {};

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (!counts[char]) counts[char] = 0;
    counts[char] += 1;
  }

  keys = Object.keys(counts).filter(key => counts[key] > 1);
  return keys.length;
}



//------------------------------------------------------------------------------

// // Best travel
// // ls is an array
// // t is max of k nums

// function chooseBestSum(t, k, ls) {
//   let townTrios = [];
//   for (let i = 0; i < ls.length; i++) {
//     for (let j = i + 1; j < ls.length; j++) {
//       for (let h = j + 1; h < ls.length; h++) {
//         townTrios.push([ls[i], ls[j], ls[k]]);
//       }
//     }
//   }

//   debugger;

//   let sums = [];
//   for (let i = 0; i < townTrios.length; i++) {
//     let towns = townTrios[i];
//     let sum = towns.reduce((a, b) => a + b);
//     sums.push(sum);
//   }

//   debugger;

//   let max = Math.max(sums);
//   let idx = sums.indexOf(max);
//   return townTrios[idx];
// }

// let ts = [50, 55, 56, 57, 58];
// chooseBestSum(163, 3, ts);
// ts = [50];
// chooseBestSum(163, 3, ts);
// ts = [91, 74, 73, 85, 73, 81, 87];
// chooseBestSum(230, 3, ts);


//------------------------------------------------------------------------------

// Scramblies

function scramble(str1, str2) {
  let count2 = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!count2[char]) count2[char] = 0;
    count2[char] += 1;
  }

  let count = {};
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!count[char]) count[char] = 0;
    count[char] += 1;
  }

  return Object.keys(count).every(key => count2[key] >= count[key]);
}

scramble('rkqodlw', 'world');
scramble('cedewaraaossoqqyt', 'codewars');
scramble('katas', 'steak');
scramble('scriptjava', 'javascript');
scramble('scriptingjava', 'javascript');
scramble('scriptsjava', 'javascripts');
scramble('jscripts', 'javascript');
scramble('aabbcamaomsccdd', 'commas');


//------------------------------------------------------------------------------

// Moving Zeros To The End

var moveZeros = function (arr) {
  let zeroCount = 0;
  let prevZeroIdx, newArr;

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ele === 0) {
      if (!prevZeroIdx) {
        newArr = arr.slice(0, i);
        prevZeroIdx = i;
      } else {
        let sub = arr.slice(prevZeroIdx + 1, i);
        newArr = newArr.concat(sub);
        prevZeroIdx = i;
      }

      zeroCount += 1;
    } 
  }

  let lastSub = arr.slice(prevZeroIdx + 1);
  newArr = newArr.concat(lastSub);

  for (let i = 0; i < zeroCount; i++) {
    newArr.push(0);
  }

  if (arr[0] === 0) newArr = newArr.slice(1);

  return newArr;
}



//------------------------------------------------------------------------------

// Simple Pig Latin

function pigIt(str) {
  words = str.split(" ").map(word => {
    if (!"!?".includes(word)) {
      let newWord = word.slice(1);
      newWord += `${word[0]}ay`;
      return newWord;
    } else {
      return word;
    }
  });
  
  console.log(words.join(" "));
}

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



//------------------------------------------------------------------------------

// Maximum subarray sum

var maxSequence = function (arr) {
  if (arr.length === 0) return 0;

  let subs = [];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length + 1; j++) {
      let sub = arr.slice(i, j);
      if (!subs.includes(sub)) subs.push(sub);
    }
  }

  for (let i = 0; i < subs.length; i++) {
    let sub = subs[i];
    let sum = sub.reduce((a, b) => a + b);
    if (sum > max) {
      max = sum;
    };
  }

  return max;
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])


//------------------------------------------------------------------------------

// Vowel Count

function getCount(str) {
  let vowels = "aeiou"
  var vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) vowelsCount += 1;
  }

  return vowelsCount;
}



//------------------------------------------------------------------------------

// IQ Test

function iqTest(numbers) {
  let oddsEvens = {
    odd: [],
    even: []
  };

  numbers = numbers.split(" ").map(num => parseInt(num));

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (Math.abs(num % 2) === 1) {
      oddsEvens.odd.push(i + 1);
    } else {
      oddsEvens.even.push(i + 1);
    }

    if (oddsEvens.odd.length > 1 && oddsEvens.even.length > 0) {
      return oddsEvens.even[0];
    } else if (oddsEvens.even.length > 1 && oddsEvens.odd.length > 0) {
      return oddsEvens.odd[0];
    }
  }
}



//------------------------------------------------------------------------------

// Dubstep

function songDecoder(song) {
  let songArr = song.split("WUB");
  let newArr = [];
  
  for (let i = 0; i < songArr.length; i++) {
    let ele = songArr[i];
    if (ele !== " ") newArr.push(ele);
  }

  return newArr.join(" ");
}



//------------------------------------------------------------------------------

// Replace With Alphabet Position

function alphabetPosition(text) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let newText = ""

  text.split("").forEach((char, i) => {
    char = char.toLowerCase();
    if (alpha.includes(char)) {
      newText += ` ${alpha.indexOf(char) + 1}`;
    }
  });

  if (newText[0] === " ") {
    newText = newText.slice(1)
  }

  return newText;
}
alphabetPosition("The sunset sets at twelve o' clock.") 
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//------------------------------------------------------------------------------

// Who likes it ?

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length <= 3) {
    let sent = ""
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (i === 0) {
        sent += name;
      } else if (i !== names.length - 1) {
        sent += `, ${name}`;
      } else {
        sent += ` and ${name} like this`;
      }
    }
    return sent;
  } else {
    let num = names.length - 2;
    return `${names[0]}, ${names[1]} and ${num} others like this`;
  }
}

likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Alex", "Jacob", "Mark", "Max"]);


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
      return oddsEvens.even[0];
    } else if (oddsEvens.even.length > 1 && oddsEvens.odd.length > 0) {
      return oddsEvens.odd[0];
    }
  }
}

// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
// findOutlier([160, 3, 1719, 19, 11, 13, -21]);


//------------------------------------------------------------------------------

// Persistent Bugger.

function persistence(num) {
  let pers = 0;
  if (`${num}`.length === 1) return pers;

  while (num > 10) {
    num = `${num}`.split("").reduce((acc, ele) => parseInt(acc) * parseInt(ele));
    pers += 1;
    // debugger;
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
    // debugger;

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