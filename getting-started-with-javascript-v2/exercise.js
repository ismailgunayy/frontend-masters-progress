class Workshop {
  constructor(teacher) {
    this.teacher = teacher
  }

  ask(question) {
    console.log(this.teacher, question)
  }
}

var deepJS = new Workshop("Kyle")
var reactJS = new Workshop("Suzy")

deepJS.ask("Is 'prototype' a class?")
reactJS.ask("Isn't 'prototype' ugly?")
