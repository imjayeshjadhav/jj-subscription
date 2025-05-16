import { aj } from "../config/arcjet.js"

export const arcjetMiddleware =async (req,res,next) =>{
    try {
        const decision = await aj.protect(req)

        if (decision.isDenied()){
            if(decision.reason.isRateLimit()){
                return res.status(429).json({error:"Rate Limie Exceeded"})
            }

            return res.status(403).json({error:"Access Denied"})
        }

        next();
    } catch (error) {
        console.log(`Arcjet middleware error: ${error}`)
        next(error)
    }
}