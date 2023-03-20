const express= require('express')
const router = express.Router();
const path = require("path")

const pathdir = path.join(__dirname,"public")
console.log(pathdir)

router.get("/",(req,resp)=>{
    resp.sendFile(`${pathdir}/index.html`)


})

module.exports = router;