import { Express } from "express";
import CreateUserService from "../services/CreateUserServices";

class CreateUserController{
    handle(req, res){

        const createUserSevice = new CreateUserService;

        const nome = req.body.nome;
        const email = req.body.email;

        if(nome.lenght == 0 || email.lenght == 0){
           return res.status(400).json({messagem:"Prencha todos os campos"})
        }

        const user = createUserSevice.execute({nome, email})
        return res.status(200).json({user})
    }
}
export default CreateUserController;