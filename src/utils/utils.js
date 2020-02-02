function sum(a, b) {
    return a + b;
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
module.exports = sum;