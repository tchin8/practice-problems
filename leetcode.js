



//------------------------------------------------------------------------------




//------------------------------------------------------------------------------




//------------------------------------------------------------------------------




//------------------------------------------------------------------------------



//------------------------------------------------------------------------------




//------------------------------------------------------------------------------




//------------------------------------------------------------------------------




//------------------------------------------------------------------------------

// 1304. Find N Unique Integers Sum up to Zero

var sumZero = function (n) {
  if (n === 1) return [0];
  let nums = [];

  if (n % 2 === 1) {
    nums.push(0);
    n--;
  }

  let i = 1;
  while (n > 0) {
    nums.push(i);
    nums.push(-i);
    i++;
    n -= 2;
  }

  return nums;
};



//------------------------------------------------------------------------------

// 807. Max Increase to Keep City Skyline

var maxIncreaseKeepingSkyline = function (grid) {

};



//------------------------------------------------------------------------------

// 49. Group Anagrams

var groupAnagrams = function (strs) {
  let counts = [];
  let groups = [];

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let count = {};

    if (str.length === 0) {
      if (!groups.some(g => g.includes(""))) {
        groups.push([""]);
      } else {
        for (let j = 0; j < groups.length; j++) {
          let group = groups[j];
          if (group.includes("")) group.push("");
        }
      }
      continue;
    }

    for (let j = 0; j < str.length; j++) {
      let char = str[j];
      if (!count[char]) count[char] = 0;
      count[char] += 1;
    }
    
    if (counts.length === 0) {
      counts.push(count);
      groups.push([str]);
      continue;
    } 

    let match = false;
    for (let i = 0; i < counts.length; i++) {
      let c = counts[i];

      if (Object.keys(c).every(key => count[key] === c[key]) && 
        Object.keys(count).every(key => count[key] === c[key])) {
        match = true;
        groups[i].push(str);
        break;
      }
    }

    if (!match) {
      counts.push(count);
      groups.push([str]);
    }
  }

  return groups;
};

console.log(groupAnagrams(["tea", "and", "ace", "ad", "eat", "dans"]));

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]


//------------------------------------------------------------------------------




//------------------------------------------------------------------------------

// 448. Find All Numbers Disappeared in an Array

var findDisappearedNumbers = function (nums) {
  if (nums.length === 0) return [];
  let missing = [];
  
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) missing.push(i);
  }

  return missing;
};

// Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [5, 6]



//------------------------------------------------------------------------------

// Growth in 2 Dimensions

function countMax(upRight) {
  // Write your code here

}



//------------------------------------------------------------------------------

// 1534. Count Good Triplets

var countGoodTriplets = function (arr, a, b, c) {
  let triplets = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let num1 = arr[i];

    for (let j = i + 1; j < arr.length - 1; j++) {
      let num2 = arr[j];

      for (let k = j + 1; k < arr.length; k++) {
        let num3 = arr[k];

        if (Math.abs(num1 - num2) <= a && Math.abs(num2 - num3) <= b && Math.abs(num1 - num3) <= c ) {
          triplets += 1;
        };
      }
    }
  }

  return triplets;
};



//------------------------------------------------------------------------------

// 1395. Count Number of Teams

var numTeams = function (rating) {
  let teams = 0;

  for (let i = 0; i < rating.length - 2; i++) {
    let a = rating[i];

    for (let j = i + 1; j < rating.length - 1; j++) {
      let b = rating[j];

      for (let k = j + 1; k < rating.length; k++) {
        let c = rating[k];

        if ((a < b && b < c) || (a > b && b > c)) {
          teams += 1;
        };
      }
    }
  }

  return teams;
};

// let rating = [2, 5, 3, 4, 1];
// console.log(numTeams(rating));



//------------------------------------------------------------------------------

// 1347. Minimum Number of Steps to Make Two Strings Anagram

var minSteps = function (s, t) {
  let count = {}, count2 = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let char2 = t[i];

    if (!count[char]) count[char] = 0;
    if (!count2[char2]) count2[char2] = 0;
    count[char] += 1;
    count2[char2] += 1;
  }

  let diff = 0;
  let keys = Object.keys(count);

  for (let i = 0; i < keys.length; i++) {
    let key = [keys[i]]
    if (!count2[key]) {
      diff += count[key];
    } else if (count2[key] < count[key]) {
      diff += (count[key] - count2[key]);
    }
  }

  return diff;
};

