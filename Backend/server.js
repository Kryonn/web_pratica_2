import express from "express"
import publicRouter from "./routes/public.routes.js"
import cors from "cors"
import "dotenv/config"
import "./database/init.js"

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use('/public', publicRouter);

app.listen(port, () => {
    console.log("Servidor aberto na porta: ", port);
});