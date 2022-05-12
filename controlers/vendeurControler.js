const userModel = require('../models/vendeurModel');
const randtoken = require('rand-token');
const jwt = require("jsonwebtoken");

var bcrypt= require('bcrypt');
var refreshtokens = {};
module.exports ={
    validateVendeur:function(req,res,next){
     jwt.verify(req.headers['x-access-token'],req.app.get('secretkey'),function(err,decoded){
      if(err){
          res.json({status:'error',message:err.message,data:null})
      }else{
          req.body.userId = decoded.id;
          next();
      }
     });
    },
    //cookies site https://dev.to/mr_cea/remaining-stateless-jwt-cookies-in-node-js-3lle
    Logout:function(req,res,next){
       var refToken = req.body.refreshToken;
        console.log('logout',refToken);
        var token = jwt.verify(req.headers['x-access-token'],req.app.get('secretkey'))
        if(refToken  in refreshtokens){
         delete refreshtokens[refToken];
        }
        res.status(500).json({message:'token has expired',status:500})
       },
       refreshToken : function(req,res,next){
       var userid = req.body._id;
       var refreshToken = req.body.refreshToken;
       console.log(userid);
       console.log('refreshtoken',(refreshtokens[refreshToken]==userid))
       console.log('refreshtoken is in ',(refreshToken in refreshtokens))
       if((refreshToken  in refreshtokens) && refreshtokens[refreshToken]==userid)
{
    var user ={
    'id' : userid,
    }
    var token = jwt.sign(user, req.app.get('secretkey'),{expiresIn:3600})
    res.json({accesstoken:token})
    }else{
    res.sendStatus(401);
    }
    },
    //
    authenticate : function (req,res,next){
  userModel.findOne({
      email: req.body.email
  },function(err,userInfo){
    if(err) next(err);
    else{
        if(userInfo !=null){
            if(bcrypt.compareSync(req.body.password,userInfo.password)){
                var refreshtoken = randtoken.uid(256);
                refreshtokens[refreshtoken]= userInfo._id;
                console.log('cccc',refreshtokens[refreshtoken])
                const token = jwt.sign({
                    id:userInfo._id,
                  }, req.app.get('secretkey'),{expiresIn:'1h'});
                  res.json({
                      status :"success",
                      message:"user found  !!",
                      data: {user:userInfo,
                        accesstoken : token,
                        refreshtoken: refreshtoken}
                  });
            }
            else{
                res.json({status:"error",message:"invalid password ",data : null});

            }
        }else{
            res.json({status : "error", message:" invalid email !!",data : null});
        }
    }
  });
},
 addVendeur: function(req,res){
    userModel.create(req.body,function(err,User){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
            res.json({message:'user added',status: 200, data:User})
        }
    })
},
showVendeurs: function(req,res){
    userModel.find({}).populate('orders').exec(function(err,User){
      
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
            res.json({message:'users ',status: 200, data:User})
        }
    })
  
},
getByIdVendeur: function(req,res){
    userModel.findById({_id:req.params.id}).populate('orders').exec(function(err,User){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
            res.json({message:'users ',status: 200, data:User})
        }
    })
},
updateOneVendeur: function(req,res){
    userModel.updateOne({_id:req.params.id},req.body,function(err,User){
        if(err){
            console.log(err)
            res.json({message:'error',status:500,data:null});
        }else{
           /*  User = req.body; */
            res.json({message:'user updated ',status: 200, data:User})
        }
    })
},
deleteVendeur: function(req,res){
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

