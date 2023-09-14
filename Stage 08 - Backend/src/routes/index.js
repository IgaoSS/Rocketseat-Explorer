//Importanto o express o arquivo user.routes.js
const { Router } = require("express");
const usersRouter = require("./user.routes");

const routes = Router();

/*
Quando identificar que essa rota está passando o /users (está vindo no insomnia), 
ele irá direcionar para o usersRouter.
*/
routes.use("/users", usersRouter);

//Exportando as rotas
module.exports = routes;