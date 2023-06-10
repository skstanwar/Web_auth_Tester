import User from '../userModel/Model.js'
import asyncHandler from 'express-async-handler'

const register = asyncHandler(async(req, res)=>{
   const {username, challenge} = req.body;
      const temp= new User({

         username: username,
         challenge: challenge

         
      })
      await temp.save();
      res.json(temp);
      const ss=  await User.find({});
        console.log(ss);

})
export {register }

