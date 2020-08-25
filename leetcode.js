// const _ = require('lodash');

// for (let i = 50; i > 0; i--) {
//   console.log("//------------------------------------------------------------------------------");
//   console.log(`//  (${i}/50)`)
// }



//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// 455. Assign Cookies

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
    if (g[i] <= s[j]) {
      count++;
    } else {
      i--;
    }
  }
  return count;
};

// console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
// console.log(findContentChildren([262, 437, 433, 102, 438, 346, 131, 160, 281, 
//   34, 219, 373, 466, 275, 51, 118, 209, 32, 108, 57, 385, 514, 439, 73, 271, 
//   442, 366, 515, 284, 425, 491, 466, 322, 34, 484, 231, 450, 355, 106, 279, 496, 
//   312, 96, 461, 446, 422, 143, 98, 444, 461, 142, 234, 416, 45, 271, 344, 446, 
//   364, 216, 16, 431, 370, 120, 463, 377, 106, 113, 406, 406, 481, 304, 41, 2, 
//   174, 81, 220, 158, 104, 119, 95, 479, 323, 145, 205, 218, 482, 345, 324, 253, 
//   368, 214, 379, 343, 375, 134, 145, 268, 56, 206], 
//   [149, 79, 388, 251, 417, 82, 233, 377, 95, 309, 418, 400, 501, 349, 348, 400, 
//     461, 495, 104, 330, 155, 483, 334, 436, 512, 232, 511, 40, 343, 334, 307, 
//     56, 164, 276, 399, 337, 59, 440, 3, 458, 417, 291, 354, 419, 516, 4, 370, 
//     106, 469, 254, 274, 163, 345, 513, 130, 292, 330, 198, 142, 95, 18, 295, 
//     126, 131, 339, 171, 347, 199, 244, 428, 383, 43, 315, 353, 91, 289, 466, 
//     178, 425, 112, 420, 85, 159, 360, 241, 300, 295, 285, 310, 76, 69, 297, 
//     155, 416, 333, 416, 226, 262, 63, 445, 77, 151, 368, 406, 171, 13, 198, 30, 
//     446, 142, 329, 245, 505, 238, 352, 113, 485, 296, 337, 507, 91, 437, 366, 
//     511, 414, 46, 78, 399, 283, 106, 202, 494, 380, 479, 522, 479, 438, 21, 130, 
//     293, 422, 440, 71, 321, 446, 358, 39, 447, 427, 6, 33, 429, 324, 76, 396, 
//     444, 519, 159, 45, 403, 243, 251, 373, 251, 23, 140, 7, 356, 194, 499, 276, 
//     251, 311, 10, 147, 30, 276, 430, 151, 519, 36, 354, 162, 451, 524, 312, 447, 
//     77, 170, 428, 23, 283, 249, 466, 39, 58, 424, 68, 481, 2, 173, 179, 382, 
//     334, 430, 84, 151, 293, 95, 522, 358, 505, 63, 524, 143, 119, 325, 401, 6, 
//     361, 284, 418, 169, 256, 221, 330, 23, 72, 185, 376, 515, 84, 319, 27, 66, 
//     497]));

//------------------------------------------------------------------------------
// 415. Add Strings

var addStrings = function (num1, num2) {
  let newNum = [];
  let extra = 0;
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  for (let i = 0; i < num1.length || i < num2.length; i++) {
    let ele1 = num1[i] === undefined ? 0 : parseInt(num1[i]);
    let ele2 = num2[i] === undefined ? 0 : parseInt(num2[i]);
    let sum = ele1 + ele2 + extra;
    debugger;
    if (sum > 9) {
      newNum.push(sum % 10);
      extra = Math.floor(sum / 10);
    } else {
      newNum.push(sum);
      extra = 0;
      debugger;
    }
  }
  if (extra) newNum.push(extra);
  return newNum.reverse().map(n => n.toString()).join("");
};

// console.log(addStrings("0", "0"));
// console.log(addStrings("408", "5"));

//------------------------------------------------------------------------------
// 345. Reverse Vowels of a String

var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  let chars = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (vowels.includes(char)) chars += char;
  }
  chars = chars.split("");
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (vowels.includes(char)) s[i] = chars.pop();
  }
  return s.join("");
};


//------------------------------------------------------------------------------
// 459. Repeated Substring Pattern

var repeatedSubstringPattern = function (s) {
  let copy = s.slice();

  let i = 1; sub = copy.slice(0, i), copy = copy.slice(i);

  while (i <= s.length / 2) {
    // debugger;
    if (sub === copy) return true;
    if (copy.startsWith(sub)) {
      // debugger;
      copy = copy.slice(i);
    } else {
      i++;
      copy = s;
      sub = copy.slice(0, i);
      copy = copy.slice(i);
      // debugger;
    }
  }

  return false;
};


// console.log(repeatedSubstringPattern("abab"));    // true
// console.log(repeatedSubstringPattern("aba"));    // false
// console.log(repeatedSubstringPattern("abcabcabcabc"));    // true

//------------------------------------------------------------------------------
// 628. Maximum Product of Three Numbers

var maximumProduct = function (nums) {
  three = nums.sort((a, b) => b - a).slice(0, 3);
  return Math.max(three[0] * three[1] * three[2], three[0] * nums[nums.length-1] * nums[nums.length-2]);
};

//------------------------------------------------------------------------------
// 231. Power of Two

var isPowerOfTwo = function (n) {
  if (n === 1) return true;

  while (n > 1) {
    n /= 2;
  }

  return n === 1;
};

//------------------------------------------------------------------------------
// 392. Is Subsequence

var isSubsequence = function (s, t) {
  t = t.split("").reverse();
  s = s.split("");

  while (s.length) {
    let char = s.pop();
    let idx = t.indexOf(char);
    if (idx === -1) return false;
    t = t.slice(idx + 1);
  }
  return s.length === 0;
};

//------------------------------------------------------------------------------
// 409. Longest Palindrome

var longestPalindrome = function (s) {
  const count = {};
  let sum = 0;
  let keys;

  // collection of characters and their occurrences
  for (let i = 0; i < s.length; i++) {
    if (!count[s.charAt(i)]) count[s.charAt(i)] = 1;
    else count[s.charAt(i)]++;
  }

  keys = Object.keys(count);

  // palindromes have characters in pairs and one solo character
  for (const k of keys) {
    if (count[k] % 2 !== 0) sum = sum + count[k] - 1;
    else sum += count[k];
  }
  for (const k of keys) {
    if (count[k] % 2 === 0) continue;
    sum += 1;
    break;
  }

  return sum;
};

// var longestPalindrome = function (s) {
//   if (s.length <= 1) return s.length;
//   let count = {};
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i].toLowerCase();
//     if (!count[char]) count[char] = 0;
//     count[char]++;
//   }
//   let evens = Object.values(count).filter(c => c % 2 === 0);
//   if (evens.length === 0) {
//     evens = 0;
//   } else if (evens.length === 1) {
//     evens = evens[0];
//   } else {
//     evens = evens.reduce((a, b) => a + b);
//   }
//   let odds = Object.values(count).filter(c => c % 2 === 1);
//   if (odds.length === 0) {
//     odds = 0;
//   } else if (odds.length === 1) {
//     odds = odds[0];
//   } else {
//     odds = odds.filter(o => o !== 1);
//     let length = odds.length;
//     odds = odds.reduce((a, b) => a + b);
//     odds = odds - length + 1;
//   }
//   return evens + odds;
// };

// let s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// console.log(longestPalindrome(s))

//------------------------------------------------------------------------------
// 724. Find Pivot Index

var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i);
    let right = nums.slice(i + 1);
    let leftSum, rightSum;
    if (left.length === 0) {
      leftSum = 0;
    } else {
      leftSum = left.length === 1 ? left[0] : left.reduce((a, b) => a + b);
    }
    if (right.length === 0) {
      rightSum = 0;
    } else {
      rightSum = right.length === 1 ? right[0] : right.reduce((a, b) => a + b);
    }
    if (leftSum === rightSum) return i;
  }
  return -1;
};

//------------------------------------------------------------------------------
// 747. Largest Number At Least Twice of Others

var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  let copy = nums.slice();
  copy.sort((a, b) => b - a);
  if (copy[0] >= copy[1] * 2) {
    return nums.indexOf(copy[0]);
  } else {
    return -1;
  }
};

//------------------------------------------------------------------------------
//  (50/50) 989. Add to Array-Form of Integer

