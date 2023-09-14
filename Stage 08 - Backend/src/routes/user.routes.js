const{ Router } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

const usersController = new UsersController();

///MÉTODO POST
userRoutes.post("/", usersController.create);

//Exportando as rotas
module.exports = userRoutes;