const calculator = () => {
  const add = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
      return 'please enter a number';

    return num1 + num2;
  };

  const subtract = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
      return 'please enter a number';

    return num1 - num2;
  };

  const multiply = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
      return 'please enter a number';

    return num1 * num2;
  };

  const divide = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
      return 'please enter a number';

    if (num2 === 0) return 'Cannot divide by zero';

    return num1 / num2;
  };

  return { add, subtract, multiply, divide };
};

export { calculator };
