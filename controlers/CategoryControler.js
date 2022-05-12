const catModel = require('../models/Category');
module.exports = {
    addCategory: function(req,res){
        catModel.create(req.body,function(err,category){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'new Category added',status: 200, data:category})
            }
        })
    },
    showCategory: function(req,res){
        catModel.find({}).populate('ssCategories').exec(function(err,category){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'list of categories ',status: 200, data:category})
            }
        })
    },
    getCategoryById: function(req,res){
        catModel.findById({_id:req.params.id},function(err,Cat){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'category ',status: 200, data:Cat})
            }
        })
    },
    updateOneCategory: function(req,res){
        catModel.updateOne({_id:req.params.id},req.body,function(err,Cat){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
               /*  User = req.body; */
                res.json({message:'Category updated ',status: 200, data:Cat})
            }
        })
    },
    deleteOneCategory: function(req,res){
        catModel.remove({_id:req.params.id},function(err,Cat){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
               /*  User = req.body; */
                res.json({message:' Category removed',status: 200, data:Cat})
            }
        })
    },

}