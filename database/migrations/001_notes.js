const client = require('../utils').client;

// const sql = utils.sql;

client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"', (err, res) => {
    console.log(err, res)
})

client.query(
    `CREATE TABLE note (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        val text,
        created timestamp DEFAULT current_timestamp,
        updated timestamp
    )`,
    (err, res) => {
        console.log(err, res);
        client.end();
    }
)
