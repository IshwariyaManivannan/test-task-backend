const express=require('express')
const router=express.Router();
const user=require("../controller/user")


router.post('/signup',user.signup)
router.post('/login',user.login)
router.get('/get',user.fetch)
router.post('/update',user.update)

module.exports=router;