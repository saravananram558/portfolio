const express=require('express')
const cors=require('cors')
var mysql=require('mysql')

app=express()
app.use(express.json())
app.use(cors())

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Saravanan',
    password: 'Saravanan@2000',
    database: 'portfolio'
})

connection.connect();

//get ALL data
app.get('/GetData',(req,res)=>{
    connection.query('select id,name,age,email,message from getInTouch where isDeleted=0;', function(error,results){
        if (error) {
            console.log("error",error);
        } else {
            console.log(results);
        }
        res.end(JSON.stringify(results));
    })
})

//get data by ID
app.get('/getUser/:id',(req,res)=> {
    connection.query('select id,name,age,email,message from getInTouch where id=?',[req.params.id],function(error,results){
        if (error) {
            console.log("error",error);
        } else {
            console.log(results);
        }
        res.end(JSON.stringify(results));
    })
})

//post the data
app.post('/postData',(req,res)=>{
    let {name,age,email,message}=req.body;
    connection.query('insert into getInTouch (name,age,email,message) values(?,?,?,?)',[name,age,email,message], function(error,results){
        if (error) {
            console.log("error",error);
        } else {
            console.log(results);
        }
        res.end(JSON.stringify(results));
    })
})

//put the data
app.put('/putData/:id',(req,res)=>{
    let{name,age,email,message}=req.body;
    connection.query('update getInTouch set name=?, age=?, email=?, message=? where id=?',[name,age,email,message,req.params.id],function(error,results){
        if (error) {
            console.log("error",error);
        } else {
            console.log(results);
        }
        res.end(JSON.stringify(results));
    })
})

//delete operation
app.put('/deleteData/:id',(req,res)=>{
    connection.query('update getInTouch set isDeleted=? where id=?',[1,req.params.id],function(error,results){
        if (error) {
            console.log("error",error);
        } else {
            console.log(results);
        }
        res.end(JSON.stringify(results));
    })
})

//hosting port
app.listen(4000,()=>{
    console.log(`i am watching you ${4000}`);
})
