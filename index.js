'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const classRoutes = require('./classRoutes.js')
const mainRouter = require('./mainRouter.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', mainRouter)
app.use('/class', classRoutes)

app.listen(3000, (err) => {
    if(err) {
        console.log('App failed to start')
    }
    else {
        console.log('App running on port 3000')
    }
})