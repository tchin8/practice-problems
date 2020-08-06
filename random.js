



//------------------------------------------------------------------------------




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

let lines = [["hello", "world"], ["How", "areYou", "doing"], ["Please look", "and align", "to right"]];
let aligns = ["LEFT", "RIGHT", "RIGHT"];
let width = 16;

console.log(justifyNewspaperText(lines, aligns, width));


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
