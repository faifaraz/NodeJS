
const express = require('express')
const app = express()
const PORT = 4000


app.get('', (req, res) => {
    res.send("Hello");
})

app.use(express.json());

app.post('/api/products', (req,res)=> {
    res.send(req.body);
    console.log(req.body)
})
app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`)
})