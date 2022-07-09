import _ from 'underscore'

_.map = function (list, callback) {
  const arr = []
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      arr.push(callback(list[i], i, list))
    }
  } else {
    for (let key in list) {
      arr.push(callback(list[key], key, list))
    }
  }

  return arr
}

var numbers = [1, 2, 3]

var squaredNumbers = _.map(numbers, function (item, index, list) {
  console.log(`The number '${item}' at index '${index}' of the list '[${list}]' is getting squared.`)
  return item ** 2
})

console.log(squaredNumbers)
