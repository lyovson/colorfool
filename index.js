// Variables

const theColor = document.querySelector("#theColor");
const cssSys = document.querySelector("#cssSys");
const hexSys = document.querySelector("#hexSys");
const rgbSys = document.querySelector("#rgbSys");
const hslSys = document.querySelector("#hslSys");
const newGame = document.querySelector("#newGame");
const easyDiff = document.querySelector("#easyDiff");
const mediumDiff = document.querySelector("#mediumDiff");
const hardDiff = document.querySelector("#hardDiff");
const gameLevel = document.querySelector("#gameLevel");
const messageBox = document.querySelector("#messageBox");
const gameScore = document.querySelector("#gameScore");
const squares = document.querySelectorAll(".square");
const dopeMsgs = [
  "You're Hexy Babe!",
  "You're bringin' HexyBack!",
  "You're fillin' it!",
  "Paint me Baby!",
  "Hex Me, HSL Me, RGB ME!",
];
const nopeMsgs = [
  "You're so 8-bit!",
  "You should heck out Bob Ross.",
  "At least you can Paint it Black.",
  "Six time's a swarm.",
  "Maybe next won't be hexed.",
];
let currentSys = "hex";
let currentColors = [];
let currentColor;
let squaresLength = 9;
let theNum;
let score = 0;
let tries = 0;
let hasWon = false;
let currentLevel = 1;
const cssColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "Darkorange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];
let clr;
const infoBtn = document.querySelector("#info");
const linkBtn = document.querySelector("#exLink");
const infoDiv = document.querySelector("#infoDiv");

theLoop(currentSys);

// Functions

function theLoop(sys) {
  currentColors = [];

  theNum = Math.floor(Math.random() * squaresLength);

  for (let i = 0; i < squaresLength; i += 1) {
    const loopSquare = squares[i];

    if (sys === "hex") {
      checkDuplicates(newHEX);
    } else if (sys === "rgb") {
      checkDuplicates(newRGB);
    } else if (sys === "hsl") {
      checkDuplicates(newHSL);
    } else if (sys === "css") {
      checkDuplicates(newCSS);
    }

    loopSquare.style.height = loopSquare.style.width;
    loopSquare.classList.remove("nope");
    loopSquare.removeAttribute("id", "theSquare");
    loopSquare.removeEventListener("click", theGame);
    loopSquare.style.border = currentColors[i];
    loopSquare.childNodes[0].innerHTML = "";
    loopSquare.innerHTML = '<p class="squareP">';
    loopSquare.addEventListener("click", theGame);
    loopSquare.style.backgroundColor = currentColors[i];
    loopSquare.style.border = `3px solid ${currentColors[i]}`;
  }

  restart();
}

function theGame() {
  const gameSquare = this;
  const squareP = gameSquare.childNodes[0];
  let index;

  for (let i = 0; i < squaresLength; i += 1) {
    if (gameSquare === squares[i]) {
      index = i;
    }
  }

  const gameColor = currentColors[index];

  if (hasWon === false) {
    tries += 1;

    if (gameSquare === squares[theNum]) {
      hasWon = true;
      gameSquare.setAttribute("id", "theSquare");
      messageBox.innerHTML =
        dopeMsgs[Math.floor(Math.random() * dopeMsgs.length)];
      gameSquare.style.backgroundColor = gameColor;

      gameSquare.innerHTML = '<i class="fa fa-star" aria-hidden="true"></i>';
      setTimeout(function () {
        gameSquare.childNodes[0].style.opacity = "1";
      }, 100);

      if (squaresLength === 3) {
        if (tries === 1) {
          score += 250;
        } else {
          score += 100;
        }
      } else if (squaresLength === 6) {
        if (tries === 1) {
          score += 500;
        } else if (tries === 2) {
          score += 250;
        } else {
          score += 100;
        }
      } else if (squaresLength === 9) {
        if (tries === 1) {
          score += 1000;
        } else if (tries === 2) {
          score += 500;
        } else if (tries === 3) {
          score += 250;
        } else {
          score += 100;
        }
      }
    } else {
      messageBox.innerHTML =
        nopeMsgs[Math.floor(Math.random() * nopeMsgs.length)];
      gameSquare.style.backgroundColor = "#212121";
      squareP.innerHTML = gameColor;
      squareP.style.color = gameColor;
    }
    gameScore.innerHTML = `${score} pt`;

    clearSelection();
  } else if (hasWon === true) {
    theLoop(currentSys);
    currentLevel += 1;
    messageBox.innerHTML = "Push me!";
  }
}

function startAgain() {
  if (currentLevel > 1) {
    if (score / currentLevel >= 700) {
      messageBox.innerHTML =
        '<i class="fa fa-star" aria-hidden="true"></i>' +
        " " +
        '<i class="fa fa-star" aria-hidden="true"></i>' +
        " " +
        '<i class="fa fa-star" aria-hidden="true"></i>';
    } else if (score / currentLevel >= 300) {
      messageBox.innerHTML =
        '<i class="fa fa-star" aria-hidden="true"></i>' +
        " " +
        '<i class="fa fa-star" aria-hidden="true"></i>';
    } else {
      messageBox.innerHTML = '<i class="fa fa-star" aria-hidden="true"></i>';
    }
  } else {
    messageBox.innerHTML = "C'mon, give it a try!";
  }

  score = 0;
  gameScore.innerHTML = `${0} pt`;
  currentLevel = 1;
  gameLevel.innerHTML = `${0} lv`;
}

