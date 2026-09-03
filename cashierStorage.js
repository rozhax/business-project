const path = require('path');
const Database = require('better-sqlite3');
const dbs = new Database(path.join(__dirnmae, 'db' ,'cashierProduct'));


dbs.exec(`
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    unit VARCHAR(20) NOT NULL DEFAULT 'piece', 
    barcode VARCHAR(64) UNIQUE NOT NULL,
    cost_price NUMERIC(10, 2) NOT NULL DEFAULT 0,   
    stock NUMERIC(10, 2) NOT NULL DEFAULT 0,      
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()


    CREATE OR REPLACE FUNCTION update_product_active_status()
RETURNS TRIGGER AS $$
BEGIN

    IF NEW.stock <= 0 THEN
        NEW.is_active := false;
    END IF;
    
    NEW.updated_at := now();
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_product_active_status
BEFORE UPDATE OF stock ON products
FOR EACH ROW
EXECUTE FUNCTION update_product_active_status();

`)


module.exports = cashierStorage;