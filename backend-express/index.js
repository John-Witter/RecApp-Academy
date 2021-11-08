import express from "express";
// import router from "./routes/questions";
const app = express();

app.use(express.json());



app.get("/firstwordsentviainternet", (req, res) => {
    res.send("lo");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));
