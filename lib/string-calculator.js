module.exports = function(numberString) {
  if(numberString === '') {
    return 0;
  } else {
    var stringArray = numberString.split(',');
    return stringArray.reduce((previousValue, currentValue) => {
      return previousValue + parseInt(currentValue, 10);
    }, 0);
  }
}
