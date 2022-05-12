const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb) =>{
        console.log('files',req.filename);
        cb(null,file.originalname);
    }
});

const filefilter=(req,file,cb) =>{
if(file.mimetype =='image/jpeg' || file.mimetype =='image/png'){
    cb(null,true);
}else{
    cb(null,false);
 }
}
//http://expressjs.com/en/resources/middleware/multer.html
const upload =multer({storage:storage,fileFilter:filefilter});
module.exports = upload;