// console.log(minSteps("bab","aba"));
// console.log(minSteps("leetcode", "practice"));


//------------------------------------------------------------------------------

// 1374. Generate a String With Characters That Have Odd Counts

var generateTheString = function (n) {
  let str = "";

  if (n % 2 === 1) {
    for (let i = 0; i < n; i++) {
      str += "a";
    }
  } else {
    str += "a";
    for (let i = 0; i < n - 1; i++) {
      str += "b";
    }
  }

  return str;
};



//------------------------------------------------------------------------------

// Power of Four

var isPowerOfFour = function (num) {
  while (num > 1) {
    if (num % 4 !== 0) {
      return false;
    }
    num /= 4;
  }

  return num === 1;
};


//------------------------------------------------------------------------------

// Detect Capital

var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word || word.toLowerCase() === word) return true;

  for (let i = 1; i < word.length; i++) {
    let char = word[i];
    if (char.toUpperCase() === char) return false;
  }

  return true;
};



//------------------------------------------------------------------------------

// 7. Reverse Integer

var reverse = function (x) {
  let negative = x < 0 ? true : false;
  let reversedNumStr = Math.abs(x).toString().split("").reverse().join("");
  reversedNumStr = negative ? `-${reversedNumStr}` : reversedNumStr;
  return parseInt(reversedNumStr);
};



//------------------------------------------------------------------------------

// 125. Valid Palindrome

var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  let str = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (alpha.includes(char)) str += char;
  }

  let reversed = str.split("").reverse().join("");

  return reversed === str;
};

// console.log(isPalindrome("0P"));


//------------------------------------------------------------------------------

// 334. Increasing Triplet Subsequence

var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  for (let i = 2; i < nums.length; i++) {
    let first = nums[i - 2];
    let second = nums[i - 1];
    let third = nums[i];

    if (first < second && second < third) return true;
  }

  return false;
};



//------------------------------------------------------------------------------

// 395. Longest Substring with At Least K Repeating Characters

var longestSubstring = function (s, k) {
  let count = 1;
  let longest = 1;
  let validSub = false;

  for (let i = 0; i < s.length - 1; i++) {
    let current = s[i];
    let next = s[i + 1];

    if (current === next) {
      // debugger;
      count += 1;
    } else {
      if (validSub && longest < count) {
        // debugger;
        longest = count;
      }
      count = 1;
      validSub = false;
    }

    if (count >= k) validSub = true;
  }

  return longest;
};

// console.log(longestSubstring("aaabb", 3));


//------------------------------------------------------------------------------

// 198. House Robber

var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      return nums[0];
    } else {
      return nums[1];
    }
  }

  let evens = [];
  let odds = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i % 2 === 0 || i === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  let evensSum = evens.reduce((a, b) => a + b);
  let oddsSum = odds.reduce((a, b) => a + b);

  if (evensSum > oddsSum) {
    return evensSum;
  } else {
    return oddsSum;
  }
};



//------------------------------------------------------------------------------

// 326. Power of Three

var isPowerOfThree = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;

  if (n / 3 !== Math.floor(n / 3)) return false;
  
  while (n !== 1) {
    if (n % 3 !== 0) return false;
    n /= 3;
  }

  return n === 1;
};

// console.log(isPowerOfThree(30371328));



//------------------------------------------------------------------------------

// 66. Plus One

var plusOne = function (digits) {
  let numStr = digits.join("");
  let num = parseInt(numStr) + 1;
  return `${num}`.split("").map(n => parseInt(n));
};

// // console.log(plusOne([1, 2, 3]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));


//------------------------------------------------------------------------------

// 73. Set Matrix Zeroes

var setZeroes = function (matrix) {
  let rowIdx = [];
  let colIdx = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    if (row.includes(0)) rowIdx.push(i);
    for (let j = 0; j < matrix[0].length; j++) {
      let col = matrix[i][j];
      if (col === 0) colIdx.push(j);
    }
  }

  for (let i = 0; i < rowIdx.length; i++) {
    let row = rowIdx[i];
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }
  }

  for (let j = 0; j < colIdx.length; j++) {
    let col = colIdx[j];
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
};

