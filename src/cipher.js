const cipher = (str, num) => {
  if (typeof str !== 'string') return 'please enter a string';

  if (typeof num !== 'number') return 'please enter a number';

  const tempStorage = [];
  for (let i = 0; i < str.length; i++) {
    tempStorage.push(str.charAt(i));
  }

  const cipheredLetters = tempStorage.map(function (element) {
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
      if (element.charCodeAt(0) + num > 90) {
        return String.fromCharCode(element.charCodeAt(0) + num - 26);
      } else return String.fromCharCode(element.charCodeAt(0) + num);
    } else if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
      if (element.charCodeAt(0) + num > 122) {
        return String.fromCharCode(element.charCodeAt(0) + num - 26);
      } else return String.fromCharCode(element.charCodeAt(0) + num);
    } else return element;
  });

  return cipheredLetters.join('');
};

export { cipher };
