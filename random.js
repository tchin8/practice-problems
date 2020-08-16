

//------------------------------------------------------------------------------


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------

//------------------------------------------------------------------------------


//------------------------------------------------------------------------------


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
    let char = str[i];
    newStr += leetCodex[char.toLowerCase()];
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

// Q: Given a 2D board and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
// Example:
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
const recursiveBoard = (board, word) => {
  let temp = board.slice();
  const dfs = (x, y) => {
    if (x < 0 || x >= temp.length || y < 0 || y >= temp[x].length || temp[x][y] !== letters[letters.length - 1]) return;
    temp[x][y] = null;
    letters.pop();
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }
  let letters = word.split("").reverse();
  for (let x = 0; x < temp.length; x++) {
    for (let y = 0; y < temp[x].length; y++) {
      if (temp[x][y] === letters[letters.length - 1]) {
        dfs(x, y)
        if (letters.length === 0) return true;
        else {
          letters = word.split("").reverse();
          temp = board.slice();
        }
      }
    }
  }
  return false;
}
// board =
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
//   ]
// console.log(recursiveBoard(board, "ABCCED"))
// console.log(recursiveBoard(board, "SEE"))
// console.log(recursiveBoard(board, "ABCB"))



//------------------------------------------------------------------------------


// Q: Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


function recursiveBoard(board, word) {
  let firstChar = [];

  for (let i = 0; i < word.length; i++) { // O(n)
    let char = word[i];

    for (let row = 0; row < board.length; row++) {  // O(n)
      for (let col = 0; col < board[0].length; col++) {    // O(n)
        let cell = board[row][col];

        if (cell === char) {
          firstChar.push([row, col]);
        }
      }
    }
  }

  if (firstChar.length > 0) {
    for (let i = 0; i < array.length; i++) { // O(n)
      let pos = array[i];
      let used = [pos];
      return rec2Board(board, word.slice(1), pos, used);

      // horizontal : board[0][1], board[0][-1]
      // vertocal : board[1][0], board[-1][0]
    }
  } else {
    return false;
  }
}

function rec2Board(board, word, pos, used) {
  if (word.length === 0) return true;

  used = used || [];
  let [x, y] = pos;
  let neighbors = [[x, y + 1], [x, y - 1], [x - 1, y], [x + 1, y]];
  let char = word[i];

  for (let i = 0; i < neighbors; i++) { // O(n)
    let [x, y] = neighbors[i]; // O(1)
    let cell = board[x][y];
    if (cell && cell === char && !used.includes([x, y])) {
      used.push([x, y]);
      return rec2Board(board, word.slice(1), [x, y], used);
    }
  }

  return word.length === 0;
}


//------------------------------------------------------------------------------

// Medly Pharmacy Q1
// //Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
// var input = "";

// process.stdin.on('data', function (text) {
//   input += text;
// });

// process.stdin.on('end', function () {
//   input = input.split(" ")
//   let first = input[0];
//   let second = input[1];
//   let n = input[2];
  
//   fib(first, second, n);
// }); 

// function fib(first, second, n) {
//   if (n === 1) return first;
//   if (n === 2) return second;

//   console.log(fib(first, second, n-1) + fib(first, second, n-2));
// }


//------------------------------------------------------------------------------

// Medly Pharmacy Q2
// //Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
// var input = "";

// process.stdin.on('data', function (text) {
//   input += text;
// });

// process.stdin.on('end', function () {
//   input = input.split("\n");
//   input.shift();
//   input = input.map(inp => inp.split(" ").reverse().join(" "));
//   console.log(input.join("\n"));
// }); 



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


// Task 3
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  let renamed = [];
  let cities = {};

  S = S.split("\n");
  S = S.map(str => str.split(", "));

  cities = sortByCity(S);

  let citiesKeys = Object.keys(cities);

  cities = getPicNumbers(citiesKeys, cities);

  for (let i = 0; i < S.length; i++) {
    let pic = S[i];
    let city = pic[1];
    let newName = `${city}`;

    for (let j = 0; j < cities[city].length; j++) {
      let p = cities[city][j];
      if (i === p[0]) {
        newName = newName + p[2] + p[1];
        break;
      }
    }

    renamed.push(newName);
  }

  return renamed.join("\n");
}

function sortByCity(S) {
  let cities = {};
  for (let i = 0; i < S.length; i++) {
    let pic = S[i];
    let name = pic[0];
    let city = pic[1];
    let dateTime = pic[2];

    if (!cities[city]) cities[city] = [];

    let dotIdx = name.indexOf(".");
    let fileType = name.slice(dotIdx);

    dateTime = dateTime.split(" ");
    dateTime[0] = dateTime[0].split("-").join("");
    dateTime[1] = dateTime[1].split(":").join("");
    dateTime = dateTime.join("");

    cities[city].push([i, fileType, dateTime]);
  }

  return cities;
}

function getPicNumbers(citiesKeys, cities) {
  for (let i = 0; i < citiesKeys.length; i++) {
    let city = citiesKeys[i];
    let pics = cities[city];

    let times = [];
    for (let j = 0; j < pics.length; j++) {
      let pic = pics[j];
      times.push(pic[2]);
    }

    times.sort((a, b) => a - b);

    let max = pics.length;
    max = `${max}`.length;

    for (let j = 0; j < pics.length; j++) {
      let pic = pics[j];
      let time = pic[2];
      let picNum = times.indexOf(time) + 1;

      if (`${picNum}`.length < max) {
        let diff = max - `${picNum}`.length;
        for (let k = 0; k < diff; k++) {
          picNum = `0` + `${picNum}`;
        }
      } else {
        picNum = `${picNum}`;
      }
      cities[city][j][2] = picNum;
    }
  }

  return cities;
}


// {
//  Warsaw: [idx, fileType, num]
// }

// sort by city
// sort by time taken
// assign consec natural nums to the photoes starting from 1
// new num of every photo in each group should have the same length
    // equal to the length of the largest number in this group
    // need leading zeros, '701'.length ???
        // then somehow '001'  bc '001'.length = 3 as well?


// let S = 'photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11';

// console.log(solution(S));




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
