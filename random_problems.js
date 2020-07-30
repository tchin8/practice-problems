



//------------------------------------------------------------------------------




//------------------------------------------------------------------------------



//------------------------------------------------------------------------------




//------------------------------------------------------------------------------

function justifyNewspaperText(lines, aligns, width) {
  let align;
  let justified = [];
  let border = "";

  for (let i = 0; i < width + 2; i++) {
    border += "*";
  }
  justified.push(border);

  for (let i = 0; i < lines.length; i++) {
    let words = lines[i];

    align = aligns[i];
    let newLine = "";

    // if (words.join(" ").length < width) {
    //   let chars = words.join(" ").length;
    //   for (let i = 0; i < width - chars; i++) {
    //     newLine += " ";
    //   }

    //   if (align === "LEFT") {
    //     newLine = words.join(" ") + newLine;
    //   } else {
    //     newLine += words.join(" ");
    //   }
    if (words.join(" ").length > width) {
      let sub = words.shift();

      while (words.length > 0) {
        let word = words[0];
        if (`${sub} ${word}`.length > width) {
          newLine = sub;
          sub = words.shift();
        } else {
          sub += ` ${word}`;
          word = words.slice(1);
        }
      }
    } else {
      newLine = words.join(" ");
    }

    let chars = words.join(" ").length;
    for (let i = 0; i < width - chars; i++) {
      newLine += " ";
    }

    if (align === "LEFT") {
      newLine = words.join(" ") + newLine;
    } else {
      newLine += words.join(" ");
    }

    newLine = `*${newLine}*`;

    justified.push(newLine);
  }

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
