const db = require('../config/db.config');

//* IFFE
(async () =>{
    try {
        const connection = await db.createConnection();

        await connection.run(`
            CREATE TABLE IF NOT EXISTS users (
                id TEXT NOT NULL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            );
        `);

        console.log('Table created successfully')

        await connection.close();
    } catch (error) {
        console.log('Error creating table Users', error);
    }
})();