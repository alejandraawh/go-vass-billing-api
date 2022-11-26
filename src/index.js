const express = require("express");
const mongoose=require("mongoose");
const purchaseRoutes = require("./routes/purchase");
require("dotenv").config();
var cors=require("cors");
const app = express();
const port= process.env.PORT || 9000;
//middleware
app.use(express.json());
app.use(cors());
app.use('/govass/purchase',purchaseRoutes)

//routes
app.get('/',(req,res)=>{
    res.send('API');
})
//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error(error));

app.listen(port,()=>console.log('server conected'));