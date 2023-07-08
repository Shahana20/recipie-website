import express from 'express' 
import cors from 'cors'
import mongoose from 'mongoose'

import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'

const app = express()

app.use(express.json())
app.use(cors())


app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);


const port  = 3001;
const url = 'mongodb://127.0.0.1:27017/recipes';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected successfully to the database');
        app.listen(port, () => {
            console.log('Server is running on port ' + port);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);
    });


// app.listen(5000,()=>console.log("server started"))

