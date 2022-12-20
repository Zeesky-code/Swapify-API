import express from 'express';

const app = express();

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