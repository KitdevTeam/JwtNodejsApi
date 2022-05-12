const orderModel = require('../models/Order');
module.exports ={
addOrder: function(req,res){
    orderModel.create(req.body,function(err,Order){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
            res.json({message:'order added',status: 200, data:Order})
        }
    })
},
showOrder: function(req,res){
    orderModel.find({}).populate('User').exec(function(err,Order){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
            res.json({message:'Orders ',status: 200, data:Order})
        }
    })
  
},
getByIdOrder: function(req,res){
    orderModel.findById({_id:req.params.id},function(err,Order){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
            res.json({message:'Order ',status: 200, data:Order})
        }
    })
},
updateOneOrder: function(req,res){
    orderModel.updateOne({_id:req.params.id},req.body,function(err,Order){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
           /*  User = req.body; */
            res.json({message:'order updated',status: 200, data:Order})
        }
    })
},
deleteOneOrder: function(req,res){
    orderModel.remove({_id:req.params.id},function(err,Order){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
           /*  User = req.body; */
            res.json({message:'Order removed ',status: 200, data:Order})
        }
    })
},




}

