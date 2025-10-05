const icons = ["7", "🎁", "🔔", "❤️", "♠️"];
let numCoins = 500;

export function shuffleIcons(): string[] {
  let curIndex = icons.length;
  let shuffledArr = icons;

  while (curIndex != 0) {
    let randIndex = Math.floor(Math.random() * curIndex);
    curIndex--;

    [shuffledArr[curIndex], shuffledArr[randIndex]] = [
      shuffledArr[randIndex],
      shuffledArr[curIndex],
    ];
    return shuffledArr;
  }
  return ["❓"];
}

export function getRandomIcon() {
  const shuffledArr = shuffleIcons();
  if (shuffledArr) {
    return shuffledArr[Math.floor(Math.random() * shuffledArr.length)];
  } else {
    return "❓";
  }
}

export function win({ numMatch }: any) {
  if (numMatch === 0 || numMatch === 1) {
    return;
  }

  switch (numMatch) {
    case 2:
      numCoins += 200;
      break;
    case 3:
      numCoins += 500;
      break;
    case 4:
      numCoins += 1000;
      break;
    case 5:
      numCoins += 2000;
      break;
  }
}
