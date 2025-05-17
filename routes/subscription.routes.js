import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router()

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:"Get all subscriptions"})
})

subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:"Get subscriptions details"})
})

subscriptionRouter.post('/',authorize,createSubscription)

subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:"Update subscriptions"})
})

subscriptionRouter.delete('/',(req,res)=>{
    res.send({title:"delete subscriptions"})
})

subscriptionRouter.get('/user/:id',authorize, getUserSubscription)

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:"cancel subscriptions"})
})

subscriptionRouter.put('/upcoming-renewals',(req,res)=>{
    res.send({title:"Get upcoming renewals"})
})





export default subscriptionRouter