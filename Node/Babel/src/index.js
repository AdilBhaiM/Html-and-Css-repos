// import path from 'path';
import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res)=>{
    res.send('Hello 7667676776')
})

 app.listen(port, ()=>{
    console.log(`Example app is listening at localhost:${port}`)
 })