var addToArrayForm = function (A, K) {
  for (let i = A.length - 1; i >= 0; i--) {
    let num = A[i];
    num += (K % 10);
    K = (K - (K % 10)) / 10;
    if (num > 9) {
      K += Math.floor(num / 10);
      num = num % 10;
    }
    A[i] = num;
    if (K === 0) return A;
  }
  if (K) {
    K = `${K}`.split("").map(n => parseInt(n));
    A = K.concat(A);
  };
  return A;
};

// console.log(addToArrayForm([2, 7, 4], 181));
// console.log(addToArrayForm([0], 23));
// console.log(addToArrayForm([0], 10000));

//------------------------------------------------------------------------------
//  (49/50) 1013. Partition Array Into Three Parts With Equal Sum

var canThreePartsEqualSum = function (A) {
  if (A.length < 3) return false;
  let sum = A.reduce((a, b) => a + b);
  if (sum % 3 !== 0) return false;

  let t = sum / 3;
  let cur = 0;
  let count = 0;
  for (const a of A) {
    cur += a;
    if (cur === t) {
      count++;
      cur = 0;
    }
    if (count > 3) {
      if (t === 0) {
        count--;
      } else {
        return false;
      }
    }
  }
  return count === 3;
};

// console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));

//------------------------------------------------------------------------------
//  (48/50) 819. Most Common Word

var mostCommonWord = function (paragraph, banned) {
  let ban = new Set(banned);
  let arr = paragraph.replace(/[!\?\'\,\;\.']/g, ' ').toLowerCase().split(' ');
  let counts = arr.reduce((obj, word) => {
    if (!ban.has(word) && word.length > 0) { obj[word] = ~~obj[word] + 1 }
    return obj;
  }, {});
  return Object.keys(counts).reduce((maxKey, key) => {
    return counts[key] > counts[maxKey] ? key : maxKey;
  }, Object.keys(counts)[0]);
};

// var mostCommonWord = function (paragraph, banned) {
//   if (paragraph.length === 0) return "";
//   let alpha = "abcdefghijklmnopqrstuvwxyz", count = {}, max, str;
//   paragraph = paragraph.toLowerCase().split(" ");
//   for (let i = 0; i < paragraph.length; i++) {
//     let word = paragraph[i];
//     if (!alpha.includes(word[word.length - 1])) word = word.slice(0, word.length - 1);
//     if (banned.includes(word)) continue;
//     if (!count[word]) count[word] = 0;
//     count[word]++;
//     if (!max) max = count[word];
//     if (!str) str = word;
//     if (count[word] > max) {
//       max = count[word];
//       str = word;
//     }
//   }
//   return str;
// };

//------------------------------------------------------------------------------
//  (47/50) 860. Lemonade Change

var lemonadeChange = function (bills) {
  let count = {};
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    if (bill === 10) {
      if (!count['5']) return false;
      count['5']--;
    } else if (bill === 20) {
      if (count['10'] >= 1 && count['5'] >= 1) {
        count['10']--;
        count['5'] -= 1;
      } else if (count['5'] >= 3) {
        count['5'] -= 3;
      } else {
        return false;
      }
    }
    if (!count[bill]) count[bill] = 0;
    count[bill]++;
  }
  return true;
};

// console.log(lemonadeChange([5, 5, 10, 10, 5, 20, 5, 10, 5, 5]));

//------------------------------------------------------------------------------
//  (46/50) 953. Verifying an Alien Dictionary

var isAlienSorted = function (words, order) {
  if (words.length === 1) return true;

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    if (w1 === w2) continue;
    
    if (w1.startsWith(w2)) return false;

    let j = 0;
    while (j < w1.length && j < w2.length) {
      let idx1 = order.indexOf(w1[j]);
      let idx2 = order.indexOf(w2[j]);
      if (idx1 < idx2) {
        break;
      } else if (idx1 > idx2) {
        return false;
      }
      j++;
    }
  }
  return true;
};

//------------------------------------------------------------------------------
//  (45/50) 1010. Pairs of Songs With Total Durations Divisible by 60

var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) count++;
    }
  }
  return count;
};

//------------------------------------------------------------------------------
//  (44/50) 1037. Valid Boomerang

var isBoomerang = function (points) {
  if (points.every(p => points[0][0] === p[0]) || 
    points.every(p => points[0][1] === p[1])) return false;

  for (let i = 0; i < points.length - 1; i++) {
    let p = points[i];
    let next = points[i + 1];
    if (p[0] === next[0] && p[1] === next[1]) return false;
  }

  if (points[0][0] === points[2][0] && points[0][1] === points[2][1]) return false;

  let x1 = points[0][0], y1 = points[0][1], slope = (points[1][1] - y1) / (points[1][0] - x1);

  for (let i = 2; i < points.length; i++) {
    if ((points[i][1] - y1) === slope * (points[i][0] - x1)) return false;
  }
  return true; 
};

// console.log(isBoomerang([[0, 1], [0, 1], [2, 1]]))

//------------------------------------------------------------------------------
//  (43/50) 997. Find the Town Judge

var findJudge = function (N, trust) {
  let judge;
  for (let i = 1; i <= N; i++) {
    if (!trust.some(p => p[0] === i)) judge = i;
  }

  for (let i = 1; i <= N; i++) {
    if (i !== judge) {
      if (!trust.some(p => p[0] === i && p[1] === judge)) return -1;
    }
  }
  return judge;
};

//------------------------------------------------------------------------------
//  (42/50) 1005. Maximize Sum Of Array After K Negations

var largestSumAfterKNegations = function (A, K) {
  if (A.length === 0) return 0;
  A.sort((a, b) => a - b);
  while (K > 0) {
    A[0] = -A[0];
    A.sort((a, b) => a - b);
    K--;
  }
  if (A.length === 1) return A[0];
  return A.reduce((a, b) => a + b);
};

//------------------------------------------------------------------------------
//  (41/50) 1232. Check If It Is a Straight Line

var checkStraightLine = function(coordinates) {
  if (coordinates.every(c => coordinates[0][0] === c[0]) ||
    coordinates.every(c => coordinates[0][1] === c[1]) ||
    coordinates.length <= 2) return true;
    
  // slope is diff between 1st and 2nd point
  let x1 = coordinates[0][0], y1 = coordinates[0][1], slope = (coordinates[1][1] - y1) / (coordinates[1][0] - x1);
  
  // slope for all other points should be same as first 2
  for(let i = 2; i < coordinates.length;i++){ 
      if((coordinates[i][1] - y1)  !== slope * (coordinates[i][0]  - x1)) return false;
  }
  return true; 
};

// let pos = [[0, 0], [0, 5], [5, 0], [1337, 0], [0, 1337]];
// let pos = [[0, 1], [1, 3], [-4, -7], [5, 11]];
// console.log(checkStraightLine(pos));

//------------------------------------------------------------------------------
//  (40/50) 1071. Greatest Common Divisor of Strings

// INCOMPLETEEE!!!!

// var gcdOfStrings = function (str1, str2) {
//   let str = "";
  
//   while (str1.length && str2.length) {
//     if (str1[0] === str2[0]) {
//       str += str1[0];
//       str1 = str1.slice(1);
//       str2 = str2.slice(1);
//     } else {
//       return "";
//     }
//   }

//   let rem;
//   if (str1.length > 0) {
//     rem = str1;
//   } else {
//     rem = str2;
//   }
// };

//------------------------------------------------------------------------------
//  (39/50) 1089. Duplicate Zeros

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
}

//------------------------------------------------------------------------------
//  (38/50) 1556. Thousand Separator

var thousandSeparator = function (n) {
  if (n.length < 4) return n.toString();

  let str = "";
  n = n.toString();
  for (let i = n.length - 1; i >= 0; i--) {
    let num = n[i];
    str = num + str;
    if (i !== 0 && (n.length - i) % 3 === 0) {
      str = "." + str;
    } 
  }
  return str;
};

// console.log(thousandSeparator(0));


//------------------------------------------------------------------------------
//  (37/50) 112. Path Sum

var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === sum ? true : false;
  }
  let remain = sum - root.val;
  return hasPathSum(root.left, remain) || hasPathSum(root.right, remain);
};

//------------------------------------------------------------------------------
//  (36/50) 925. Long Pressed Name

var isLongPressedName = function (name, typed) {
  if (name[name.length - 1] !== typed[typed.length - 1] || 
    name[0] !== typed[0] || name.length > typed.length) return false;

  let i = 0, j = 0;
  while (i < name.length && j < typed.length) {
    let lastSame = name.charAt(i), count = 1;
    i++;
    while (i < name.length && name.charAt(i) === lastSame) {
      count++;
      i++;
    }
    while (j < typed.length && typed.charAt(j) === lastSame) {
      count--;
      j++;
    }
    if (count > 0) return false;
  }
  return i === name.length;
};

