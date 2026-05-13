// no 1

const sortFunction = (arr: number[]) => {
  let lowest: number = arr[0];
  let highest: number = arr[0];
  let sum: number = 0;

  for (let num of arr) {
    if (num < lowest) lowest = num;
    if (num > highest) highest = num;
    sum += num;
  }

  const average = sum / arr.length;

  return { lowest, highest, average };
};

console.log(sortFunction([3, 8, 6, 2, 1, 10]));

// no 2

const concatWords = (words: string[]) => {
  console.log(words);

  if (words.length === 1) {
    return words[0];
  } else {
    const lastWord = words.pop();
    const result = words.join(", ") + " and " + lastWord;
    return result;
  }
};

console.log(concatWords(["apple", "banana", "cherry", "date"]));

// no 3
const rockPaperScissor = (player: "rock" | "paper" | "scissor") => {
  const choices = ["rock", "paper", "scissor"];

  const computer = choices[Math.floor(Math.random() * 3)];

  if (player === computer) {
    return { result: "Draw", computer, player };
  }

  if (
    (player == "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return { result: "Win", computer, player };
  }

  return { result: "Lose", computer, player };
};

console.log(rockPaperScissor("scissor"));
