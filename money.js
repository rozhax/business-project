const path = require('path');
const Database = require('better-sqlite3');
const bdcObject = new Database(path.join(__dirnmae, 'db' ,'totalmoney.db'));


bdcObject.exec(`
    CREATE TABLE IF NOT EXISTS register_totals 
    id SERIAL PRIMARY KEY,
    total_cash NUMERIC(12, 2) NOT NULL DEFAULT 0,
    total_credit NUMERIC(12, 2) NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
`)

module.exports = money;