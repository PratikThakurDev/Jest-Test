function capitalize(str) {
  const string = str.trim();
  const firstLetter = string.charAt(0).toUpperCase();
  const finalStr = firstLetter + string.slice(1);
  return finalStr;
}

export { capitalize };
