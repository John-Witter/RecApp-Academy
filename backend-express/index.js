import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { questions } from "./routes/questions.js";
import { MONGO_URI } from "./config/keys.js";
const app = express();

// allows requests to server from any port / protocol
// invoking cors w/nothing is same as passing a wildcard
// typically not a good idea
// https://www.npmjs.com/package/cors
app.use(cors()); 

app.use(express.json());

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB Connected!"))
    .catch((e) => console.log(e));

app.get("/firstwordsentviainternet", (req, res) => {
    res.send("lo");
});

app.use("/api/questions", questions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));
