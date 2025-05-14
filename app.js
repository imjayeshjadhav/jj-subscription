import express from 'express'

const app =express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(5000, ()=>{
    console.log("Server running on port http://localhost:5000")
})

export default app;