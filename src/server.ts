import express, { json } from "express";
import { userRoutes } from "./routes/userRoutes";

const app = express();

app.use(json());
app.use(userRoutes);

app.listen(3000, ()=>{
    console.log("Running");
})