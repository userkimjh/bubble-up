const express = require('express')
const { Pool } = require('pg')
const app = express()
const port = 3001
const cors = require("cors");
// const { create } = require('domain');
// const bp = require('body-parser');
// const bcrypt = require('bcrypt');
// const { application } = require('express');
// const saltRounds = 10;
// app.use(bp.json())
// app.use(bp.urlencoded({extended: true}));

app.use(cors());

const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
// const io  = new Server(server);

// Wends: Finish socket.io connection
// Thurs: Add random user connection
// Fri: finish Project


const io = new Server(server, {
  cors:{
    origin:"http://localhost:3000",
    methods: ["GET","POST"],
    }
});

io.on("connection", (socket) => {
  

  socket.on("disconnect", () => {
    
  });
})

app.listen(port, () => {
  
}) 


// const pool = new Pool({
//   host: 'localhost',
//   user: 'database-user'
// })

// app.get('/', (req, res) => {
//   res.json({test:'Hello World!'})
// })

// app.get('/test', (req, res) => {
//   res.json({test:'Hello World!'})
// })

// //user auth bycrpt and cookieparser
// const testDB = {
//   testUser: "password123"
// }

// async function createUser(username, password) {
//   const hashPassword =  await bcrypt.hash(password, saltRounds);
//   if (hashPassword && !(username in testDB)) {
//     testDB[username] = hashPassword
//   }
//   
// }

// app.get('/auth/', async (req, res) => {
//   const {username, password} = req.body;
//   
//   const match = await bcrypt.compare(password, testDB[username]);
//   
//   if (username in testDB && match) {
//     
//   }
//   res.send("compelete")
// })

// app.post('/auth/', (req, res) => {
//   const {username, password} = req.body;
//   createUser(username, password)
//     .then(() => {
//       res.status(200).send("added user")
//     })
// })

