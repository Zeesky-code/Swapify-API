import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.status(200).json({
        status: "true",
        message: "Welcome to Swapify"
    })
})


const PORT = 9000 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})