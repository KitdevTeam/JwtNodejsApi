const prodModel = require('../models/Product');

module.exports = {
    //  ,function(err,prod){
      //  if(err){
       //     console.log(err)
         //   rs.json({message:'error',status:500,data:null});
        //}else{
          //  rs.json({message:'new prod added',status: 200, data:prod})
        //}
    //});
    zidProduct: async function(req,rs){
        //create req.body ou new model and add all object req.body.prix req.body.image ...
        try{
            const prod =await prodModel.create({prix:req.body.prix,image:req.file.filename });
            rs.json({message:'new prod added',status: 200, data:prod})
           
        }catch(e){
           rs.status(400).json({message:e,status:500,data:null});
        }
    },
    showProduct: function(req,res){
       //on ajoute populate pour afficher les refs du module order
        prodModel.find({}).populate('orders').exec(function(err,prod){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                console.log(prod)
                res.json({message:'list of products ',status: 200, data:prod})
            }
        })
    },
    updateOneProduct: function(req,res){
        prodModel.updateOne({_id:req.params.id},req.body,function(err,prod){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
               /*  User = req.body; */
                res.json({message:'product updated ',status: 200, data:prod})
            }
        })
    },
    getByIdProduct: function(req,res){
        prodModel.findById({_id:req.params.id},function(err,prod){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'users ',status: 200, data:prod})
            }
        })
    },
    updateOneProduct: function(req,res){
        prodModel.updateOne({_id:req.params.id},req.body,function(err,prod){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
               /*  User = req.body; */
                res.json({message:'order updated',status: 200, data:prod})
            }
        })
    },
    deleteOneProduct: function(req,res){
        prodModel.remove({_id:req.params.id},function(err,Product){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
               /*  User = req.body; */
                res.json({message:'Order removed ',status: 200, data:Product})
            }
        })
    },


}