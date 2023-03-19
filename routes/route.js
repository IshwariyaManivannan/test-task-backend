const express=require('express')
const router=express.Router();
const user=require("../controller/user")


router.post('/signup',user.signup)
router.post('/login',user.login)
router.get('/get',user.fetch)
router.post('/update',user.update)
router.post('/insert',user.insert)

module.exports=router;