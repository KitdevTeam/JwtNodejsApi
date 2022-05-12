const catModel = require('../models/sousCategory');
module.exports = {
    addsousCategory: function(req,res){
        catModel.create(req.body,function(err,category){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'new sous-Category added',status: 200, data:category})
            }
        })
    },
    showsousCategory: function(req,res){
        catModel.find({}).populate('products').exec(function(err,category){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'list of sous-categories ',status: 200, data:category})
            }
        })

},
getsousCategoryById: function(req,res){
    catModel.findById({_id:req.params.id},function(err,Cat){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
            res.json({message:'users ',status: 200, data:Cat})
        }
    })
},
updateOnesousCategory: function(req,res){
    catModel.updateOne({_id:req.params.id},req.body,function(err,ssCat){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
           /*  User = req.body; */
            res.json({message:'Sous Category updated ',status: 200, data:ssCat})
        }
    })
},
deleteOnesousCategory: function(req,res){
    catModel.remove({_id:req.params.id},function(err,ssCat){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
           /*  User = req.body; */
            res.json({message:'Sous Category removed ',status: 200, data:ssCat})
        }
    })
},

}