// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
  return drivers.filter(function(e){
    //name.toLowerCase()
    return e === name
  })
}
