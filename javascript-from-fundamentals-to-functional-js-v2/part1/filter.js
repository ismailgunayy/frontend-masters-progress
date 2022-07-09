import _ from 'underscore'

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
]


_.filter = function (list, cb) {
  const resultArr = []
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      if (cb(list[i], i, list) === true) {
        resultArr.push(list[i])
      }
    }
  } else {
    for (let key in list) {
      if (cb(list[key], key, list) === true) {
        resultArr.push(list[key])
      }
    }
  }
  return resultArr
}

const checkPresent = function (person, index, list) {
  return person.present === true
}

var possibleMurderers = _.filter(videoData, checkPresent)

console.log(possibleMurderers)
