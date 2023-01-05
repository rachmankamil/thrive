import "./configs/env.js"
import express from "express"
import userRoute from "./users/users.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1", userRoute)

// start server
app.listen(process.env.API_PORT, ()=>{
    console.log(`Express API is listening on port ${process.env.API_PORT}`);
})