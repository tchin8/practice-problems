



//------------------------------------------------------------------------------





//------------------------------------------------------------------------------

// 1323. Maximum 69 Number

var maximum69Number = function (num) {
  let newNum, changed = false, numArr = `${num}`.split("");

  if (!numArr.includes('6')) {
    return num;
  } else {
    for (let i = 0; i < numArr.length; i++) {
      if (changed === false && numArr[i] === '6') {
        newNum = newNum || 0;
        newNum = newNum * 10 + 9;
        changed = true;
      } else {
        if (numArr[i] === '6') {
          newNum = newNum * 10 + 6;
        } else {
          newNum = newNum * 10 + 9;
        }
      }
    }
  }

  return newNum;
};

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
//   Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.



//------------------------------------------------------------------------------

// 1252. Cells with Odd Values in a Matrix

// n is height
// m is width

var oddCells = function (n, m, indices) {
  let matrix = [];
  for (let i = 0; i < n; i++) {     // height
    matrix[i] = [];
    for (let j = 0; j < m; j++) {    // width
      matrix[i][j] = 0;
    }
  }

  indices.forEach(pos => {
    for (let i = 0; i < m; i++) {
      matrix[pos[0]][i] += 1;
    }

    for (let j = 0; j < n; j++) {
      matrix[j][pos[1]] += 1;
    }
  })

  let count = 0;
  for (let i = 0; i < n; i++) {     // height
    for (let j = 0; j < m; j++) {    // width
      if (matrix[i][j] % 2 === 1) count += 1;
    }
  }

  return count;
};

let n = 2, m = 3, indices = [[0, 1], [1, 1]]
oddCells(n, m, indices);

//------------------------------------------------------------------------------

// 1464. Maximum Product of Two Elements in an Array

var maxProduct = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (max < (nums[i] - 1) * (nums[j] - 1)) {
        max = (nums[i] - 1) * (nums[j] - 1);
      }
    }
  }

  return max;
};



//------------------------------------------------------------------------------

// 1450. Number of Students Doing Homework at a Given Time

var busyStudent = function (startTime, endTime, queryTime) {
  let busy = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      busy += 1;
    }
  }

  return busy;
};



//------------------------------------------------------------------------------

// 1502. Can Make Arithmetic Progression From Sequence

var canMakeArithmeticProgression = function (arr) {
  arr = arr.sort(function(a, b) { return a - b });

  let diff = arr[0] - arr[1];
  let diff2 = diff;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== diff) {
      diff2 = arr[i] - arr[i + 1];
    }
  }

  return diff === diff2;
};

let arr = [3, 5, 1];
canMakeArithmeticProgression(arr);


//------------------------------------------------------------------------------

// 709. To Lower Case
// what is this q even asking for?

var toLowerCase = function (str) {
  return str.toLowerCase();
};


//------------------------------------------------------------------------------

// 938. Range Sum of BST

var rangeSumBST = function (root, L, R) {

};



//------------------------------------------------------------------------------

// 1295. Find Numbers with Even Number of Digits

var findNumbers = function (nums) {
  let count = 0;
  nums = nums.map(n => `${n}`);
  nums.forEach(n => {
    if (n.length % 2 === 0) {
      return count += 1;
    }
  });
  return count;
};

let nums = [12, 345, 2, 6, 7896];
findNumbers(nums)



//------------------------------------------------------------------------------

// 1221. Split a String in Balanced Strings

var balancedStringSplit = function (s) {
  let subs = 0;
  let count = 0;

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      count += 1;
    } else {
      count -= 1;
    }

    if (i !== 0 && count === 0) {
      subs += 1;
    }
  }

  return subs;
};

let s = "RLRRLLRLRL";
balancedStringSplit(s);

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.


//------------------------------------------------------------------------------

// 1389. Create Target Array in the Given Order

var createTargetArray = function (nums, index) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (res[index[i]] === undefined) {
      res.push(nums[i]);
    } else {
      let first = res.slice(0, index[i]);
      let second = res.slice(index[i]);
      first.push(nums[i]);
      res = first.concat(second);
    }
  }

  return res;
};

// let nums = [0, 1, 2, 3, 4];
// let index = [0, 1, 2, 2, 1];

// createTargetArray(nums, index);
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0[0]
// 1            1[0, 1]
// 2            2[0, 1, 2]
// 3            2[0, 1, 3, 2]
// 4            1[0, 4, 1, 3, 2]


//------------------------------------------------------------------------------

// 1281. Subtract the Product and Sum of Digits of an Integer

