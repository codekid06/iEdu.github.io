//imports
const express=require('express');
const app=express();
const port=3000;
const fs=require('fs')
const bodyparser = require('body-parser');//For getting data by post request and save it to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/responsive', { useNewUrlParser: true });
//checking connection to DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erroe:'));
db.once('open', function () {
    console.log("CONNECTED TO DATABASE");
})
var entrySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
 
});
//MAking model
var infor = mongoose.model('collection', entrySchema);

//static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname +'public/css'));
app.use('/js',express.static(__dirname +'public/js'));
app.use('/img',express.static(__dirname +'public/img'));
app.use(express.urlencoded())

//Display indexhtml
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/view/index.html')
})
app.post('/', (req, res) =>{
    var myData = new infor(req.body);
    myData.save().then(() => {
    res.send("This item has been saved to the database")
    }).catch(() => {
    res.status(400).send("item was not saved to the databse")
});
});
//Listening to the port

// app.listen(port)//this will work but to make it better
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})