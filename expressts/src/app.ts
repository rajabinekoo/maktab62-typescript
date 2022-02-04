// const express = require('express')
import express, {Application} from 'express'
import api from './routers/api'

const port: number = 3000

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded())

app.use("/", api)

app.listen(port, function (): void {
    console.log(`Server is up on localhost:${port}`)
})