// var isLongPressedName = function (name, typed) {
//   if (name[name.length - 1] !== typed[typed.length - 1]) return false;
//   if (name[0] !== typed[0]) return false;
//   let count = {}, countTyped = {};
//   for (let i = 0; i < name.length; i++) {
//     let char = name[i];
//     if (!count[char]) count[char] = 0;
//     count[char]++;
//   }
//   for (let i = 0; i < typed.length; i++) {
//     let char = typed[i];
//     if (!countTyped[char]) countTyped[char] = 0;
//     countTyped[char]++;
//   }
//   return Object.keys(count).every(k => count[k] <= countTyped[k]);
// };

//------------------------------------------------------------------------------
//  (35/50) 88. Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
  nums1 = nums1.slice(0, m);
  nums1 = nums1.concat(nums2);
  return nums1.sort((a, b) => a - b);
};

// let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
// console.log(merge(nums1, m, nums2, n))

//------------------------------------------------------------------------------
//  (34/50)

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let pairs = {};
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    let val = t[i];
    if (!pairs[key] && !Object.values(pairs).includes(val)) {
      pairs[key] = val;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let k = s[i];
    str += pairs[k];
  }

  return str === t;
};

//------------------------------------------------------------------------------
//  (33/50) 219. Contains Duplicate II

var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let num1 = nums[i];
      let num2 = nums[j];
      if (num1 === num2 && Math.abs(i - j) <= k) return true;
    }
  }
  return false;
};

//------------------------------------------------------------------------------
//  (32/50)434. Number of Segments in a String

var countSegments = function (s) {
  if (s.length === 0) return "";
  let count = 0;
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (s[i].length > 0) count++;
  }
  return count;
};


//------------------------------------------------------------------------------
//  (31/50) 414. Third Maximum Number

// var thirdMax = function (nums) {
//   nums = Array.from(new Set(nums));
//   const len = nums.length;
//   if (len <= 2) {
//     return Math.max(...nums);
//   }
//   if (len === 3) {
//     return Math.min(...nums);
//   }
//   nums = nums.sort((a, b) => { return b - a; })
//   return nums[2];
// };

// var thirdMax = function (nums) {
//   let max = [];
//   nums.sort((a, b) => b - a);
//   while (max.length < 3 || nums.length === 0) {
//     let num = nums.shift();
//     if (!max.includes(num)) max.push(num);
//   }
//   return max[max.length - 1];
// };


//------------------------------------------------------------------------------
//  (30/50) 290. Word Pattern

var wordPattern = function (pattern, str) {
  if (pattern === str && str.length > 1) return false;
  if (pattern === str && str.length === 1) return true;
  str = str.split(" ");
  let pairs = {};
  for (let i = 0; i < str.length; i++) {
    let char = pattern[i];
    let word = str[i];
    if (!pairs[char]) pairs[char] = word;
  }

  let newStr = [];
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    newStr.push(pairs[char]);
  }
  let keys = Object.keys(pairs)
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (pairs[keys[i]] === pairs[keys[j]]) return false;
    }
  }

  return newStr.join(" ") === str.join(" ");
};

// let pattern = "abc", str = "b c a";
// console.log(wordPattern(pattern, str))


//------------------------------------------------------------------------------
//  (29/50) 949. Largest Time for Given Digits

var largestTimeFromDigits = function (A) {
  let nums = A
  let hour = []


  if (Math.min(...nums) > 2) {
    return ''
  }

  if (nums.includes(2)) {
    hour.push(2)
    nums.splice(A.indexOf(2), 1)
  } else if (nums.includes(1)) {
    hour.push(1)
    nums.splice(A.indexOf(1), 1)
  } else if (nums.includes(0)) {
    hour.push(0)
    nums.splice(A.indexOf(0), 1)
  }

  if (hour[0] === 0 || hour[0] === 1) {
    hour.push(Math.max(...nums))
    nums.splice(nums.indexOf(Math.max(...nums)), 1)

    if (Math.max(...nums) < 6) {
      nums = nums.sort().reverse().join('')
    } else if (Math.min(...nums) > 5) {
      return ''
    } else {
      nums = nums.sort().join('')
    }
    return hour.join('') + ':' + nums
  }


  if (Math.min(...nums) > 3) {
    return ''
  }

  if (nums.includes(3)) {
    hour.push(3)
    nums.splice(A.indexOf(3), 1)
  } else if (nums.includes(2)) {
    hour.push(2)
    nums.splice(nums.indexOf(2), 1)
  } else if (nums.includes(1)) {
    hour.push(1)
    nums.splice(nums.indexOf(1), 1)
  } else if (nums.includes(0)) {
    hour.push(0)
    nums.splice(nums.indexOf(0), 1)
  }

  if (Math.min(...nums) > 5 && Math.max(...nums) > 5 && (hour[1] === 0 || hour[1] === 1)) {
    hour.push(Math.max(...nums))
    nums.splice(nums.indexOf(Math.max(...nums)), 1)
    nums.unshift(hour[0])
    hour.shift()
  }

  if (Math.max(...nums) < 6) {
    nums = nums.sort().reverse().join('')
  } else if (Math.min(...nums) > 5) {
    return ''
  } else {
    nums = nums.sort().join('')
  }

  return hour.join('') + ':' + nums
};

// var largestTimeFromDigits = function (A) {
//   let max = [2, 3, 5, 9];
//   let str = "";
//   let count = {};

//   for (let i = 0; i < A.length; i++) {
//     let num = A[i];
//     if (!count[num]) count[num] = 0;
//     count[num]++;
//   }

//   let keys = Object.keys(count);
//   for (let i = 0; i < max.length; i++) {
//     let m = max[i];

//     for (let j = m; j >= 0; j--) {
//       if (keys.includes("0") && keys.includes("2") && keys.some(n => parseInt(n) === 6) && !keys.some(n => parseInt(n) > 2 && parseInt(n) < 6)) {
//         if (i === 0) {
//           // debugger;
//           str += "0";
//           count["0"]--;
//           break;
//         }
//       }
//       if (count[j]) {
//         // debugger;
//         str += j;
//         count[j]--;
//         break;
//       }
//     }
//     if (i === 0 && str.length !== 1) return "";
//     if (i === 1 && str.length !== 2) return "";
//     if (i === 1) str += ":";
//     if (i === 2 && str.length !== 4) return "";
//     if (i === 3 && str.length !== 5) return "";

//     if (i === 0 && str[0] === '0') {
//       max = [0, 9, 5, 9];
//     }
//     if (i === 0 && str[0] === '1') {
//       max = [1, 9, 5, 9];
//     }
//   }

//   return str;
// };

// let A = [1, 2, 3, 4];
// console.log(largestTimeFromDigits(A));
// A = [0, 4, 0, 0];
// console.log(largestTimeFromDigits(A));
// A = [4, 1, 0, 0];
// console.log(largestTimeFromDigits(A));
// A = [2, 0, 6, 6];
// console.log(largestTimeFromDigits(A));
// A = [3, 2, 7, 0];
// console.log(largestTimeFromDigits(A));
// A = [8, 2, 0, 0];
// console.log(largestTimeFromDigits(A));

//------------------------------------------------------------------------------
//  (28/50) 14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  let min = strs[0].length; 
  let pre = "";
  for (let i = 1; i < strs.length; i++) {
    let length = strs[i].length;
    if (length < min) min = length;
  }
  for (let i = 0; i < min; i++) {
    let sub = strs[0].slice(0, i+1);
    if (strs.every(str => str.startsWith(sub))) {
      pre = sub;
    } else {
      break;
    }
  }
  return pre;
};

//------------------------------------------------------------------------------
//  (27/50) 189. Rotate Array

var rotate = function (nums, k) {
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    let ele = nums.pop();
    nums.unshift(ele);
  }
  return nums;
};

//------------------------------------------------------------------------------
//  (26/50) 28. Implement strStr()

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

//------------------------------------------------------------------------------
//  (25/50) 69. Sqrt(x)

var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

//------------------------------------------------------------------------------
//  (24/50) 941. Valid Mountain Array

var validMountainArray = function (A) {
  if (A.length < 3) return false;
  let dir = 1;
  for (let i = 0; i < A.length - 1; i++) {
    let curr = A[i];
    let next = A[i + 1];

    if (curr === next) return false;
    if (i === 0 && curr > next) return false;
    if (dir === 1 && curr > next) dir = -1;
    if (dir === -1 && curr < next) return false;
  }
  return dir === -1;
};

//------------------------------------------------------------------------------
//  (23/50) 58. Length of Last Word

