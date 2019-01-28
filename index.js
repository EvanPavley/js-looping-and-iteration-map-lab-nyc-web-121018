// Code your solution in this file.
function lowerCaseDrivers(arr) {
  let new_arr = [];
  arr.map(function(name){
    new_arr.push(name.toLowerCase());
  })
  return new_arr;
}

function nameToAttributes(arr) {
  let new_arr = []
  arr.map(function(name){
    const name_arr = name.split(' ');
    new_arr.push({firstName: name_arr[0], lastName: name_arr[1]});
  });
  return new_arr;
}

function attributesToPhrase(arr) {
  return arr.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}
