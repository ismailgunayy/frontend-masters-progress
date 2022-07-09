import _ from "underscore"

function createSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak: function () {
      console.log(`My name is ${name}`)
    },
  }
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"]

_.each(suspectList, function (suspect) {
  suspect.speak()
})

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    // loop through array
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list)
    }
  } else {
    // loop through object
    for (let key in list) {
      callback(list[key], key, list)
    }
  }
}

_.each(["sally", "georgie", "porgie"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1])
  } else {
    console.log(name, "is the oldest")
  }
})
