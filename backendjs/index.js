const express = require('express')
 const app = express()
require('dotenv').config()


const port = process.env.PORT 

const {display} = require('./server')
 app.get('/test',display())

app.get('/first', (req,res)=>{
    res.send("hello world")
})

app.listen(port, ()=>{
    console.log(`Server started at port: ${port}`)
})


























 
// console.log("this is index page")

// // let  display1 = display()
// // console.log(display1)
// // console.log(display())
// console.log(print)