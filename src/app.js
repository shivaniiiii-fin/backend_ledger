const express=require("express")
const cookieParser=require("cookie-parser")

const authRouter=require("./routes/auth.routes")
const accountRouter=require("./routes/account.routes")

const app=express()  //created express server instance and stored inside app. We would create server instance and config server but not start here.Start will be in server.js


//Middlewares
app.use(express.json())
app.use(cookieParser())


//APIs
app.use("/api/auth", authRouter)
app.use("/api/accounts",accountRouter)

module.exports=app