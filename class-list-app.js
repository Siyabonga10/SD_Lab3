const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

document.querySelector('#search-text').addEventListener('input', (event) => {
  const prefix = document.querySelector('#search-text').value
  const matchingStudents = students.filter((student) => {
    return student.name.startsWith(prefix)
  })

  const studentsDiv = document.getElementById('students')
  studentsDiv.textContent = ''
  matchingStudents.forEach((student) => {
    const newStudent = document.createElement('div')
    const textContent = document.createTextNode(`${student.name}`)
    newStudent.appendChild(textContent)
    studentsDiv.appendChild(newStudent)
  })
})
