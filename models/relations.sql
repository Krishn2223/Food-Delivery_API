--Organization Table
CREATE TABLE Organization (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

--Item Table
CREATE TABLE Item ( id INTEGER PRIMARY KEY,
    type VARCHAR(20) NOT NULL CHECK (type IN ('perishable', 'non-perishable')),
    description VARCHAR(255) NOT NULL
);

--Pricing Table
CREATE TABLE Pricing (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    item_id INTEGER NOT NULL,
    zone VARCHAR(50) NOT NULL,
    base_distance_in_km INTEGER NOT NULL,
    km_price FLOAT NOT NULL,
    fix_price FLOAT NOT NULL,
    FOREIGN KEY (organization_id) REFERENCES Organization(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
);

