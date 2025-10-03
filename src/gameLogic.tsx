const icons = ["⚜️", "🎁", "🔔", "❤️", "♠️"];

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

function checkMatch() {}
