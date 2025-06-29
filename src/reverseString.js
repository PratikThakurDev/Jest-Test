const reverseString = (str) => {
  if (typeof str !== 'string') return 'wrong data type';

  const storingArr = [];
  for (let i = 0; i < str.length; i++) {
    storingArr.push(str.charAt(i));
  }
  return storingArr.reverse().join('');
};

export { reverseString };
