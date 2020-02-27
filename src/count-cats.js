module.exports = function countCats(backyard) {
  let count = 0;

  backyard.forEach(element => {
    element.forEach(element => {
      if(element == "^^") count++;
    })
  });
  return count;
};

