'use strict'
const path = require('path')
const express = require('express')

const router = express.Router()
const classList = []
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// Define a RESTful interface
router.get('/api/list', (req, res) => {
    res.json(classList)
})

router.get('/api/get/:id', (req, res) => {
    res.json(classList[req.params.id])
})

router.post('/api/create', (req, res) => {
    console.log('Creating a new student')
    classList.push(req.body.student)
    res.redirect(req.baseUrl + '/create')
})

router.post('/api/delete', (req, res) => {
    console.log('Deleting a student')
    const index = parseInt(req.body.student_id)
    if(index < classList.length)
    {
        classList.splice(index, 1)
    }
    res.redirect(req.baseUrl + '/delete')
})

router.post('/api/edit', (req, res) => {
    console.log('Editing an existing student')
    const studentId = parseInt(req.body.student_id)
    const newName = req.body.new_name
    if(studentId < classList.length)
    {
        classList[studentId] = {student: newName}
    }
    res.redirect(req.baseUrl + '/edit')
})

module.exports = router