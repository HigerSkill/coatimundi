const conf = require('./configs');

const { Client } = require('pg');


const client = new Client({
    user: conf.username,
    host: conf.host,
    database: conf.database,
    password: conf.password,
    port: conf.port,
  })

client.connect()

  
module.exports = { client }