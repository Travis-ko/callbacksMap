function map(arr, cb){
  result = arr.map(function(word){
      return cb(word);
  });
  console.log(result);
}




var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


