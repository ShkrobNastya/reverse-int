module.exports = function reverse (n) {
  n=Math.abs(n);
  n=n+'';
  let arr=n.split('');
  arr.reverse();
  n=+arr.join('');
  return n;
}
