import { Express, Router } from "express";
import CreateUserController from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

router.get("/", (req, res, next) =>{
    return res.json("Bem vindo na api")
});

router.get("/usuarios", createUserController.handle);

export {router};