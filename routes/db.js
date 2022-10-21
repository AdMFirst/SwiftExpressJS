const Pool = require("pg").Pool;

const pool = new Pool({
    user: "myapp1",
    password: "password",
    database: "myapp1db",
    hots: "localhost",
    port: 5432,
    max: 5,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 10000
});

module.exports = pool;