// let matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ];

// setZeroes(matrix);


//------------------------------------------------------------------------------

// 240. Search a 2D Matrix II

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(target)) return true;
  }

  return false;
};



//------------------------------------------------------------------------------

// 162. Find Peak Element

var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  } else if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      return 0;
    } else {
      return 1;
    }
  }

  for (let i = 1; i < nums.length - 1; i++) {
    let prev = nums[i - 1];
    let next = nums[i + 1];
    let current = nums[i];
    if (current > prev && current > next) return i;
  }

  return nums.indexOf(Math.max(...nums));
};



//------------------------------------------------------------------------------

// 53. Maximum Subarray

var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let sub = nums.slice(i, j);
      let sum = sub.reduce((a, b) => a + b);
      if (sum > maxSum) maxSum = sum;
    }
  }

  return maxSum;
};



//------------------------------------------------------------------------------

// 121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sell = prices[j];

      if (sell - buy > max) max = sell - buy;
    }
  }

  return max;
};



//------------------------------------------------------------------------------

// 238. Product of Array Except Self

var productExceptSelf = function (nums) {
  let products = [];

  for (let i = 0; i < nums.length; i++) {
    let first = nums.slice(0, i);
    let second = nums.slice(i + 1);
    let sub = first.concat(second);
    let product = sub.reduce((a, b) => a * b);
    products.push(product);
  }

  return products;
};



//------------------------------------------------------------------------------

// 347. Top K Frequent Elements

var topKFrequent = function (nums, k) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!count[num]) count[num] = 0;
    count[num] += 1;
  }

  return Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, k);
};



//------------------------------------------------------------------------------

// 454. 4Sum II

var fourSumCount = function (A, B, C, D) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let a = A[i];
    for (let j = 0; j < B.length; j++) {
      let b = B[j];
      for (let k = 0; k < C.length; k++) {
        let c = C[k];
        for (let l = 0; l < D.length; l++) {
          let d = D[l];
          if (a + b + c + d === 0) count += 1;
        }
      }
    }
  }
  return count;
};


//------------------------------------------------------------------------------

// 268. Missing Number

var missingNumber = function (nums) {
  if (nums.length === 1) {
    if (nums[0] === 0) {
      return nums[0] + 1;
    } else {
      return nums[0] - 1;
    }
  };

  let max = Math.max(...nums);
  let min = Math.min(...nums);

  for (let i = min; i < max; i++) {
    if (!nums.includes(i)) return i;
  }

  if (min === 0) {
    return max + 1;
  } else {
    return min - 1;
  }
};



//------------------------------------------------------------------------------

// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {  
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[n]) {
      n++;
      nums[n] = nums[i];
    }
  }

  let length = nums.length;
  if (n + 1 !== length) {
    for (let i = 0; i < (length - (n + 1)); i++) {
      nums.pop();
    }
  }

  console.log(nums);
  return n + 1;
};

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([1, 1, 2, 3]));



//------------------------------------------------------------------------------

// 387. First Unique Character in a String

var firstUniqChar = function (s) {
  if (s.length === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if ((!s.slice(i + 1).includes(char) && i !== s.length - 1) && 
      (!s.slice(0, i).includes(char)) || 
      (i === s.length - 1 && !s.slice(0, i).includes(char))) return i;
  }
  return -1;
};



//------------------------------------------------------------------------------

// 171. Excel Sheet Column Number

var titleToNumber = function (s) {
  // let num = 0;
  // let alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

  // if (s.length === 1) return alpha.indexOf(s) + 1;

  // for (let i = 0; i < s.length; i++) {
  //   let char = s[i];
  //   let n = alpha.indexOf(char) + 1;

  //   if (i !== s.length - 1) {
  //     if (num === 0) num = 1;
  //     num *= (n * 26);
  //   } else {
  //     num += n;
  //   }
  // }

  // return num;
};



//------------------------------------------------------------------------------

// 13. Roman to Integer

// I can be placed before V(5) and X(10) to make 4 and 9.
// X can be placed before L(50) and C(100) to make 40 and 90.
// C can be placed before D(500) and M(1000) to make 400 and 900.

