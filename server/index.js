
// const express = require('express')

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to DB")
})

// const app = express()
// const PORT = 3000


// app.get('', (req, res) => {
//     res.send("Hello");
// })

// app.use(express.json());

// app.post('/api/products', (req,res)=> {
//     res.send(req.body);
//     console.log(req.body)
// })

// mongoose.connect(process.env)
// app.listen(PORT, ()=> {
//     console.log(`Server running on PORT ${PORT}`)
// })