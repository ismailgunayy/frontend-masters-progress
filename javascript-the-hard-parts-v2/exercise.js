function UserCreatorFunc(name) {
	this.name = name;

	this.introduce = function () {
		console.log(`My name is ${this.name}`);
	};
}

const user1 = new UserCreatorFunc('Jack');
user1.introduce(); // "My name is Jack"

class UserClass {
	constructor(name) {
		this.name = name;
	}

	introduce() {
		console.log(`My name is ${this.name}`);
	}
}

const user2 = new UserClass('Jack');
user2.introduce(); // "My name is Jack"
