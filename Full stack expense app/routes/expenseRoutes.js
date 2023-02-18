const express = require('express');

const router = express.Router();

const Expense=require('../models/expense')

const expenseController=require('../controllers/expense')

router.get('/getexpense',expenseController.GetExpense)

router.post('/postexpense',expenseController.PostExpense)

router.delete('/deleteExpense/:id',expenseController.DeleteExpense)

router.put('/editExpense/:id',expenseController.UpdateExpense)

router.get('/getexpensebyid/:id',expenseController.GetExpenseByid)

module.exports=router