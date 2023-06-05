import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import Routes from "./server/routes/route.js"
const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use(cors())

app.use("/", Routes)
app.get("/", (req, res) => res.send("Hello From Express"))
app.all("*", (req, res) => res.send("That route does not exist"))
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))