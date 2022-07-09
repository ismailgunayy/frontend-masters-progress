import _ from 'lodash'

_.forEachRight = function (collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = collection.length - 1; i >= 0; i--) {
      callback(collection[i], i, collection)
    }
  } else {
    for (let key of Object.keys(collection).reverse()) [
      callback(collection[key], key, collection)
    ]
  }
}

_.forEachRight({0: 1, 1: 2}, function(value) {
  console.log(value);
});
