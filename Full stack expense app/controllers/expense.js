const Expense=require('../models/expense')

exports.GetExpense=(req,res,next)=>{
    Expense.findAll()
    .then((expenses)=>{
        res.json(expenses);
    })
    .catch((error)=>{res.send(error)})
}

exports.PostExpense=(req,res,next)=>{
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;
    Expense.create({
        amount:amount,
        description:description,
        category:category
    }).then((result)=>{
        res.json(result)
        console.log(result)
    })
    .catch((error)=>{
        res.send(error)
        console.log(error);})
}

exports.DeleteExpense=(req,res,next)=>{
    const prodId = req.params.id;
 console.log(prodId);
  Expense.findByPk(prodId)
    .then(expense => {
      return expense.destroy();
    })
    .then(result => {
        res.json(result);
      console.log('DESTROYED expense');
    })
    .catch(err => console.log(err));
}

exports.UpdateExpense=(req,res,next)=>{
    const prodId = req.params.id;
  const updatedAmount = req.body.amount;
  const updatedDescription = req.body.description;
  const updatedCategory = req.body.category;
  Expense.findByPk(prodId)
    .then(expense => {
      expense.amount = updatedAmount;
      expense.description = updatedDescription;
      expense.category = updatedCategory;
      return expense.save();
    })
    .then(result => {
      res.json(result)
      console.log('UPDATED EXPENSE!');
    })
    .catch(err => console.log(err));
}

exports.GetExpenseByid=(req,res,next)=>{
    const prodId=req.params.id
    Expense.findByPk(prodId)
    .then(expense=>{
      res.json(expense)
    })
    .catch(err=>{console.log(err)})
  }