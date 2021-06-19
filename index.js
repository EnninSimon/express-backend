const express = require("express");

const server = express();

server.listen(3000, ()=> console.log("Server is ready"))

//request handling
const handleHomeRequest = (req,res)=>{
    res.send("Home server respond")
}

const handleLoginRequest = (req, res)=>{
    res.send("Login server respond")
}

const handleSignupRequest = (req, res)=>{
    res.send("Signup request from server")
}
const handleUserRequest=(req, res)=>{
    res.send("User request from server")
}


server.post('/', handleHomeRequest)
server.get('/login', handleLoginRequest)
server.put('/signup', handleSignupRequest)
server.delete('/user', handleUserRequest)