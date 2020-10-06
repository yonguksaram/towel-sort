
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((result, item, i) => {
    return result.concat(i % 2 === 1 ? item.reverse() : item);
  }, []) : [];
}
