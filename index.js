const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express()
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

const value = [{ "slip":{ "id":2,"advice":"do good and better "}},{ "slip":{ "id":2,"advice":"always bliss the lord"}},
{ "slip":{ "id":3,"advice":"work hard all the time "}},
{ "slip":{ "id":4,"advice":"be the best and top the rest "}},
{ "slip":{ "id":5,"advice":"do to other what you want expect from other  "}},
{ "slip":{ "id":6,"advice":" try to be the best makeup of self "}},
{ "slip":{ "id":7,"advice":" talk less and act right "}},
{ "slip":{ "id":8,"advice":" aspire the world with your word and skill"}},
{ "slip":{ "id":9,"advice":" focus on your dreams and overcome temptation "}},
{ "slip":{ "id":10,"advice":" pray always an do the needful"}}]




app.get('',async (req,res)=>{
    const random = Math.floor(Math.random() *10)
    // const advice = await fetch('https://api.adviceslip.com/advice');
    // const response =await advice.json()
    const response = value[random]
    const getadvice = response.slip;  
    res.render('index',{"advice":getadvice})
    console.log(random)

})


app.listen(3000,()=>{
    console.log('app is running at port 3000')
})