const express = require("express");
const purchaseSchema = require("../models/purchase");


const router = express.Router();

// create a purchase
router.post("/savePurchase", (req,res)=>{
    const travel= travelSchema(req.body);
    travel
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//get all the information of the purchases
router.get("/getPurchaseInformation", (req,res)=>{
    travelSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});


//get a purchase information
router.get("/getPurchaseInformation/:id", (req,res)=>{
    const{ id }=req.params;
    travelSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//update a purchase information
router.put("/getPurchaseInformation/:id", (req,res)=>{
    const{ id }=req.params;
    const{ nameTravel, userName, startDate,endDate,email, price, purchaseStatus}=req.body;
    purchaseSchema
    .updateOne({_id:id},{ $set: {nameTravel, userName,startDate,endDate,email, price, purchaseStatus}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//delete a purchase information
router.delete("/getPurchaseInformation/:id", (req,res)=>{
    const{ id }=req.params;
    purchaseSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports= router;