var romanToInt = function (s) {
  let num = 0;

  let symbols = {
    "I": 1,
    "V": 5, 
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  for (let i = 0; i < s.length; i++) {
    let prev = s[i - 1];
    let current = s[i];

    num += symbols[current];
    if (prev) {
      if (prev === "I") {
        if (current === "V" || current === "X") {
          num -= 2;
        } 
      } else if (prev === "X") {
        if (current === "L" || current === "C") {
          num -= 20;
        } 
      } else if (prev === "C") {
        if (current === "D" || current === "M") {
          num -= 200;
        }
      }
    }
  }

  return num;
};

romanToInt("IV");



//------------------------------------------------------------------------------

// 217. Contains Duplicate

var containsDuplicate = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!count[num]) count[num] = 0;
    count[num] += 1;
    if (count[num] > 1) return true;
  }

  return false;
};



//------------------------------------------------------------------------------

// 242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let count = {};
  let count2 = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!count[char]) count[char] = 0;
    count[char] += 1;

    let char2 = t[i];
    if (!count2[char2]) count2[char2] = 0;
    count2[char2] += 1;
  }

  return Object.keys(count).every(key => count[key] === count2[key]);
};



//------------------------------------------------------------------------------

// 283. Move Zeroes

var moveZeroes = function (nums) {
  let nonZeros = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nonZeros.push(nums[i]); 
  }

  for (let i = 0; i < nums.length; i++) {
    if (nonZeros[i]) {
      nums[i] = nonZeros[i];
    } else {
      nums[i] = 0;
    }
  }

  return nums;
};

// moveZeroes([0, 1, 0, 3, 12]);



//------------------------------------------------------------------------------

// 169. Majority Element

var majorityElement = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    if (!count[ele]) count[ele] = 0;
    count[ele] += 1;

    if (count[ele] > nums.length / 2) return ele;
  }
};


//------------------------------------------------------------------------------

// 78. Subsets

var subsets = function (nums) {
  // let subs = [[]];
  // for (let i = 0; i < nums.length; i++) {
  //   let a = nums[i];
  //   for (let j = i + 1; j <= nums.length; j++) {
  //     let b = nums[j]
  //     let sub = nums.slice(i, j);
  //     if (!subs.includes(sub)) subs.push(sub);
  //     if (!subs.includes([a, b])) subs.push([a, b]);
  //   }
  // }

  // return subs;
};


//------------------------------------------------------------------------------

// 412. Fizz Buzz

var fizzBuzz = function (n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      arr.push("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else {
      arr.push(i.toString());
    }
  }

  return arr;
};



//------------------------------------------------------------------------------

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


//------------------------------------------------------------------------------

var reverseList = function (head) {
  let currentNode = head;
  let prevNode = null;

  while (currentNode !== null) {
    let next = currentNode.next;    // 2
    currentNode.next = prevNode;    // null
    prevNode = currentNode;     // 1 is prev node, changing currentnode to 2
    currentNode = next;
  }

  return prevNode;
};



//------------------------------------------------------------------------------

                                    // 104. Maximum Depth of Binary Tree

                                    var maxDepth = function (root) {
                                      if (root === null) return 0;

                                      let leftTree = maxDepth(root.left);
                                      let rightTree = maxDepth(root.right);

                                      if (leftTree > rightTree) {
                                        return leftTree + 1;
                                      } else {
                                        return rightTree + 1;
                                      }
                                    };


//------------------------------------------------------------------------------

// 136. Single Number

var singleNumber = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!count[num]) count[num] = 0;
    count[num] += 1;
  }

  return Object.keys(count).filter(key => count[key] === 1);
};


//------------------------------------------------------------------------------

// 1282. Group the People Given the Group Size They Belong To

var groupThePeople = function (groupSizes) {
  let grouped = {};
  for (let i = 0; i < groupSizes.length; i++) {
    let groupSize = groupSizes[i];
    if (!grouped[groupSize]) {
      grouped[groupSize] = [];
    }
    if (groupSize === 1) {
      grouped[groupSize].push([i]);
    } else {
      let full = grouped[groupSize].every(group => group.length === groupSize);
      if (full) {
        grouped[groupSize].push([i]);
      } else {
        grouped[groupSize][grouped[groupSize].length - 1].push(i);
      }
    }
  }
  let keys = Object.keys(grouped);
  let people = []; 
  for (let i = 0; i < keys.length; i++) {
    let group = grouped[keys[i]];
    people = people.concat(group);
  }
  return people;
};

