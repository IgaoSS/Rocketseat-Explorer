const sqliteConnection = require('../../sqlite');

const createUsers = require('./createUsers');

// Ele importa o createUsers, e depois vai colocando os scripts que precisam rodar dentro do schemas
async function migrationsRun(){
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;