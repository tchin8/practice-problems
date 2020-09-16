const _ = require('lodash');


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------

//------------------------------------------------------------------------------


//------------------------------------------------------------------------------

//------------------------------------------------------------------------------


//------------------------------------------------------------------------------

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


/* 

You should write a hangman game.  Hangman is a game in which one player
(the computer) has a secret word, and the other player (the human) guesses
letters in the word within a certain number of incorrect guesses.  At each
turn, the computer should print out the status of the guessed word, using
"-" for letters that have not yet been guessed.  The computer also prints
out the number of guesses that the human has.  Then, the human guesses a
letter. If the human guesses correctly the computer reveals all matching
letters; if the human guesses incorrectly the computer notifies the user
and takes away a guess.  The game ends when the human guesses the complete
word (human wins) or runs out of incorrect guesses (human loses).  For the
purposes of this exercise you may hardcode the word.  All other details
are left up to your judgment.  The start of a game for the word "foobar" is below:

Word status: ------
Guesses left: 10

Please guess a letter: <human enters "b" at the console and hits enter>
You guessed correctly!
Word status: ---b--
Guesses left: 10

Please guess a letter: <human enters "o" at the console and hits enter>
You guessed correctly!
Word status: -oob--
Guesses left: 10

Please guess a letter: <human enters "z" at the console and hits enter>
You guessed incorrectly!
Word status: -oob--
Guesses left: 9

 */

class Hangman {
  constructor(word, guesses) {
    this.word = word;
    this.guesses = guesses;

    // this.wordStatus = new Array(this.word.length).map(x => '-')
    this.wordStatus = [];
    for (let i = 0; i < this.word.length; i++) {
      this.wordStatus.push('-');
    }


    this.chars = {};

    for (let i = 0; i < this.word.length; i++) {
      let char = this.word[i];
      if (!this.chars[char]) this.chars[char] = [];
      this.chars[char].push(i);
    }

    console.log(this.wordStatus.join(""));
    console.log(this.guesses);
    // this.startGame();
  }

  startGame() {
    while (!this.gameOver()) {
      let res = prompt('Please guess a letter: ');
      if (this.chars[res]) {
        console.log('You guessed correctly!')
        let idx = this.chars[res];
        for (let i = 0; i < idx.length; i++) {
          let j = idx[i];
          this.wordStatus[j] = res;
        }
      } else {
        console.log('You guessed incorrectly!')
        this.guesses -= 1;
      }

      console.log(this.wordStatus.join(""));
      console.log(this.guesses);
    }

    this.winOrLose()
  }

  guess(letter) {
    if (this.chars[letter]) {
      console.log('You guessed correctly!')
      let idx = this.chars[letter];
      for (let i = 0; i < idx.length; i++) {
        let j = idx[i];
        this.wordStatus[j] = letter;
      }
    } else {
      console.log('You guessed incorrectly!')
      this.guesses -= 1;
    }

    console.log(this.wordStatus.join(""));
    console.log(this.guesses);
  }

  gameOver() {
    return !this.guesses || this.wordStatus.includes('-');
  }

  winOrLose() {
    if (!this.guesses) {
      console.log('You lose!')
    } else {
      console.log('You win!')
    }
  }

}


let game = new Hangman('foobar', 10);
game.guess('x')
game.guess('x')
game.guess('x')
game.guess('x')
game.guess('x')
game.guess('x')
game.guess('x')
game.guess('x')
game.guess('x')
game.guess('x')
game.winOrLose();


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------


//------------------------------------------------------------------------------

// 1. Write a function that flattens an arbitrarily nested array. Assume the array contains either numbers or further nested arrays. For example: flatten([1, [2, [3, 4]]]) -> [1, 2, 3, 4]
// Ruby 
// # Don't use a built-in flattener
// # 
// #2 - #5 Please do in SQL, do not use Active Record 
// #
// 2. Suppose we are building a simple social network. There are users, and users can be friends with other users. Design a schema for this setup. What row or rows would you store in the Friendships table if User 1 is friends with User 2?
// 
// # # # 
// 3. Suppose we want to support statuses - i.e. users can post statuses, and all the friends of a user can view that user's statuses. How would you add to your schema to support this? A status consists of a simple string, and a user can post many statuses over time
// 
// # # # # 
// 4. What would the query look like to fetch a user's timeline - i.e. the posts their friends have made, with most recent statuses coming first?
// 
// # # # # 
// 5. Suppose we want to support friend requests. I.e. to be friends with someone (and view their statuses), you must first request permission, and they must approve you. How would you modify your schema and the query to support this?
//  

