const{ Router } = require("express");

const UsersController = require("../controllers/UsersController");

const userRoutes = Router();

const usersController = new UsersController();

///MÉTODO POST
userRoutes.post("/", usersController.create);
userRoutes.put("/:id", usersController.update);

//Exportando as rotas
module.exports = userRoutes;