var lengthOfLastWord = function (s) {
  if (!s.length) return 0;
  s = s.split(" ").reverse();
  while (s.length) {
    if (s[0].length > 0) return s[0].length;
    s.shift();
  }
  return s.length; 
};

//------------------------------------------------------------------------------
//  (22/50) 686. Repeated String Match

var repeatedStringMatch = function (A, B) {
  const n = Math.ceil(B.length / A.length);
  if (A.repeat(n).includes(B)) return n;
  if (A.repeat(n + 1).includes(B)) return n + 1;
  return -1;
};

// var repeatedStringMatch = function (A, B) {
//   let count = 1;
//   let copy = A;
//   while (copy.length <= (A.length * B.length)) {
//     if (copy.includes(B)) return count;
//     copy += A;
//     count++;
//   }
//   return -1;
// };

//------------------------------------------------------------------------------
//  (21/50) 633. Sum of Square Numbers

var judgeSquareSum = function (c) {
  if (c === 0) {
    return true;
  }
  for (let a = 0; a * a < c; a++) {
    let b = Math.sqrt(parseFloat(c - a * a));
    if (b - Math.round(b) === 0) {
      return true;
    }
  }
  return false;
};

var judgeSquareSum = function (c) {
  let squares = {};
  let n = Math.floor(Math.sqrt(c));
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (!squares[i]) squares[i] = i * i;
      if (!squares[j]) squares[j] = j * j;
      if (squares[i] + squares[j] === c) return true;
    }
  }
  return false;
};

//------------------------------------------------------------------------------
//  (20/50) 176. Second Highest Salary

// # Write your MySQL query statement below
// SELECT
// IFNULL(
//   (SELECT DISTINCT Salary
//        FROM Employee
//        ORDER BY Salary DESC
//         LIMIT 1 OFFSET 1),
//   NULL) AS SecondHighestSalary


//------------------------------------------------------------------------------
//  (19/50) 532. K-diff Pairs in an Array

var findPairs = function (nums, k) {
  let count = 0;
  let pairs = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let num1 = nums[i] <= nums[j] ? nums[i] : nums[j];
      let num2 = nums[i] <= nums[j] ? nums[j] : nums[i];
      if (num2 - num1 === k) {
        if (pairs[num1] === undefined) {
          pairs[num1] = num2;
          count += 1;
        }
      };
    }
  }
  return count;
};

// let nums = [3, 1, 4, 1, 5], k = 2;
// console.log(findPairs(nums, k));

//------------------------------------------------------------------------------
//  (18/50) 605. Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    let prev = flowerbed[i - 1];
    let current = flowerbed[i];
    let next = flowerbed[i + 1];

    if (n === 0) return true;

    if (prev === undefined) {
      if (current === 0 && next === 0) {
        flowerbed[i] = 1;
        n--;
      }
      continue;
    }

    if (next === undefined) {
      if (prev === 0 && current === 0) {
        flowerbed[i] = 1;
        n--;
      }
      continue;
    }

    if (prev === 0 && current === 0 && next === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n === 0;
};

//------------------------------------------------------------------------------
//  (17/50) 204. Count Primes

const countPrimes = (n) => {
  let arr = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (arr[i] === true) {
      for (let j = 2; j * i < n; j++) {
        arr[j * i] = false;
      }
    }
  }

  let primeCount = 0;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === true) {
      primeCount++;
    }
  }

  return primeCount;
};

// time exceeded
// var countPrimes = function (n) {
//   let res = [];
//   let i = 2;
//   for (let i = 2; i < n; i++) {
//     if (i % 2 === 0) continue;
//     if (isPrime(i)) res.push(i);
//   }
//   return res.length;
// };

// const isPrime = function (n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

//------------------------------------------------------------------------------
//  (16/50) 581. Shortest Unsorted Continuous Subarray

var findUnsortedSubarray = function (nums) {
  let sorted = nums.slice();
  sorted.sort((a, b) => a - b);
  let firstIdx, lastIdx;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sorted[i]) {
      firstIdx = i;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== sorted[i]) {
      lastIdx = i;
      break;
    }
  }
  let res = nums.slice(firstIdx, lastIdx + 1);
  return res.length;
};


//------------------------------------------------------------------------------
//  (15/50) 414. Third Maximum Number

var thirdMax = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!count[num]) count[num] = 1;
  }
  nums = Object.keys(count);
  nums.sort((a, b) => b - a);
  if (nums.length < 3) {
    return nums[0];
  } else {
    return nums[2];
  }
};

//------------------------------------------------------------------------------
//  (14/50) 

var buddyStrings = function (A, B) {
  if (A.length != B.length) {
    return false;
  }
  let [dif, chars] = [[], new Set(A)];
  for (i in A) {
    if (A[i] != B[i]) {
      dif.push([A[i], B[i]]);
    }
  }
  return dif.length === 2 && dif[0].join() === dif[1].reverse().join() || (dif.length === 0 && chars.size !== A.length);
};

// var buddyStrings = function (A, B) {
//   A = A.split("");
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       let char1 = A[i];
//       let char2 = A[j];
//       A[i] = char2;
//       A[j] = char1;
//       if (A.join("") === B) return true;
//       A[i] = char1;
//       A[j] = char2;
//     }
//   }

//   if (A === B) return false;
//   return false;
// };

//------------------------------------------------------------------------------
//  (13/50) 665. Non-decreasing Array

var checkPossibility = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let prev = nums[i - 1];
    let num = nums[i];
    let next = nums[i + 1];

    if (!prev) {
      if (num > next) {
        nums[i] = next;
        count++;
      }
    } else if (!next) {
      if (prev > num) {
        nums[i] = prev;
        count++;
      }
    } else if (prev > next && num > next) {
      nums[i + 1] = num;
      count++;
    } else if (prev === next && prev < num) {
      nums[i] = prev;
      count++;
    } else if (prev < next && num > next) {
      nums[i] = prev;
      count++;
    } else if (num > next) {
      nums[i + 1] = num;
      count++;
    }
  }
  return count <= 1;
};

// var checkPossibility = function (nums) {
//   let possibility1 = nums.slice();
//   let possibility2 = nums.slice();
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i + 1]) {
//       possibility1[i] = nums[i + 1];
//       possibility2[i + 1] = nums[i];
//       break;
//     }
//   }
//   let possible1 = true;
//   let possible2 = true;
//   for (let i = 0; i < possibility1.length - 1; i++) {
//     if (possibility1[i] > possibility1[i + 1]) {
//       possible1 = false;
//     }
//     if (possibility2[i] > possibility2[i + 1]) {
//       possible2 = false;
//     }
//   }
//   return possible1 || possible2
// };

// 3, 4, 2, 3
// -1, 4, 2, 3
// 3, 3, 3, 2, 4
// 1, 4, 1, 2


//------------------------------------------------------------------------------
//  (12/50) 1346. Check If N and Its Double Exist

var checkIfExist = function (arr) {
  if (arr.length <= 1) return false;
  while (arr.length > 1) {
    let num = arr.pop();
    if (arr.some(n => num / 2 === n || num * 2 === n)) return true;
  }
  return false;
};

//------------------------------------------------------------------------------
//  (11/50) 1417. Reformat The String

var reformat = function (s) {
  let numbers = "0123456789";
  let alpha = [];
  let nums = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (numbers.includes(char)) {
      nums.push(char);
    } else {
      alpha.push(char);
    }
  }
  if (Math.abs(nums.length - alpha.length) > 1) return str;

  while (alpha.length || nums.length) {
    if (str.length === 0) {
      if (alpha.length >= nums.length) {
        str += alpha[0];
        alpha = alpha.slice(1);
      } else {
        str += nums[0];
        nums = nums.slice(1);
      }
    } else {
      if (numbers.includes(str[str.length - 1])) {
        str += alpha[0];
        alpha = alpha.slice(1);
      } else {
        str += nums[0];
        nums = nums.slice(1);
      }
    }
  }

  return str;
};

//------------------------------------------------------------------------------
//  (10/50) 1422. Maximum Score After Splitting a String

var maxScore = function (s) {
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    let left = s.slice(0, i);
    let right = s.slice(i);
    left = left.split("").filter(x => x === '0');
    right = right.split("").filter(x => x === '1');
    let sum = left.length + right.length;
    if (sum > max) max = sum;
  }
  return max;
};

// let s = "011101";
// console.log(maxScore(s));


//------------------------------------------------------------------------------
//  (9/50) 

var buildArray = function (target, n) {
  let arr = [];
  let res = [];
  let i = 1;
  while (target[target.length - 1] >= i) {
    arr.push(i);
    res.push('Push');
    if (!target.includes(i)) {
      arr.pop();
      res.push('Pop');
    }
    i++;
  }
  return res;
};


