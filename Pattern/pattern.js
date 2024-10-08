/** Square or Rectangle */
const squarePattern = (k, m) => {
  for (let i = 0; i < k; i++) {
    let line = "";
    for (let j = 0; j < m; j++) {
      line += "*";
    }
    console.log(line);
  }
};
// squarePattern(5, 5);

/* Another Method */
const anotherSquarePattern = (k, m) => {
  for (let i = 0; i < k; i++) {
    console.log("*".repeat(m));
  }
};
// anotherSquarePattern(5,5)

/** Increasing Right angle Triangle */
const increasingRightAngle = (k, m) => {
  for (let i = 0; i < k; i++) {
    let line = "";
    for (let j = m - i; j <= m; j++) {
      line += "*";
    }
    console.log(line);
  }
};
// increasingRightAngle(5, 5);


/* Another Method */
const anotherIncreasingRightAngle = (k, m) => {
  for (let i = 1; i < k+1; i++) {
    console.log("*".repeat(i));
  }
};
// anotherIncreasingRightAngle(5,5)


/** Decreasing Right angle Triangle  */
const decreasingRightAngle = (k, m) => {
  for (let i = 0; i < k; i++) {
    let line = "";
    for (let j = 0; j < m-i; j++) {
      line += "*";
    }
    console.log(line);
  }
};
// decreasingRightAngle(5, 5);

/* Another Method */
const anotherDecreasingRightAngle = (k, m) => {
  for (let i =k; i > 0; i--) {
    console.log("*".repeat(i));
  }
};
// anotherDecreasingRightAngle(5, 5);


/** Increasing Pyramid */
const increasingPyramid = (k, m) => {
  for (let i = 0; i < k ; i++) {
    let line = "";

    let center = Math.ceil(m / 2);
    for (let j = 1; j < m + 1; j++) {
      let colStart = center - i;
      let colEnd = center + i;
      if (j >= colStart && j <= colEnd) line += "*";
      else line += " ";
    }
    console.log(line);
  }
};
// increasingPyramid(7, 13);

/* Another  Increasing Pyramid */

const anotherIncreasingPyramid = (k, m) => {
  let j = 1;
  let spaces = Math.floor(m / 2);
  for (let i = 0; i < k; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(j) + " ".repeat(spaces));
    j += 2;
    spaces -= 1;
  }
};
// anotherIncreasingPyramid(7, 13);


/**  Decreasing Prymaid */
const decreasingPyramid = (k,m) => {
  let colStart = 1;
  let colEnd = 13;
  for (let i = 0; i < k; i++) {
    let line = ""
    for (let j = 1; j <= m; j++) {
       if (j >= colStart && j <= colEnd) line += "*";
       else line += " ";
    }
    colStart ++
    colEnd --
    console.log(line)
    
  }
}
// decreasingPyramid(7,13)

/* Another  Decreasing Pyramid */
const anotherDecreasingPyramid = (k, m) => {
  let j = m;
  let spaces =0;
  for (let i = 0; i < k; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(j) + " ".repeat(spaces));
    j -= 2;
    spaces += 1;
  }
};
// anotherDecreasingPyramid(7, 13);



