function getStudentById(studentId) {
	return studentRecords.find(function matchId(student) {
		return student.id == studentId;
	});
}

function printRecords(recordIds) {
	const enrolledStudents = recordIds.map(getStudentById);

	enrolledStudents.sort(function sortByNameAscending(student1, student2) {
		const name1 = student1.name;
		const name2 = student2.name;

		if (name1 < name2) return -1;
		else if (name1 > name2) return 1;
		else return 0;
	});

	enrolledStudents.forEach(function printStudent(student) {
		console.log(
			`${student.name} (${student.id}): ${student.paid ? 'Paid' : 'Not Paid'}`
		);
	});
}

function paidStudentsToEnroll() {
	const notEnrolledStudents = studentRecords.filter(function needToEnroll(
		student
	) {
		return student.paid && !currentEnrollment.includes(student.id);
	});

	const notEnrolledStudentIds = notEnrolledStudents.map(function getStudentId(
		student
	) {
		return student.id;
	});

	return [...currentEnrollment, ...notEnrolledStudentIds];
}

function remindUnpaid(recordIds) {
	const unpaidStudentIds = recordIds.filter(function filterUnpaidStudents(id) {
		const student = getStudentById(id);
		return !student.paid;
	});

	printRecords(unpaidStudentIds);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
	{ id: 313, name: 'Frank', paid: true },
	{ id: 410, name: 'Suzy', paid: true },
	{ id: 709, name: 'Brian', paid: false },
	{ id: 105, name: 'Henry', paid: false },
	{ id: 502, name: 'Mary', paid: true },
	{ id: 664, name: 'Bob', paid: false },
	{ id: 250, name: 'Peter', paid: true },
	{ id: 375, name: 'Sarah', paid: true },
	{ id: 867, name: 'Greg', paid: false },
];

printRecords(currentEnrollment);
console.log('----');
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log('----');
remindUnpaid(currentEnrollment);

console.log('\n\n');

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
