const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

const searchRouter = require('./routes/search.route')

const app = express();

const PORT = 9000 

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

// app.get('/', (req,res)=>{
//     res.status(200).json({
//         status: "true",
//         message: "Welcome to Swapify"
//     })
// })
app.get('/', (req, res) => {
    res.render('index', { name: 'Swapify' });
});

app.use('/search', searchRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})