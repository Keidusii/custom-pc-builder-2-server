begin;

 CREATE TABLE IF NOT EXISTS cart (
    id SERIAL PRIMARY KEY
    , pc JSON
    , created timestamp without time zone not null DEFAULT now()
    , updated timestamp without time zone not null DEFAULT now()
  );