// let target = [1, 3], n = 3;
// console.log(buildArray(target, n));

//------------------------------------------------------------------------------
//  (8/50) 1496. Path Crossing

var isPathCrossing = function (path) {
  let x = 0, y = 0;
  let visited = [[0, 0]];
  for (let i = 0; i < path.length; i++) {{
    let dir = path[i];
    if (dir === "N") y++;
    if (dir === "S") y--;
    if (dir === "E") x++;
    if (dir === "W") x--;
    let point = [x, y];
    if (visited.some(p => _.isEqual(p, point))) {
    // if (visited.some(p => p[0] === point[0] && p[1] === point[1])) {
      return true;
    } else {
      visited.push(point);
    }
  }}
  return false;
};

// let path = "NESWW";
// console.log(isPathCrossing(path));

//------------------------------------------------------------------------------
//  (7/50) 1539. Kth Missing Positive Number

var findKthPositive = function (arr, k) {
  let res = [];
  let i = 1;
  while (res.length < k) {
    if (!arr.includes(i)) res.push(i);
    i++;
  }

  return res[k - 1];
};

//------------------------------------------------------------------------------
//  (6/50) 1544. Make The String Great

var makeGood = function (s) {
  if (s.length < 1) return s;

  let good = false;
  while (!good) {
    good = true;
    for (let i = 0; i < s.length - 1; i++) {
      let curr = s[i];
      let next = s[i + 1];
      if (curr !== next) {
        if (curr === next.toUpperCase() || curr === next.toLowerCase()) {
          s = s.slice(0, i) + s.slice(i + 2);
          good = false;
        }
      }
    }
  }

  return s;
};

// let s = "leEeetcode";
// console.log(makeGood(s));

//------------------------------------------------------------------------------
//  (5/50) 1137. N-th Tribonacci Number

var tribonacci = function (n) {
  let trib = [0, 1, 1];

  while (trib.length <= n) {
    let next = trib[trib.length - 3] + trib[trib.length - 2] + trib[trib.length - 1];
    trib.push(next);
  }

  return trib[n];
};


//------------------------------------------------------------------------------
//  (4/50) 198. House Robber

var rob = function (nums) {
  let prevMax = 0, curMax = 0;
  for (let n of nums) {
    let temp = curMax;
    curMax = Math.max(prevMax + n, curMax); // rob vs !rob
    prevMax = temp;
  }
  return Math.max(curMax, prevMax);
}

// var rob = function (nums) {

//   let sum1 = 0, sum2 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 === 0) {
//       sum1 += nums[i];
//     } else {
//       sum2 += nums[i];
//     }
//   }

//   return sum1 >= sum2 ? sum1 : sum2;
// };


//------------------------------------------------------------------------------
//  (3/50) 66. Plus One

var plusOne = function (digits) {
  let extra = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + extra;
    digits[i] = (digits[i] >= 10) ? (extra = 1, digits[i] -= 10) : (extra = 0, digits[i]);
  }

  if (extra) digits.unshift(1) 
  return digits;
};

// var plusOne = function (digits) {
//   let numStr = digits.join("");
//   let num = parseInt(numStr) + 1;
//   return `${num}`.split("").map(n => parseInt(n));
// };

// // console.log(plusOne([1, 2, 3]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));


//------------------------------------------------------------------------------
//  (2/50) 53. Maximum Subarray

function maxSubArray(A) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}

// var maxSubArray = function (nums) {
//   if (nums.length === 1) return nums[0];
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       let sub = nums.slice(i, j);
//       let sum = sub.reduce((a, b) => a + b);
//       if (sum > maxSum) maxSum = sum;
//     }
//   }

//   return maxSum;
// };


//------------------------------------------------------------------------------
//  (1/50) 7. Reverse Integer 

var reverse = function (x) {
  if (x < 0) return -1 * reverse(-x);
  const r = parseInt(`${x}`.split('').reverse().join(''), 10);
  if (r > 2 ** 31 - 1) return 0;

  return r;
};

// var reverse = function (x) {
//   let negative = x < 0 ? true : false;
//   let reversedNumStr = Math.abs(x).toString().split("").reverse().join("");
//   reversedNumStr = negative ? `-${reversedNumStr}` : reversedNumStr;
//   return parseInt(reversedNumStr);
// };


//------------------------------------------------------------------------------

// 1154. Day of the Year (40/40)

var dayOfYear = function (date) {
  let months = {
    '01': 31,
    '02': 28,
    '03': 31,
    '04': 30,
    '05': 31,
    '06': 30,
    '07': 31,
    '08': 31,
    '09': 30,
    '10': 31,
    '11': 30,
    '12': 31,
  }
  date = date.split("-");
  year = date[0];
  month = date[1];
  day = date[2];
  let days = 0;
  for (let i = 1; i < parseInt(month); i++) {
    if (i === 2 && year % 4 === 0 && year > 1900) {
      days += months['02'];
      days += 1;
    } else {
      let m = `${i}`.length === 1 ? `0${i}` : `${i}`;
      days += months[m];
    };
  }
  days += parseInt(day);
  return days;
};


// let date = "2019-02-10";
// console.log(dayOfYear(date));


//------------------------------------------------------------------------------

// 796. Rotate String (39/40)

var rotateString = function (A, B) {
  if (A.length !== B.length) return false;
  if (A.length === 0) return true;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(1) + A[0];
    if (A === B) return true;
  }

  return false;
};

// let A = 'abcde', B = 'cdeab';
// console.log(rotateString(A, B));


//------------------------------------------------------------------------------

// 485. Max Consecutive Ones (38/40)

var findMaxConsecutiveOnes = function (nums) {
  if (nums.every(n => n === 0)) return 0;
  let max = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let prev = nums[i - 1];
    if (num === prev && num === 1) {
      count++;
    } else {
      count = 1;
    }
    if (count > max) max = count;
  }
  return max;
};


//------------------------------------------------------------------------------

// 389. Find the Difference (37/40)

var findTheDifference = function (s, t) {
  let count = {};
  let count2 = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!count[char]) count[char] = 0;
    count[char]++;
  }
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!count2[char]) count2[char] = 0;
    count2[char]++;
  }
  let key = Object.keys(count2).filter(k => !count[k] || count[k] !== count2[k]);
  return key[0];
};


//------------------------------------------------------------------------------

// 1523. Count Odd Numbers in an Interval Range (36/40)

var countOdds = function (low, high) {
  let odds = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) odds++;
  }
  return odds;
};


//------------------------------------------------------------------------------

// 1331. Rank Transform of an Array (35/40)

var arrayRankTransform = function (arr) {
  let copy = arr.slice();

  let sort = {};
  let increment = 1;
  copy.sort((a, b) => a - b);
  for (let i = 0; i < copy.length; i++) {
    let num = copy[i];
    if (!sort[num]) {
      sort[num] = increment;
      increment++;
    };
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    arr[i] = sort[num];
  }
  return arr;
};


//------------------------------------------------------------------------------

// 258. Add Digits (34/40)

var addDigits = function (num) {
  num = num.toString();
  while (num.length > 1) {
    num = num.split("").map(n => parseInt(n));
    num = num.reduce((a, b) => a + b);
    num = num.toString();
  }
  return num;
};


//------------------------------------------------------------------------------

// 917. Reverse Only Letters (33/40)

var reverseOnlyLetters = function (S) {
  let newArr = new Array(S.length);
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  let chars = "";
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (!alpha.includes(char.toLowerCase())) {
      newArr[i] = char;
    } else {
      chars += char;
    }
  }

  chars = chars.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (!newArr[i]) {
      let char = chars.pop();
      newArr[i] = char;
    }
  }

  return newArr.join("");
};

// let S = "a-bC-dEf-ghIj";
// console.log(reverseOnlyLetters(S));


//------------------------------------------------------------------------------

// (32/40)

var isMonotonic = function (A) {
  let dir;
  for (let i = 2; i < A.length; i++) {
    let first = A[i - 2];
    let second = A[i - 1];
    let third = A[i];

    if (first === second && second === third) {
      continue;
    }

    if (first >= second && second >= third) {
      if (!dir) dir = 'dec';
      if (dir !== 'dec') return false;
    } else if (first <= second && second <= third) {
      if (!dir) dir = 'inc';
      if (dir !== 'inc') return false;
    } else {
      return false;
    }
  }
  return true;
};


//------------------------------------------------------------------------------

// 1446. Consecutive Characters (31/40)

var maxPower = function (s) {
  let max = 1;
  let count = 1
  for (let i = 1; i < s.length; i++) {
    let char = s[i];
    let prev = s[i - 1];
    if (char === prev) {
      if (max < count) max = count;
      count++;
    } else {
      if (max < count) max = count;
      count = 1;
    }
  }
  return max;
};


