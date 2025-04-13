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

const showStudents = document.getElementById('showStudents')

showStudents.addEventListener('click', () => {
  const studentsDiv = document.createElement('div')
  studentsDiv.setAttribute('id', 'studentsDiv')
  students.forEach((student) => {
    const studentDiv = document.createElement('div')
    const studentDetails = document.createTextNode(`Name: ${student.name}      Student Number: ${student.studentNumber}       YOS: ${student.yearOfStudy}`)
    const editButton = document.createElement('button')
    const editButtonText = document.createTextNode('Edit')
    editButton.appendChild(editButtonText)
    studentDiv.appendChild(studentDetails)
    studentDiv.appendChild(editButton)
    studentsDiv.appendChild(studentDiv)
  })
  document.body.appendChild(studentsDiv)
})

const deleteStudents = document.getElementById('deleteStudents')

deleteStudents.addEventListener('click', () => {
  const studentsDiv = document.getElementById('studentsDiv')
  if (studentsDiv) {
    document.body.removeChild(studentsDiv)
  }
})
