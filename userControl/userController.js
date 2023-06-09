import User from '../userModel/Model.js'
// import asyncHandler from 'express-async-handler'

 async function temp(){
    const users = await User.find({})
   console.log(users);


}
export {temp}

