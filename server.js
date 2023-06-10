const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require('./config/connectDb.js')


dotenv.config();

connectDb();
const app=express()

app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    
    // backend working properly
});
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        }
    }
    catch (e) {
        resp.send("Something Went Wrong");
    }
    
});
//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
//app.use('/api/v1/users',require('./routes/UserRoutes'))

const PORT=8080

app.listen(PORT,() =>{
    console.log(`Server Running on ${PORT}`)
}
)