//------------------------------------------------------------------------------

// 1287. Element Appearing More Than 25% In Sorted Array (30/30)

var findSpecialInteger = function (arr) {
  if (arr.length === 1) return arr[0];
  let quarter = Math.ceil(arr.length / 4);
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let prev = arr[i - 1];
    if (num === prev) {
      count++
    } else {
      count = 1;
    };
    if (count >= quarter) return num;
  }
};


//------------------------------------------------------------------------------

// 1507. Reformat Date (29/30)

var reformatDate = function (date) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  date = date.split(" ");
  year = date[2];
  let idx = months.indexOf(date[1]);
  month = `${idx + 1}`.length === 1 ? `0${idx + 1}` : `${idx + 1}`;
  day = date[0].slice(0, date[0].length - 2);
  day = `${day}`.length === 1 ? `0${day}` : `${day}`;

  return `${year}-${month}-${day}`;
};


//------------------------------------------------------------------------------

// 566. Reshape the Matrix (28/30)

var matrixReshape = function (nums, r, c) {
  let rows = nums.length;
  let cols = nums[0].length;
  if (rows * cols !== r * c) return nums;
  nums = [].concat.apply([], nums);

  let grid = [];
  for (let row = 0; row < r; row++) {
    let sub = [];
    for (let col = 0; col < c; col++) {
      let ele = nums.shift();
      sub.push(ele);
    }
    grid.push(sub);
  }
  return grid;
};


//------------------------------------------------------------------------------

//  (27/30)

// # Write your MySQL query statement below
// select FirstName, LastName, City, State
// from Person
// left join Address on Person.PersonId = Address.PersonId


//------------------------------------------------------------------------------

// 1189. Maximum Number of Balloons (26/30)

var maxNumberOfBalloons = function (text) {
  let count = {};
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if ("balloon".includes(char)) {
      if (!count[char]) count[char] = 0;
      count[char]++;
    }
  }

  let times = 0;
  let word = "balloon".split("");

  while (word.length) {
    let char = word.shift();
    count[char]--;
    // debugger;
    if (char === "n" && Object.values(count).every(v => v >= 0)) { 
      // debugger;
      times++;
      word = "balloon".split("");
    };
  }

  return times;
};

// let text = "nlaebolko";
// console.log(maxNumberOfBalloons(text))


//------------------------------------------------------------------------------

// 985. Sum of Even Numbers After Queries (25/30)

var sumEvenAfterQueries = function (A, queries) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let pair = queries[i];
    A[pair[1]] += pair[0];
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      let num = A[i];
      if (Math.abs(num % 2) === 0) sum += num;
    }
    res.push(sum);
  }
  return res;
};


//------------------------------------------------------------------------------

//  (24/30)

var shiftGrid = function (grid, k) {
  let rows = grid.length;
  let cols = grid[0].length;
  let newGrid = [];
  for (let i = 0; i < rows; i++) {
    let sub = [];
    for (let j = 0; j < cols; j++) {
      sub.push(0);
    }
    newGrid.push(sub);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let ele = grid[row][col];
      let nRow, nCol;
      if (col + k < cols) {
        nRow = row;
        nCol = col + k;
      } else {
        nCol = (col + k) % cols;
        nRow = (Math.floor((col + k)/cols) + row) % rows;
      }
      // debugger;
      newGrid[nRow][nCol] = ele;
      // debugger;
    }
  }

  return newGrid;
};

// let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 1;
// console.log(shiftGrid(grid, k));


//------------------------------------------------------------------------------

//  (23/30)

var stringMatching = function (words) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let word1 = words[i];
    for (let j = i + 1; j < words.length; j++) {
      let word2 = words[j];
      if (word1.includes(word2) && !res.includes(word2)) res.push(word2); 
      if (word2.includes(word1) && !res.includes(word1)) res.push(word1); 
    }
  }
  return res;
};


//------------------------------------------------------------------------------

//  (22/30)

// # Write your MySQL query statement below
// select email
// from Person
// group by email
// having COUNT(email) > 1


//------------------------------------------------------------------------------

// 1046. Last Stone Weight (21/30)

var lastStoneWeight = function (stones) {
  stones.sort((a,b) => b-a);
  while (stones.length > 1) {
    let s1 = stones.shift();
    let s2 = stones.shift();
    if (s1 > s2) {
      stones.push(s1-s2);
      stones.sort((a, b) => b - a);
    }
  }
  
  return stones.length ? stones[0] : 0;
};


//------------------------------------------------------------------------------

// 867. Transpose Matrix (20/20)

var transpose = function (A) {
  let transposed = [];
  for (let col = 0; col < A[0].length; col++) {
    let sub = [];
    for (let row = 0; row < A.length; row++) {
      let ele = A[row][col];
      sub.push(ele);
    }
    transposed.push(sub);
  }
  return transposed;
};



//------------------------------------------------------------------------------

// 1518. Water Bottles (19/20)

var numWaterBottles = function (numBottles, numExchange) {
  let drank = numBottles;

  while (numBottles >= numExchange) {
    let newBottles = Math.floor(numBottles / numExchange);
    let rem = numBottles % numExchange;

    drank += newBottles;
    numBottles = newBottles + rem;
  }

  return drank;
};

//------------------------------------------------------------------------------

// 669. Trim a Binary Search Tree (18/20)

var trimBST = function (root, L, R) {
  if (!root) return root;
  if (root.val > R) return trimBST(root.left, L, R);
  if (root.val < L) return trimBST(root.right, L, R);

  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};


//------------------------------------------------------------------------------

// 637. Average of Levels in Binary Tree (17/20)

var averageOfLevels = function (root) {
  let res = [];
  let queue = [root];

  while (queue.length) {
    if (queue.length === 1) {
      let node = queue.shift();
      res.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    } else {
      let vals = queue.map(node => node.val);
      let sum = vals.reduce((a, b) => a + b);
      res.push(sum / vals.length);
      for (let i = 0; i < vals.length; i++) {
        let node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }

  return res;
};


//------------------------------------------------------------------------------

// 884. Uncommon Words from Two Sentences (16/20)

var uncommonFromSentences = function (A, B) {
  let count = {};
  words = A.split(" ").concat(B.split(" "));
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!count[word]) count[word] = 0;
    count[word]++
  }
  return Object.keys(count).filter(k => count[k] === 1);
};


//------------------------------------------------------------------------------

// 1103. Distribute Candies to People (15/20)

var distributeCandies = function (candies, num_people) {
  let arr = Array(num_people).fill(0);
  // let arr = Array.apply(null, Array(num_people)).map(x => 0);
  
  let i = 1;
  while (candies > 0) {
    if (candies >= i) {
      arr[(i - 1) % num_people] += i;
      candies -= i;
    } else {
      arr[(i - 1) % num_people] += candies;
      candies = 0;
    }

    i++;
  }

  return arr;
};


//------------------------------------------------------------------------------

// 496. Next Greater Element I (14/20)

var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    let idx = nums2.indexOf(num);
    let sub = nums2.slice(idx + 1);
    if (sub.length === 0 || !sub.some(n => n > num)) {
      res.push(-1);
    } else {
      for (let j = 0; j < sub.length; j++) {
        if (sub[j] > num) {
          res.push(sub[j])
          break;
        };
      }
    }
  }
  return res;
};


//------------------------------------------------------------------------------

// 1185. Day of the Week (13/20)

var dayOfTheWeek = function (day, month, year) {
  // 1/1/71 is a Friday
  daysOfWeek = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  let days = 0;
  let months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }
  for (let i = 1971; i < year; i++) {
    if (i % 4 === 0) {
      days += 366;
    } else {
      days += 365;
    }
  }
  for (let i = 1; i < month; i++) {
    if (year % 4 === 0 && i === 2) {
      days += months[2] + 1;
    } else {
      days += months[i];
    }
  }
  days += day - 1;
  days = days % 7;
  return daysOfWeek[days];
};



//------------------------------------------------------------------------------

// 237. Delete Node in a Linked List (12/20)

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


//------------------------------------------------------------------------------

// 872. Leaf - Similar Trees (11/20)

var leafSimilar = function (root1, root2) {
  return _.isEqual(getLeaves(root1), getLeaves(root2)); // deep equal check
};

function getLeaves(node, seq = []) {
  if (!node) return seq; // base
  if (!node.left && !node.right) seq.push(node.val);     // if leaf

  // traverse
  getLeaves(node.left, seq);
  getLeaves(node.right, seq);

  return seq;
}

