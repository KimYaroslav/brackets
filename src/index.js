module.exports = function check(str, bracketsConfig) {

  let objConf = Object.fromEntries(bracketsConfig);
  let objKey = [];
  let arr = [];

  for (let key in objConf) {
    objKey.push(key);
  };

  for (let i = 0; i < str.length; i++) {
    let elem = str[i];

    if (arr.length === 0) {

      if (objKey.includes(elem)) {
        arr.push(elem);
      } else return false;

    } else {

      let previous = arr[arr.length - 1];

      if (objKey.includes(elem)) {
        if ((objConf[elem] === elem) && (objConf[previous] === elem)) {
          arr.pop();
        } else {
          arr.push(elem);
        }
      } else {
        if (objConf[previous] === elem) {
          arr.pop();
        } else {
          return false;
        }
      }
    }
  }
  return Boolean(arr.length === 0);
}