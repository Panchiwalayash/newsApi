 const express=require("express")
const User =require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router()
const bycrpt=require("bcrypt")

router.post('/register',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid email').isLength({ max: 20 }),
    body('password',"Enter password atleast more than 5 character").isLength({ min: 5 })],async(req,res)=>{
   let success=false;
    // if there is error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        success=false
       let userExist=await User.findOne({email:req.body.email});
        if (userExist) {
      success=false;
           return res.status(400).json({error:"A user with this email already exist"})
        }
        const salt= await bycrpt.genSalt(10)
        const hashedPassword= await bycrpt.hash(req.body.password,salt)

        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })

        const user=await newUser.save()
        success=true
        res.status(200).send({user,success})
    } catch (error) {     
       res.status(500).json(error,"Some error occured")
    }
})

router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','password can not be blank').exists()],async(req,res)=>{
        let success=false;
        const errors = validationResult(req);

   if (!errors.isEmpty()) {
    success=false
      return res.status(400).json({ errors: errors.array() });
   } 
   
    try { 
        const user=await User.findOne({email:req.body.email})  
            if(!user){
                success=false
                res.status(400).json("user not found")
            } 

        const validPassword=await bycrpt.compare(req.body.password,user.password)
        if(!validPassword){
            success=false
            res.status(400).json("Invalid authentication")
        }
        success=true;
        res.status(200).json({user,success})
    } catch (error) {
        res.status(500).json(error,"Some error occured")
    }
})

module.exports=router;