// groupThePeople([3, 3, 3, 3, 3, 1, 3]);



//------------------------------------------------------------------------------

// 1528. Shuffle String

var restoreString = function (s, indices) {
  let arr = new Array(s.length);
  for (let i = 0; i < indices.length; i++) {
    let idx = indices[i];
    arr[idx] = s[i];
  }

  return arr.join("");
};



//------------------------------------------------------------------------------

// 1122. Relative Sort Array

var relativeSortArray = function (arr1, arr2) {

};

// Input: 
// arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
// arr2 = [2, 1, 4, 3, 9, 6]
// Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]



//------------------------------------------------------------------------------

// 344. Reverse String
// O(1) space

var reverseString = function (s) {
  s.reverse();
};



//------------------------------------------------------------------------------

// 1047. Remove All Adjacent Duplicates In String

var removeDuplicates = function (S) {
  let duplicates = false;

  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      duplicates = true;
    }
  }

  if (!duplicates) return S;

  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      return removeDuplicates(S.slice(0, i) + S.slice(i + 1));
    }
  }
};


//------------------------------------------------------------------------------

// 922. Sort Array By Parity II

var sortArrayByParityII = function (A) {
  let newArr = [];
  let evens = A.filter(n => n % 2 === 0);
  let odds = A.filter(n => n % 2 !== 0);

  while (evens.length > 0 && odds.length > 0) {
    newArr.push(evens.pop());
    newArr.push(odds.pop());
  }

  return newArr;
};



//------------------------------------------------------------------------------

// 557. Reverse Words in a String III

var reverseWords = function (s) {
  let newWords = s.split(" ").map(word => {
    return word.split("").reverse().join("");
  });

  return newWords.join(" ");
};


//------------------------------------------------------------------------------

// 1491. Average Salary Excluding the Minimum and Maximum Salary

var average = function (salary) {
  let minMaxIdx = [];
  let sum = 0;

  minMaxIdx.push(salary.indexOf(Math.min(...salary)));
  minMaxIdx.push(salary.indexOf(Math.max(...salary)));

  salary.forEach((s, i) => {
    if (!minMaxIdx.includes(i)) sum += s;
  });

  return sum / (salary.length - 2);
};



//------------------------------------------------------------------------------

// 1207. Unique Number of Occurrences

var uniqueOccurrences = function (arr) {
  let counts = {}, countsCounts = {};

  arr.forEach(num => {
    if (!counts[num]) counts[num] = 0;
    counts[num] += 1;
  });

  let v = Object.values(counts);

  v.forEach(val => {
    if (!countsCounts[val]) countsCounts[val] = 0;
    countsCounts[val] += 1;
  });

  return Object.values(countsCounts).every(n => n === 1);
};



//------------------------------------------------------------------------------

// 852. Peak Index in a Mountain Array

var peakIndexInMountainArray = function (A) {
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) return i;
  }
};


//------------------------------------------------------------------------------

// 561. Array Partition I

var luckyNumbers = function (matrix) {
  let min = [], max = [], transposed = [], lucky = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    min.push(Math.min(...matrix[i]));
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    transposed.push(row);
  }

  for (let i = 0; i < transposed[0].length; i++) {
    max.push(Math.max(...transposed[i]));
  }

  for (let i = 0; i < min.length; i++) {
    if (max.includes(min[i]) && !lucky.includes(min[i])) lucky.push(min[i]);
  }

  return lucky;
};

// let matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]];
// arrayPairSum(matrix);

//------------------------------------------------------------------------------

// 977. Squares of a Sorted Array

var sortedSquares = function (A) {
  let squares = [];
  A.forEach(num => squares.push(num ** 2));

  squares.sort(function(a, b) { return a - b });    // ascending
  return squares;
};

// let A = [-4, -1, 0, 3, 10];
// sortedSquares(A);


//------------------------------------------------------------------------------

// 961. N - Repeated Element in Size 2N Array

var repeatedNTimes = function (A) {
  let count = {};

  A.forEach(num => {
    if (!count[num]) {
      count[num] = 0;
    } 
    count[num] += 1;
  });

  let times = A.length / 2;

  return Object.keys(count).find(key => count[key] === times);
};



