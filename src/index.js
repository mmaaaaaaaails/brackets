module.exports = function check(str, bracketsConfig) {

  const strBrackets = str.split('');
  for (let i = 0; i < strBrackets.length; i++){
    for (let j = 0; j < bracketsConfig.length; j++){
      if (bracketsConfig[j][0] === strBrackets[i] && bracketsConfig[j][1] === strBrackets[i + 1]){
        strBrackets.splice(i, 2);
        i = i - 2;
      }
    }
  }
    return strBrackets.length === 0 ? true : false;
};
