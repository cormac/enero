var add = (numberString) => {
  if (numberString.length === 0) {
    return 0;
  }
//'//[***]\n1***2***3')
  var negativeNumbers = []
  var total = numberParser(numberString).reduce((previous, current) => {
    var currentInt = parseInt(current, 10);
    if (currentInt < 0) { negativeNumbers.push(currentInt) }
    if (currentInt > 1000) {
      return previous;
    }
    return previous + currentInt;
  }, 0);

  if (negativeNumbers.length > 0) {
    throw negativeNumbers.toString();
  }
  return total;
}

var numberParser = (numberString) => {
  var deliminator = getDelimiter(numberString);
  return numberSection(numberString).replace('\n', deliminator).split(deliminator);
};

var numberSection = (numberString) => {
  return hasDelimiter(numberString) ? numberString.slice(4,numberString.length) : numberString;
};

var getDelimiter = (numberString) => {
  // //a\n => a
  // undefined => ,
  // //[***]\n => ***
  if (!hasDelimiter(numberString)) {
    return ',';
  } numberString.slice(2,3) : ',';
};

var hasDelimiter = (numberString) => {
  return (numberString.slice(0,2) === '//');
};

module.exports = add;
