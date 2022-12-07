const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootpass',
    database: 'mineralDB'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM mineral_table"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert', (req, res) => {

    const imageURL = req.body.imageURL
    const mineralTitle = req.body.mineralTitle
    const mineralDescription = req.body.mineralDescription

    const sqlInsert = "INSERT INTO mineral_table (imageURL, mineralTitle, mineralDescription) VALUES (?,?,?)"
    db.query(sqlInsert, [imageURL, mineralTitle, mineralDescription], (err, result) => {
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log('running on port 3001')
})