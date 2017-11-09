// Code your solution in this file
let drivers[]
function findMatching(drivers, name){
  return drivers.filter(function(e){
    name.toLowerCase()
    return e.name.toLowerCase === name
  })
}
