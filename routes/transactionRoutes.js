const express=require('express');
const router = require('./userRoute');
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require('../controllers/transactioncntrl');

//router object
//const router=express.Router()

// add transaction post models
router.post("/add-transaction",addTransaction);

//edit tranasaction
router.post("/edit-transactions",editTransaction);

// delete transaction
router.post("/delete-transaction",deleteTransaction);
//get transactions
router.post("/get-transactions",getAllTransaction);

module.exports=router;