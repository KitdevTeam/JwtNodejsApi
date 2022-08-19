const userModel = require('../models/UserModel');
const randtoken = require('rand-token');
const jwt = require("jsonwebtoken");

module.exports={

    addUser: function(req,res){
    userModel.create(req.body,function(err,User){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'user added',status: 200, data:User})
            }
        })
    },
    showUser: function(req,res){
        userModel.find({}).exec(function(err,User){
          
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'users ',status: 200, data:User})
            }
        })
      
    },
    getByIdUser: function(req,res){
        userModel.findById({_id:req.params.id}).exec(function(err,User){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
                res.json({message:'users ',status: 200, data:User})
            }
        })
    },
    updateOneUser: function(req,res){
        userModel.updateOne({_id:req.params.id},req.body,{new:false,runValidators:false},function(err,User){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
               /*  User = req.body; */
                res.json({message:'user updated ',status: 200, data:User})
            }
        })
    },
    deleteOneUser: function(req,res){
        userModel.remove({_id:req.params.id},function(err,User){
            if(err){
                console.log(err)
                res.json({message:'error',status:500,data:null});
            }else{
               /*  User = req.body; */
                res.json({message:'User removed ',status: 200, data:User})
            }
        })
    },
    
    }
    
    
