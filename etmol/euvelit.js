var args = {
  name: 'John',
  age: 25,
  occupation: 'Developer'
};

for (var key in args) {
  console.log(key + ': ' + args[key]);
}