function restart() {
  currentColor = currentColors[theNum];
  gameLevel.innerHTML = `${currentLevel} lv`;
  tries = 0;
  hasWon = false;

  theColor.innerHTML = currentColor;

  for (let x = squares.length - 1; x >= squaresLength; x -= 1) {
    squares[x].classList.add("nope");
    squares[x].removeAttribute("id", "theSquare");
  }
}

function newRGB() {
  const rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${+Math.floor(Math.random() * 256)})`;
  return rgb;
}

function newHSL() {
  const hsl = `hsl(${Math.floor(Math.random() * 361)}, ${Math.floor(
    Math.random() * 101
  )}%, ${+Math.floor(Math.random() * 101)}%)`;
  return hsl;
}

function newHEX() {
  let hex = "#";
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  for (let i = 0; i < 6; i += 1) {
    hex += chars[Math.floor(Math.random() * 15)];
  }
  return hex;
}

function newCSS() {
  const css = cssColors[Math.floor(Math.random() * cssColors.length)];

  return css;
}

function clearSelection() {
  if (document.selection && document.selection.empty) {
    document.selection.empty();
  } else if (window.getSelection) {
    const sel = window.getSelection();
    sel.removeAllRanges();
  }
}

function checkDuplicates(func) {
  clr = func();
  while (currentColors.length < squaresLength) {
    if (currentColors.indexOf(clr) === -1) {
      currentColors.push(clr);
    } else {
      clr = func();
    }
  }
}

// Listeners

document.addEventListener("keypress", function (event) {
  const theKey = event.which;

  if (theKey > 58) {
    if (theKey === 82 || theKey === 114) {
      //       restart
      newGame.click();
    } else if (theKey === 83 || theKey === 120) {
      //      hex
      hexSys.click();
    } else if (theKey === 88 || theKey === 115) {
      //      css
      cssSys.click();
    } else if (theKey === 66 || theKey === 98) {
      //      rgb
      rgbSys.click();
    } else if (theKey === 76 || theKey === 108) {
      //      hsl
      hslSys.click();
    } else if (theKey === 73 || theKey === 105) {
      //      info
      infoBtn.click();
    } else if (theKey === 69 || theKey === 101) {
      //      easy
      easyDiff.click();
    } else if (theKey === 77 || theKey === 109) {
      //      medium
      mediumDiff.click();
    }
  } else if (theKey === 49) {
    //       1
    squares[6].click();
  } else if (theKey === 50) {
    //      2
    squares[7].click();
  } else if (theKey === 51) {
    //      3
    squares[8].click();
  } else if (theKey === 52) {
    //      4
    squares[3].click();
  } else if (theKey === 53) {
    //      5
    squares[4].click();
  } else if (theKey === 54) {
    //      2
    squares[5].click();
  } else if (theKey === 55) {
    //      7
    squares[0].click();
  } else if (theKey === 56) {
    //      8
    squares[1].click();
  } else if (theKey === 57) {
    //      9
    squares[2].click();
  } else if (theKey === 13) {
    //      ENTER
    const sq = document.querySelector("#theSquare");
    const hid = document.querySelector("#infoDiv.nope");
    if (!hid) {
      infoBtn.click();
    }
    if (sq) {
      sq.click();
    }
  }
});

cssSys.addEventListener("click", function () {
  currentSys = "css";
  theLoop("css");
  messageBox.innerHTML = "Those got names!";
});

hexSys.addEventListener("click", function () {
  currentSys = "hex";
  theLoop("hex");
  messageBox.innerHTML = "Ok, we're back to Hex!";
});

rgbSys.addEventListener("click", function () {
  currentSys = "rgb";
  theLoop("rgb");
  messageBox.innerHTML = "It's RGBaby!";
});

hslSys.addEventListener("click", function () {
  currentSys = "hsl";
  theLoop("hsl");
  messageBox.innerHTML = "Every day we're HSLin'!";
});

newGame.addEventListener("click", function () {
  startAgain();

  theLoop(currentSys);
});

easyDiff.addEventListener("click", function () {
  squaresLength = 3;
  theLoop(currentSys);
  messageBox.innerHTML = "Noooooooooobs..";
});

mediumDiff.addEventListener("click", function () {
  squaresLength = 6;
  theLoop(currentSys);
  messageBox.innerHTML = "So much tolerance for mediocrity!";
});

hardDiff.addEventListener("click", function () {
  squaresLength = 9;
  theLoop(currentSys);
  messageBox.innerHTML = "Eye of a Tiger!";
});

infoBtn.addEventListener("click", function () {
  infoDiv.classList.toggle("nope");
});

linkBtn.addEventListener("click", function () {
  window.open("https://www.twitter.com/lyovson", "_blank");
});

infoDiv.addEventListener("click", function () {
  infoBtn.click();
});
