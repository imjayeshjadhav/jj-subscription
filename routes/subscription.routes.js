import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:"Get all subscriptions"})
})

subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:"Get subscriptions details"})
})

subscriptionRouter.post('/',(req,res)=>{
    res.send({title:"create subscriptions"})
})

subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:"Update subscriptions"})
})

subscriptionRouter.delete('/',(req,res)=>{
    res.send({title:"delete subscriptions"})
})

subscriptionRouter.get('/users/:id',(req,res)=>{
    res.send({title:"get all user subscriptions"})
})

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:"cancel subscriptions"})
})

subscriptionRouter.put('/upcoming-renewals',(req,res)=>{
    res.send({title:"Get upcoming renewals"})
})





export default subscriptionRouter