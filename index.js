const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello!!! from my second Node Server chaklader hello');
});

const users = [
    {id:0,name:'john',email:'john@gmail.com',phone:01712},
    {id:1,name:'vohn',email:'bob@gmail.com',phone:01912},
    {id:2,name:'Don',email:'don@gmail.com',phone:01812},
    {id:3,name:'Mike',email:'Mike@gmail.com',phone:01612},
    {id:4,name:'jame',email:'Abir@gmail.com',phone:01412},
    {id:5,name:'jame',email:'jami@gmail.com',phone:01112}
]

app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users);
    }
    
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting post',req.body)
    res.json(newUser);
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','oranges']);
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('tak fazli');
})

app.listen(port,()=>{
    console.log('listening to port',port);
});