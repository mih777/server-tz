const express = require("express");
const fs = require("fs");
const cors = require("cors")
    
const app = express();

app.use(cors())
  
const filePath = "users.json";

app.get("/", async(req, res) => {
       
    const content = fs.readFileSync(filePath,"utf8");
    const users = await JSON.parse(content);
    res.send(users);
});

   
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});