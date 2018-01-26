module.exports = (comparator, opt1, opt2) => {
  if (comparator) {
    return typeof opt1 === 'function' ? opt1() : opt1;
  }
  return typeof opt2 === 'function' ? opt2() : opt2;
};
