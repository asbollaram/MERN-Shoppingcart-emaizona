import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/api/products', (req, res) =>{
    res.send(data.products);
})

// app.listen(5000, ()=>{
//     // console.log("server is runing 5000")
// })

// 

const port =process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`server in runing at http://localhost:${port}`);
} )