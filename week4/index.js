const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let todos=[];

app.get('/', (req, res) => {
  res.json({
    todos
  })
})
app.get('/date',(req,res)=>{
    res.send('Today in 22th of july 2025')
})
app.post('/',(req,res)=>{
  const {title,id} = req.body;

    todos.push({
        title,
        id
    })
     res.status(201).json({ title, id })
})
app.delete("/",(req,res)=>{

})
app.get('/health',(req,res)=>{
  res.send('server is working')
})


app.listen(3000);
