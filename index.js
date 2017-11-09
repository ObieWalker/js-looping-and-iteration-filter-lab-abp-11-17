// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
  return drivers.filter(function(e){
    //name.toLowerCase()

    return e === (/name/i)
  })
}
function fuzzyMatch(drivers, subName){
  let l= subName.length
  return drivers.filter(function (e){
    return e.slice(0,l) == subName
  })
}
function matchName(drivers, matchName){
  return drivers.filter(function (e){
    return e.name == matchName
  })
}
