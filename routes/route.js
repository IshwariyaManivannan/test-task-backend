const express=require('express')
const router=express.Router();
const user=require("../controller/user")


router.post('/signup',user.signup)
router.post('/login',user.login)
router.get('/get/:id',user.fetch)   
router.post('/update/:id',user.update)
router.post('/insert/:id',user.insert)

module.exports=router;