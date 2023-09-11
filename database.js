// Array to store student data
let students = [];

// Function to add a new student
function addStudent(event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;

  // Create a unique ID for the student
  const id = Math.random().toString(36).substr(2, 9);

  // Create a new student object
  const student = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    age: age,
    assignments: [],
    grades: []
  };

  // Add the student to the array
  students.push(student);

  // Reset form fields
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('age').value = '';

  // Display the updated student list
  displayStudents();
}

// Function to display the student list
function displayStudents() {
  const studentTableBody = document.getElementById('studentTableBody');
  studentTableBody.innerHTML = '';

  // Loop through each student
  students.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.age}</td>
      <td>${student.assignments.join(', ')}</td>
      <td>${student.grades.join(', ')}</td>
    `;
    studentTableBody.appendChild(row);
  });
}

// Function to search for students by name or last name
function searchStudents() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredStudents = students.filter((student) =>
    student.firstName.toLowerCase().includes(searchInput) ||
    student.lastName.toLowerCase().includes(searchInput)
  );
  displayFilteredStudents(filteredStudents);
}

// Function to display the filtered student list
function displayFilteredStudents(filteredStudents) {
  const studentTableBody = document.getElementById('studentTableBody');
  studentTableBody.innerHTML = '';

  filteredStudents.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.age}</td>
      <td>${student.assignments.join(', ')}</td>
      <td>${student.grades.join(', ')}</td>
    `;
    studentTableBody.appendChild(row);
  });
}

// Event listener for adding a new student
document.getElementById('studentForm').addEventListener('submit', addStudent);
