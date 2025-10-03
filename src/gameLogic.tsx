const icons = ["⚜️", "🎁", "🔔", "❤️", "♠️"];

function shuffleIcons() {
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
}
