const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res) => {
    res.status(200).json({message:"hello Mr loverboy😔"})
})
app.listen(3004 , () => console.log("server is running on port 3004"))