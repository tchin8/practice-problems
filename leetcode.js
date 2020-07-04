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


