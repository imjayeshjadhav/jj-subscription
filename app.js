import express from 'express'
import { PORT } from './config/env.js'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connect from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'
import cookieParser from 'cookie-parser'

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser()) // Reads cookies from incoming request for storing user data

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/subscription', subscriptionRouter)

app.use(errorMiddleware)

app.get('/',(req,res)=>{
    res.send("Welcome to the app")
})

app.listen(PORT, async ()=> {
    console.log(`Server running on port http://localhost:${PORT}`)
    await connect()
})


export default app;