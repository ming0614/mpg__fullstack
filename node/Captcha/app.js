const express = require('express')
const captcha = require('./captcha.js')
const path = require('path')
const app = express()
const port = 3000
const cookieParase = require('cookie-parser');
app.use(cookieParase());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/captcha',(req,res)=>{
    captcha.createCaptcha(req,res)
})

app.get('/login',(req,res)=>{
    res.render('login',{
        
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
