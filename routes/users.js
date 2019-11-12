const routerUser = require('express').Router();

const {users} = require('../data/users.js');
module.exports = routerUser;
routerUser.get('/users',(req,res)=> {
  res.send(users);
});
routerUser.get('/users/:id',(req,res)=> {
    const {id}=req.params;
    const user = users.find(user =>{
       return user.id === id 
    })
    if (user) {
    
        res.send(user)
    }
    else {
        res.status('404').send({ "message": "Нет пользователя с таким id" })
    }
    
        
    });