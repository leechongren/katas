const capitalize = word => {
  const splitWord = word.split("");
  const capitalizeEven = splitWord.map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    }
    return char;
  });
  const capitalizeOdd = splitWord.map((char, index) => {
    if (index % 2 === 1) {
      return char.toUpperCase();
    }
    return char;
  });
  return [capitalizeEven.join(""), capitalizeOdd.join("")];
};

module.exports = capitalize;
