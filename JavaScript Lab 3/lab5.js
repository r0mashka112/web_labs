var memo = new Map();

function fibb(n) {
  if (n === 1) {
    return 0;
  }
  else if (n === 2) {
    return 1;
  } 
  else {
    if (!memo.has(n)) {
      memo.set(n, fibb(n - 1) + fibb(n - 2));
    }
    return memo.get(n);
  }
}