//------------------------------------------------------------------------------

// 905. Sort Array By Parity

var sortArrayByParity = function (A) {
  if (A.every(num => num % 2 === 1)) {
    return A;
  } else {
    let e = A.filter(num => num % 2 === 0);
    let o = A.filter(num => num % 2 !== 0)
    return e.concat(o);
  }
};


//------------------------------------------------------------------------------

// 728. Self Dividing Numbers

var selfDividingNumbers = function (left, right) {
  let nums = [];

  let i = left;
  while (i <= right) {
    let num = `${i}`;
    let selfDividing = false;

    if (num.length === 1) {
      selfDividing = true;
    } else if (num.includes('0')) {
      selfDividing = false;
    } else {
      selfDividing = num.split("").every(n => i % parseInt(n) === 0);
    }

    if (selfDividing) {
      nums.push(i);
    }

    i++
  }

  return nums;
};

// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]


//------------------------------------------------------------------------------

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.Ignore capitalization when determining if a character is a duplicate.

//   Examples
// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))((" 

function duplicateEncode(word) {
  word = word.toLowerCase();
  let count = {};
  let newStr = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  for (let j = 0; j < word.length; j++) {
    let char = word[j];
    if (count[char] === 1) {
      newStr += "(";
    } else {
      newStr += ")";
    }
  }

  return newStr;
}

// let word = "Success";
// duplicateEncode(word);

//------------------------------------------------------------------------------

function order(words) {
  if (words.length === 0) return "";
  let nums = "123456789";
  words = words.split(" ");
  let sorted = new Array(words.length);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (nums.includes(char)) {
        sorted[parseInt(char) - 1] = word;
      }
    }
  }

  return sorted.join(" ");
}

// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""

let words = "is2 Thi1s T4est 3a";
order(words);


//------------------------------------------------------------------------------

// 1351. Count Negative Numbers in a Sorted Matrix

var countNegatives = function (grid) {
  let negs = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] < 0) negs++;
    }
  }

  return negs;
};


//------------------------------------------------------------------------------

// 804. Unique Morse Code Words

var uniqueMorseRepresentations = function (words) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  let codes = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let code = "";
    
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      let idx = alpha.indexOf(char);
      code += morse[idx];
    }

    if (!codes.includes(code)) codes.push(code);
  }

  return codes.length;
};


//------------------------------------------------------------------------------

// 1512. Number of Good Pairs

var numIdenticalPairs = function (nums) {
  let good = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) good++;
    }
  }
  return good;
};



//------------------------------------------------------------------------------

// 1309. Decrypt String from Alphabet to Integer Mapping

var freqAlphabets = function (s) {
  let alpha = " abcdefghijklmnopqrstuvwxyz";

  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (s[i + 2] === '#') {
      let num = s[i] + s[i + 1];
      newStr += alpha[parseInt(num)];
    } else if (char === '#' || s[i + 1] === '#') {
      continue;
    } else {
      newStr += alpha[parseInt(char)];
    }
  }
  return newStr;
};

// let s = "10#11#12"
// freqAlphabets(s);
// Output: "jkab"


//------------------------------------------------------------------------------

// 1021. Remove Outermost Parentheses     // UNSOLVED

var removeOuterParentheses = function (S) {
  let outer = false, count = 0, newS = "", idx = [];
  S = S.split("");

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    }

    if (outer === false && count === 1) {
      idx.push(i);
    } else if (count > 1) {
      outer = true;
    }

    if (outer === true && count === 0) {
      idx.push(i);
      outer = false;
    }
  }

  for (let i = 0; i < S.length; i++) {
    if (!idx.includes(i)) {
      newS += S[i];
    }
  }  

  return newS;
};



//------------------------------------------------------------------------------

// 1323. Maximum 69 Number

var maximum69Number = function (num) {
  let newNum = 0, changed = false, numArr = `${num}`.split("");

  if (!numArr.includes('6')) {
    return num;
  } else {
    for (let i = 0; i < numArr.length; i++) {
      if (changed === false && numArr[i] === '6') {
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

// let nums = [12, 345, 2, 6, 7896];
// findNumbers(nums)



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

// let s = "RLRRLLRLRL";
// balancedStringSplit(s);

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


