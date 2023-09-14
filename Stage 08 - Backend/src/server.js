//Importar o express errors
require("express-async-errors");

//Importando as pastas
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require('express');
const routes = require("./routes");

migrationsRun();

//Inicializou o express
const app = express();
app.use(express.json());

//Chegando nesse ponto, ele irá usar as rotas que estão declaradas no routes (pasta routes)
app.use(routes);

app.use( (error, request, response, next) => {
    //Caso seja um erro gerado pelo lado do cliente
    //Verifica se é um erro que vem do AppError
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

//Criou uma porta onde a API vai ficar esperando requisições e devolvendo respostas
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));