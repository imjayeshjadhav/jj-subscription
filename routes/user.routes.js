import { Router } from "express";

const userRouter = Router()

userRouter.get('/',(req,res)=>{
    res.send({title:"Get Users"})
})

userRouter.get('/:id',(req,res)=>{ // dynamic parameter (:id)
    res.send({title:"Get User Details"})
})

userRouter.post('/',(req,res)=>{
    res.send({title:"Create a user"})
})

userRouter.put('/:id',(req,res)=>{
    res.send({title:"Update Users"})
})

userRouter.delete('/:id',(req,res)=>{
    res.send({title:"Delete User"})
})

export default userRouter