const toCommaFixed = (num: number, fixed: number) => {
  const dotFixedString = num.toFixed(fixed).toString();
  const dotIndex = (dotFixedString.length - 1) - fixed;

  return dotFixedString
    .split('')
    .map((str, i) => (i === dotIndex ? ',' : str))
    .join('');
};

export default toCommaFixed;
