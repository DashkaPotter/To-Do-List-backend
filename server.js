const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./listRoutes')

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("We are connected to mongodb"))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, ()=>{
    console.log(`I am listening in PORT ${PORT}`)
})
//mongodb+srv://dashkapotter:<password>@cluster0.rp1bd3q.mongodb.net/?retryWrites=true&w=majority