// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(e){
    name.toLowerCase()
    return e.name.toLowerCase === name
  })
}