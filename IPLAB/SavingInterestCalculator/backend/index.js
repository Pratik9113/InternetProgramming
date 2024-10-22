import express from "express";
import cors from "cors";
import bodyParser from "body-parser"

const app = express();
const port = 4000

app.use(cors());
app.use(bodyParser.json());

app.post('/post', (req,res)=>{
    const {principal, age, period} = req.body;
    if(!principal || !age || !period){
        return res.status(400).json({success:false, error:"Please Provide All data "});
    }

    let rate;
    if(age > 60){
        rate = 0.07;
    }else{
        rate = 0.05;
    }

    const interest = principal*rate*period;

    res.status(200).json({success:true, message:"success", data : interest});
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});