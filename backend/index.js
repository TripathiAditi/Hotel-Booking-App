import express from "express";

const app = express();
const PORT = 30000;
app.listen(PORT, (req,res) =>{

    console.log(`Server running on PORT ${PORT}`);
})