// var leafSimilar = function (root1, root2) {
//   if (!root1.next) return root1.val;
//   if (!root2.next) return root2.val;

//   let seq1 = [], seq2 = [];
//   if (root1.next) 
//   seq1 = seq1.concat(leafSimilar(root1.left));
//   seq1 = seq1.concat(leafSimilar(root1.right));

//   seq2 = seq2.concat(leafSimilar(root2.left));
//   seq2 = seq2.concat(leafSimilar(root2.right));
  
//   if (seq1.length === seq2.length) {
//     if (seq1.every(num => seq2.includes(num)) && 
//       seq2.every(num => seq1.includes(num))) {
//         return true;
//       }
//   };
// };


//------------------------------------------------------------------------------

// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence (10/20)

var isPrefixOfWord = function (sentence, searchWord) {
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    if (word.startsWith(searchWord)) return i;
  }
  return -1;
};


//------------------------------------------------------------------------------

// 1078. Occurrences After Bigram (9/20)

var findOcurrences = function (text, first, second) {
  let words = [];
  text = text.split(" ");
  for (let i = 2; i < text.length; i++) {
    let f = text[i - 2];
    let s = text[i - 1];
    let third = text[i];
    if (f === first && s === second) words.push(third);
  }

  return words;
};


//------------------------------------------------------------------------------

// 1394. Find Lucky Integer in an Array (8/20)

var findLucky = function (arr) {
  let count = {};
  for (let num of arr) {
    if (!count[num]) count[num] = 0;
    count[num]++;
  }

  let keys = Object.keys(count).filter(key => count[key] === parseInt(key));
  return keys.length > 0 ? keys[keys.length - 1] : -1;
};

// console.log(findLucky([2, 2, 3, 4]));


//------------------------------------------------------------------------------

// 476. Number Complement (7/20)

var findWords = function (words) {
  let keys = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
  ];
  let rowWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");

    for (let j = 0; j < keys.length; j++) {
      let row = keys[j];

      if (word.every(l => row.includes(l.toLowerCase()))) {
        rowWords.push(word);
        break;
      } else if (word.some(l => row.includes(l.toLowerCase()))) {
        break;
      }
    }
  }
  return rowWords.map(word => word.join(""));
};


//------------------------------------------------------------------------------

// 824. Goat Latin (6/20);

var toGoatLatin = function (S) {
  let vowels = "aeiouAEIOU";

  let goatWords = S.split(" ").map((word, i) => {
    if (vowels.includes(word[0])) {
      word += "ma";
    } else {
      word = word.slice(1) + word[0] + "ma";
    }
    for (let j = 0; j <= i; j++) {
      word += "a";
    }
    return word;
  });
  return goatWords.join(" ");
};


//------------------------------------------------------------------------------

// 226. Invert Binary Tree (5/20)

var invertTree = function (root) {
  if (!root) return null;

  let right = invertTree(root.left);
  let left = invertTree(root.right);

  root.right = right;
  root.left = left;
  return root;
};

//------------------------------------------------------------------------------

// 766. Toeplitz Matrix (4/20)

var isToeplitzMatrix = function (matrix) {
  for (let col = 1; col < matrix[0].length; col++) {
    for (let row = matrix.length - 1; row > 0; row--) {
      if (matrix[row][col] !== matrix[row - 1][col - 1]) return false;
    }
  }
  return true;
};


//------------------------------------------------------------------------------

// 1413. Minimum Value to Get Positive Step by Step Sum (3/20)

var minStartValue = function (nums) {
  let min = nums[0] > 1 ? 1 : nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    if (sum < min) min = sum;
  }

  if (min > 0) {
    return 1;
  } else {
    return 1 - min;
  }
};

// console.log(minStartValue([-3, 6, 2, 5, 8, 6]));


//------------------------------------------------------------------------------

// 463. Island Perimeter (2/20)

var islandPerimeter = function (grid) {
  let perim = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let num = grid[row][col];

      if (num === 0) continue;

      if (grid[row - 1] === undefined || grid[row - 1][col] === 0) {
        perim++;
      }
      if (grid[row + 1] === undefined || grid[row + 1][col] === 0) {
        perim++;
      }
      if (grid[row][col - 1] === undefined || grid[row][col - 1] === 0) {
        perim++;
      }
      if (grid[row][col + 1] === undefined || grid[row][col + 1] === 0) {
        perim++;
      }
    }
  }
  return perim;
};



//------------------------------------------------------------------------------

// 1200. Minimum Absolute Difference (1/20)

var minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b);
  let minDiff = arr[1] - arr[0];
  let pairs = [arr[0], arr[1]];

  for (let i = 1; i < arr.length - 1; i++) {
    let num1 = arr[i];
    let num2 = arr[i + 1];
    let diff = num2 - num1;

    if (diff > minDiff) continue;

    if (diff < minDiff) {
      minDiff = diff;
      pairs = [];
    } 
    pairs.push([num1, num2]);
  }

  return pairs;
};


//------------------------------------------------------------------------------

// 821. Shortest Distance to a Character

var shortestToChar = function (S, C) {
  let eIdx = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) eIdx.push(i);
  }

  let prev = eIdx.length === 1 ? eIdx[0] : undefined;
  let next = eIdx[0];

  let dist = new Array(S.length);
  for (let i = 0; i < S.length; i++) {
    let char = S[i];

    if (char === C) { 
      prev = eIdx.shift();
      next = eIdx.length ? eIdx[0] : undefined;
      // debugger;
      dist[i] = 0; 
      continue;
    };

    // debugger;
    if (prev === undefined) {
      // debugger;
      dist[i] = next - i;
      continue;
    } else if (next === undefined) {
      dist[i] = i - prev;
      // debugger;
      continue;
    }

    if (i - prev > 0 && i - prev <= next - i) {
      dist[i] = i - prev;
    } else {
      dist[i] = next - i;
    }
  }

  return dist;
};

// let S = "loveleetcode", C = 'e';
// let S = "aaab", C = "b";
// console.log(shortestToChar(S, C));


//------------------------------------------------------------------------------

// 509. Fibonacci Number

var fib = function (N) {
  if (N === 0) return 0;
  if (N === 1) return 1;

  return fib(N - 1) + fib(N - 2);
};


//------------------------------------------------------------------------------

// 1160. Find Words That Can Be Formed by Characters

var countCharacters = function (words, chars) {
  let str = "";
  let count = {};

  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (!count[char]) count[char] = 0;
    count[char]++;
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let count2 = {};

    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (!count2[char]) count2[char] = 0;
      count2[char]++;
    }

    if (Object.keys(count2).every(key => count[key] >= count2[key])) {
      str += word;
    }
  }

  return str.length;
};

// let words = ["cat", "bt", "hat", "tree"], chars = "atach";
// console.log(countCharacters(words, chars));


//------------------------------------------------------------------------------

// 929. Unique Email Addresses

var numUniqueEmails = function (emails) {
  emails = emails.map(e => e.split("@"));
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    let local = email[0];
    if (local.includes("+")) {
      let idx = local.indexOf("+");
      local = local.slice(0, idx);
    }
    local = local.split(".").join("");
    emails[i][0] = local;
  }
  emails = emails.map(e => e.join("@"));
  
  let uniq = [];
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    if (!uniq.includes(email)) uniq.push(email);
  }

  return uniq.length;
};


//------------------------------------------------------------------------------

// 965. Univalued Binary Tree

var isUnivalTree = function (root) {
  if (!root) return;
  let val = root.val;
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    if (node.val !== val) return false;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return true;
};



//------------------------------------------------------------------------------

// 595. Big Countries

// # Write your MySQL query statement below
// select name, population, area
// from World
// where area > 3000000 or population > 25000000


//------------------------------------------------------------------------------

// 620. Not Boring Movies

// # Write your MySQL query statement below
// select *
// from cinema
// where mod(id, 2) = 1 and description != 'boring'
// order by rating desc


//------------------------------------------------------------------------------

// 1122. Relative Sort Array

var relativeSortArray = function (arr1, arr2) {
  let count = {}
  let others = [];
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    if (arr2.includes(num)) {
      if (!count[num]) count[num] = 0;
      count[num]++;
    } else {
      others.push(num);
    }
  }
  others.sort((a, b) => a - b);
  for (let i = arr2.length - 1; i >= 0; i--) {
    let num = arr2[i];
    for (let j = 0; j < count[num]; j++) {
      others.unshift(num);
    }
  }
  return others;
};

// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6];
// console.log(relativeSortArray(arr1, arr2));


//------------------------------------------------------------------------------

// 1002. Find Common Characters