// #1
// def flatten(arr) 
//   flattened = []
//   arr.each do |ele|
//     ele.is_a?(Array) ? flattened += flatten(ele) : flattened << ele
//   end 
//   flattened
// end 

// flatten([1, [2, [3, 4]]])


// #2
// SELECT * 
// FROM Friendships
// WHERE friendship_status IS true


// #3
// SELECT * 
// FROM Posts
// INNER JOIN Friendships ON Friendships.user_id = Posts.user_id
// WHERE user_id = 1 AND friendship_status IS true

// #4
// SELECT * 
// FROM Posts
// INNER JOIN Friendships ON Friendships.friend_id = Posts.user_id
// WHERE user_id = 1 AND friendship_status IS true
// ORDER BY date DESC

// #5
// SELECT *
// FROM Friendships
// WHERE user_id = 1 AND friendship_stats IS NOT true

//------------------------------------------------------------------------------

function carParkingRoof(cars, k) {
  // Write your code here
  let minLength = Infinity;
  cars.sort((a, b) => a - b);
  for (let i = 0; i <= cars.length - k; i++) {
    let kCars = cars.slice(i, i + k);
    let first = kCars[0];
    let last = kCars[kCars.length - 1];
    let length = last - first + 1;
    if (length < minLength) minLength = length;
  }
  return minLength;
}

// console.log(carParkingRoof([6, 2, 12, 7], 3));
// console.log(carParkingRoof([2, 10, 8, 17, 3], 4));

//------------------------------------------------------------------------------

function maximumContainers(scenarios) {
  // Write your code here
  let res = [];
  scenarios = scenarios.map(s => s.split(" "));
  for (let i = 0; i < scenarios.length; i++) {
    let s = scenarios[i];
    let n = parseInt(s[0]);
    let cost = parseInt(s[1]);
    let m = parseInt(s[2]);
    let max = 0;

    if (n > cost) {
      max = Math.floor(n / cost);
      n -= (n * max);
    }

    let containers = max;
    while (containers >= m) {
      let trade = Math.floor(containers / m);
      max += trade;
      containers = trade === containers / m ? trade : trade + (containers % m);
    }
    res.push(max);
  }
  return res;
}

// console.log(maximumContainers(['10 2 5', '12 4 4', '6 2 2']))

//------------------------------------------------------------------------------

function closest(s, queries) {
  // Write your code here
  let res = [];
  let indices = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!indices[char]) indices[char] = [];
    indices[char].push(i);
  }
  for (let i = 0; i < queries.length; i++) {
    let idx = queries[i];
    let char = s[idx];
    if (indices[char].length === 1) {
      res.push(-1);
    } else {
      let charIndices = indices[char];
      let charIdx = charIndices.indexOf(idx);
      if (charIndices[charIdx - 1] === undefined) {
        res.push(charIndices[charIdx + 1]);
      } else if (charIndices[charIdx + 1] === undefined) {
        res.push(charIndices[charIdx - 1]);
      } else {
        let prev = charIndices[charIdx - 1];
        let next = charIndices[charIdx + 1];
        let closer = idx - prev <= next - idx ? prev : next;
        res.push(closer);
      }
    }
  }
  return res;
}


//------------------------------------------------------------------------------
// IBM sample

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}


//------------------------------------------------------------------------------

function combineSortedLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let merged = [];

  let ele;
  while (l1.length && l2.length) {
    if (l1[0] > l2[0]) {
      ele = l2.shift();
    } else {
      ele = l1.shift();
    }
    merged.push(ele);
  }

  return merged.concat([...l1, ...l2]);
}

let l1 = [1, 5, 10];
let l2 = [2, 3, 6, 12, 15];

// console.log(combineSortedLists(l1, l2));


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


// function recursiveBoard(board, word) {
//   let firstChar = [];

//   for (let i = 0; i < word.length; i++) { // O(n)
//     let char = word[i];

//     for (let row = 0; row < board.length; row++) {  // O(n)
//       for (let col = 0; col < board[0].length; col++) {    // O(n)
//         let cell = board[row][col];

//         if (cell === char) {
//           firstChar.push([row, col]);
//         }
//       }
//     }
//   }

//   if (firstChar.length > 0) {
//     for (let i = 0; i < array.length; i++) { // O(n)
//       let pos = array[i];
//       let used = [pos];
//       return rec2Board(board, word.slice(1), pos, used);

//       // horizontal : board[0][1], board[0][-1]
//       // vertocal : board[1][0], board[-1][0]
//     }
//   } else {
//     return false;
//   }
// }

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
