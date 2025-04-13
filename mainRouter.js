'use strict'
const express = require('express')

const mainRouter = express.Router()

mainRouter.get('/', (req, res) => {
    res.send("Nothing to see here....")
})

module.exports = mainRouter