var commonChars = function (A) {
  let common = [];
  A = A.map(word => word.split("").sort().join(""));
  let first = A.shift();
  while (first.length) {
    let char = first[0];
    if (A.every(word => word.includes(char))) {
      common.push(char);
      A = A.map(w => {
        let idx = w.indexOf(char);
        return w.slice(idx + 1);
      })
    }
    first = first.slice(1);
  }
  return common;
};

// console.log(commonChars(["bella", "label", "roller"]))
// console.log(commonChars(["cool", "lock", "cook"]))


//------------------------------------------------------------------------------

// 1550. Three Consecutive Odds

var threeConsecutiveOdds = function (arr) {
  if (arr.length < 3) return false;
  if (arr.length === 3) return arr.every(num => num % 2 === 1);

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 1) {
      count++;
    } else {
      count = 0;
    }

    if (count === 3) return true;
  }

  return false;
};



//------------------------------------------------------------------------------

// 876. Middle of the Linked List

var middleNode = function (head) {
  if (!head.next) return head;

  let length = 1;
  let current = head;
  while (current.next) {
    length++;
    current = current.next;
  }

  let mid = Math.floor(length/2);

  let node = head;
  while (mid > 0) {
    node = node.next;
    mid--;
  }

  return node;
};



//------------------------------------------------------------------------------

// 559. Maximum Depth of N-ary Tree

var maxDepth = function (root) {
  if (!root) return 0;

  let depths = [];
  for (let child of root.children) {
    let depth = 1 + maxDepth(child);
    depths.push(depth);
  }

  return Math.max(1, ...depths);
};


//------------------------------------------------------------------------------

// 1337. The K Weakest Rows in a Matrix

var kWeakestRows = function (mat, k) {
  let soldiers = [], weakestRows = [];
  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    let num = row.reduce((acc, ele) => acc + ele);
    soldiers.push(num);
  }
  let copy = soldiers.slice()
  let kRows = copy.sort((a, b) => a - b).slice(0, k);

  for (let i = 0; i < kRows.length; i++) {
    let num = kRows[i];
    let idx = soldiers.indexOf(num);

    if (i > 0 && kRows[i - 1] === num) {
      let prev = weakestRows[weakestRows.length-1];
      idx = soldiers.indexOf(num, prev + 1);
    }

    weakestRows.push(idx);
  }

  return weakestRows;
};



//------------------------------------------------------------------------------

// 1380. Lucky Numbers in a Matrix

var luckyNumbers = function (matrix) {
  let lucky = [];
  for (let row = 0; row < matrix.length; row++) {
    let eachRow = matrix[row];
    let rowMin = Math.min(...eachRow);
    for (let col = 0; col < matrix[0].length; col++) {
      let eachCol = [];
      let num = matrix[row][col];
      
      for (let row2 = 0; row2 < matrix.length; row2++) {
        let n = matrix[row2][col];
        eachCol.push(n);
      }

      let colMax = Math.max(...eachCol);
      if (rowMin === colMax && rowMin === num) lucky.push(num);
    }
  }

  return lucky;
};

// let matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]];
// arrayPairSum(matrix);



//------------------------------------------------------------------------------

// 590. N-ary Tree Postorder Traversal

var preorder = function (root, res = []) {
  if (!root) return res;

  res.push(root.val);
  for (const child of root.children) {
    preorder(child, res);
  }
  return res;
};


//------------------------------------------------------------------------------

// 590. N-ary Tree Postorder Traversal

var postorder = function (root, result = []) {
  if (!root) return result;

  for (const child of root.children) {
    postorder(child, result);
  }

  result.push(root.val);
  return result;
};



//------------------------------------------------------------------------------

// 942. DI String Match

var diStringMatch = function (S) {
  let res = [];
  let low = 0;
  let high = S.length;

  for (let i = 0; i <= S.length; i++) {
    if (S[i] == 'I') {
      res.push(low);
      low++;
    } else {
      res.push(high);
      high--;
    }
  }
  return res;
};



//------------------------------------------------------------------------------

// 700. Search in a Binary Search Tree

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);

  // if (val < root.val) {
  //   return searchBST(root.left, val);
  // } else if (val > root.val) {
  //   return searchBST(root.right, val);
  // } else {
  //   return root;
  // }
};


//------------------------------------------------------------------------------

// 657. Robot Return to Origin

var judgeCircle = function (moves) {
  let dirs = {
    "U" : 0,
    "L" : 0
  }

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    if (move === "U" || move === "L") {
      dirs[move] += 1;
    } else if (move === "D") {
      dirs["U"] -= 1;
    } else if (move === "R") {
      dirs["L"] -= 1;
    }
  }

  return Object.values(dirs).every(v => v === 0);
};


//------------------------------------------------------------------------------

// 1460. Make Two Arrays Equal by Reversing Sub-arrays

var canBeEqual = function (target, arr) {
  if (target.length !== arr.length) return false;

  let count1 = {};
  let count2 = {};
  for (let i = 0; i < target.length; i++) {
    let ele1 = target[i];
    let ele2 = arr[i];

    if (!count1[ele1]) count1[ele1] = 0;
    if (!count2[ele2]) count2[ele2] = 0;
    count1[ele1] += 1;
    count2[ele2] += 1;
  }

  return Object.keys(count1).every(key => count1[key] === count2[key]);
};



//------------------------------------------------------------------------------

// 617. Merge Two Binary Trees

var mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;

  t1.val += t2.val;

  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};



//------------------------------------------------------------------------------

// 1424. Diagonal Traverse II

var findDiagonalOrder = function (nums) {
  let first = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    let diag = [];
    if (i === 0) {
      diag.push(matrix[first[0]][first[1]]);
      continue;
    }

    
  }
};



//------------------------------------------------------------------------------

// 1299. Replace Elements with Greatest Element on Right Side

var replaceElements = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length-1) { 
      newArr.push(-1)
    } else {
      let sub = arr.slice(i + 1);
      let max = Math.max(...sub);
      newArr.push(max);
    };
  }
  return newArr;
};



//------------------------------------------------------------------------------

// 1475. Final Prices With a Special Discount in a Shop

var finalPrices = function (prices) {
  let discounted = [];

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    let discount;
    for (let j = i + 1; j < prices.length; j++) {
      let price2 = prices[j];
      if (price2 <= price) {
        discount = price2;
        break;
      }
    }

    discount = discount || 0;
    discounted.push(price - discount);
  }

  return discounted;
};


//------------------------------------------------------------------------------

// 832. Flipping an Image

var flipAndInvertImage = function(A) {
  let flipped = [];
  for (let row = 0; row < A.length; row++) {
    let sub = [];
    for (let col = A[0].length - 1; col >= 0; col--) {
      let ele = A[row][col] === 0 ? 1 : 0;
      sub.push(ele);
    }
    flipped.push(sub);
  }

  return flipped;
};


//------------------------------------------------------------------------------

// 1436. Destination City

var destCity = function(paths) {
  for (let i = 0; i < paths.length; i++) {
    let path = paths[i];
    
    if (!paths.some(path2 => path[1] === path2[0])) return path[1];
  }
};



//------------------------------------------------------------------------------

// 1021. Remove Outermost Parentheses 

var removeOuterParentheses = function (S) {
  let stack = [];
  let newStr = "";
  
  for (let i = 0; i < S.length; i++) {
    let char = S[i];

    if (char === '(') {
      stack.push(char);
      if (stack.length > 1) newStr += char;
    } else {
      if (stack.length > 1) newStr += char;
      stack.pop();
    }
  }

  return newStr;
};



//------------------------------------------------------------------------------

var minTimeToVisitAllPoints = function(points) {
  let count = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let [ax, ay] = points[i];
    let [bx, by] = points[i + 1];
    let xDiff = Math.abs(ax - bx);
    let yDiff = Math.abs(ay - by);

    if (xDiff > yDiff) {
      count += xDiff;
    } else {
      count += yDiff;
    }
  }

  return count;
};



//------------------------------------------------------------------------------

// 938. Range Sum of BST

var rangeSumBST = function (root, L, R) {
  if (!root) return 0;

  let leftTree = rangeSumBST(root.left, L, R);
  let rightTree = rangeSumBST(root.right, L, R);
  
  if (root.val >= L && root.val <= R) {
    return root.val + leftTree + rightTree;
  } else {
    return leftTree + rightTree;
  }
};


//------------------------------------------------------------------------------

// 20. Valid Parentheses

var isValid = function (s) {
  let stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};



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

// console.log(groupAnagrams(["tea", "and", "ace", "ad", "eat", "dans"]));

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

// let words = "is2 Thi1s T4est 3a";
// order(words);


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

// let n = 2, m = 3, indices = [[0, 1], [1, 1]]
// oddCells(n, m, indices);

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


