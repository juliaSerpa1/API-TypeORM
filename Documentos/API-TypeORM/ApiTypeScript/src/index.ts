import "reflect-metadata"
import express from "express";
import { router } from "./routes";
import createConnection from "./database";

createConnection();
const server = express();

server.use(router);

server.listen(5000, ()=>{
    console.log("server rodando")
})

