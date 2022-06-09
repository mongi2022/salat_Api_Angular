const express = require('express')
const cors = require('cors')
const fs = require('fs');

const app = express()
app.use(express.json())
app.use(cors())

let dat = fs.readFileSync('data.json');
let salat = JSON.parse(dat);

// var d2 = new JJDateFormat("yyyy-MM-dd")
//
let result = salat.map(ele => ele.items)

app.get('/one/:date', (req, res) => {
    console.log('1')
    const d1 =  req.params.date //format date : yyyy-mm-dd
    const d = new Date(d1)
    console.log('d: ', d)
//formaté date
console.log(
 d.getFullYear().toString(),
 d.getMonth() + 1 ,
d.getDate())
const n = Number(d.getMonth() + 1)
const d3 = d.getFullYear().toString()+ '-' + n
 + '-' +
d.getDate()
console.log(d3)

    let fin = result[0].filter(el => el.date_for === d3)
    console.log(fin)
    res.send(fin)
})

app.get('/all', (req, res) => {
    let fin2 = result[0].filter(el => el.date_for)
    res.send(fin2)
})

app.listen(3001)