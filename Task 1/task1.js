function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  return 'error';
}
module.exports = stringLength;