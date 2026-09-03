const path = require('path');
const Database = require('sqlite3');
const dbCashier = path.join(__dirnmae, 'cashier.db');

const bdcObject = new dbCashier();

bdcObject.exec('
    CREATE TABLE IF NOT EXISTS money(
    )
    ')

