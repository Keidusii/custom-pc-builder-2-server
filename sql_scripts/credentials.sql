BEGIN;

CREATE TABLE IF NOT EXISTS credentials (
  id SERIAL PRIMARY KEY
  , email TEXT NOT NULL
  , password TEXT NOT NULL
  , created timestamp without time zone not null DEFAULT now()
  , updated timestamp without time zone not null DEFAULT now()
);