export default function shuffleArray(array) {
  const shuffleFakeArray = [...array];
  for (let i = shuffleFakeArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffleFakeArray[i];
    shuffleFakeArray[i] = shuffleFakeArray[j];
    shuffleFakeArray[j] = temp;
  }
  return shuffleFakeArray;
}
