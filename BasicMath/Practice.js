

const pattern = (k, m) => {
  for (let i = 0; i < k+1; i++) {
    let line = "";

    let center = Math.ceil(m / 2);
    for (let j = 1; j < m+1; j++) {
      let colStart = center - i;
      let colEnd = center + i;
      if (j >= colStart && j <= colEnd) line += "*";
      else line += " ";
    }
    console.log(line);
  }
};

pattern(5, 13);

const evenlyDivides = (N) => {
  let count = 0;
  let number = N;
  while (number > 0) {
    let rem = number % 10;
    if (N % rem === 0) count++;
    number = Math.floor(number / 10);
  }
  return count;
};

// console.log(evenlyDivides(2446));