var subtractProductAndSum = function (n) {
  let prod, sum;
  let nums = [];

  while (n > 9) {
    if (n === 10) {
      nums.unshift(0);
      nums.unshift(1);
      n = 0;
    } else {
      nums.unshift(n % 10);
      n = Math.floor(n / 10);
    }
  }

  nums.unshift(n);

  // console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (i === 0) {
      prod = num;
      sum = num;
    } else {
      prod *= num;
      sum += num;
    }
  }

  return prod - sum;
};

subtractProductAndSum(234)

//------------------------------------------------------------------------------

// 1313. Decompress Run - Length Encoded List

var decompressRLElist = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      res.push(nums[i + 1]);
    }
  }

  return res;
};


//------------------------------------------------------------------------------

// 1365. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function (nums) {
  let counts = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] > nums[j]) {
          count += 1;
        }
      }
    }

    counts.push(count);
  }

  return counts;
};


//------------------------------------------------------------------------------

// 771. Jewels and Stones

var numJewelsInStones = function (J, S) {
  let count = 0;

  J.split("").forEach(j => {
    S.split("").forEach(s => {
      if (j === s) {
        count += 1;
      }
    })
  })
  return count;
};


//------------------------------------------------------------------------------

// 1486. XOR Operation in an Array

var xorOperation = function (n, start) {
  let xor;

  for (let i = 0; i < n; i++) {
    let num = start + 2 * i;

    if (i === 0) {
      xor = num;
    } else {
      xor = xor ^ num;
    }
  }

  return xor;
};


//------------------------------------------------------------------------------



// Given an array of integers, return indices of the two numbers such that they 
// add up to a specific target.
// You may assume that each input would have exactly one solution, and you may 
// not use the same element twice.

//   Example:
// Given nums = [2, 7, 11, 15], target = 9,
//   Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// twoSum([2, 7, 11, 15], 9);



//------------------------------------------------------------------------------

// 1470. Shuffle the Array

var shuffle = function (nums, n) {
  // if nums is [1,2,3,4,5,6,7,8]
  // [1, 2, 3, 4]
  let arr1 = nums.slice(0, n);
  // [5, 6, 7, 8]
  let arr2 = nums.slice(n);
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }

  return newArr;
};


//------------------------------------------------------------------------------

// 1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);

  return candies.map(kid => (kid + extraCandies >= max));
};


//------------------------------------------------------------------------------

var defangIPaddr = function (address) {
  let str = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      str += `[${address[i]}]`
    } else {
      str += address[i];
    }
  }

  return str;
};


//------------------------------------------------------------------------------

// 1342. Number of Steps to Reduce a Number to Zero

var numberOfSteps = function (num) {
  if (num === 0) return 0;
  let numSteps = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }

    numSteps += 1;
  }

  return numSteps;
};



//------------------------------------------------------------------------------


// // Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// // An input string is valid if:

// //   Open brackets must be closed by the same type of brackets.
// // Open brackets must be closed in the correct order.
// // Note that an empty string is also considered valid.

// //   Example 1:

// // Input: "()"
// // Output: true
// // Example 2:

// // Input: "()[]{}"
// // Output: true
// // Example 3:

// // Input: "(]"
// // Output: false
// // Example 4:

// // Input: "([)]"
// // Output: false
// // Example 5:

// // Input: "{[]}"
// // Output: true
// var isValid = function (s) {
//   if (s.length % 2 !== 0) return false;

//   syms = ['(', ')', '{', '}', '[', ']'];

//   let arr = {};

//   s.split("").forEach((sym, i) => {
//     arr[sym] = i;
//   });

//   for (let i = 0; i < syms.length; i += 2) {
//     if (arr[syms[i]] < arr[syms[i + 1]] && arr[syms[i]] % arr[syms[i + 1]] === 1) {
//       return true;
//     }
//   }

//   return false;
// };
// // NOT SOLVED YET



//------------------------------------------------------------------------------

// Given an array nums. We define a running sum of an array as 
// runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

//   Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].
//   Example 2:

// Input: nums = [1, 1, 1, 1, 1]
// Output: [1, 2, 3, 4, 5]
// Explanation: Running sum is obtained as follows: [1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1].
//   Example 3:

// Input: nums = [3, 1, 2, 10, 1]
// Output: [3, 4, 6, 16, 17]


// Constraints:

// 1 <= nums.length <= 1000
//   - 10 ^ 6 <= nums[i] <= 10 ^ 6
var runningSum = function (nums) {
  if (nums.length === 0) return 0;

  let newNums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i === 0) {
      newNums.push(num);
    } else {
      let newNum = newNums[newNums.length - 1] + num;
      newNums.push(newNum);
    }
  }

  return newNums;
};



//------------------------------------------------------------------------------


