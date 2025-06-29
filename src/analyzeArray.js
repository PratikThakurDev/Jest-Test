const analyzeArray = () => {
  const maxElement = (array) => {
    return Math.max(...array);
  };

  const minElement = (array) => {
    return Math.min(...array);
  };

  const length = (array) => {
    return array.length;
  };

  const average = (array) => {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const totalNo = array.length;
    return sum / totalNo;
  };

  return { maxElement, minElement, average, length };
};

export { analyzeArray };
