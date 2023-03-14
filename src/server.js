import Express from "express"
import listEndpoints from "express-list-endpoints"
import cors from "cors"
import mongoose from "mongoose"
import { badRequestHandler, notFoundHandler, genericErrorHandler } from "./errorHandlers.js"
import blogpostsRouter from "./blogposts/index.js"

const server = Express()
const port = process.env.PORT || 3001

//Middlewares

server.use(cors())
server.use(Express.json())

//Endpoints

server.use("/blogposts", blogpostsRouter)

//Error Handlers
server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on("connected", () => {
    console.log("Connection established to Mongo!")
    server.listen(port, () => {
        console.table(listEndpoints(server))
        console.log(`Server is running on port ${port}`)
    })
})