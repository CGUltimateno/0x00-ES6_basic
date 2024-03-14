interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');

    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;

    row.appendChild(firstName);
    row.appendChild(location);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);