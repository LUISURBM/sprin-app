DROP TABLE planets IF EXISTS;
DROP TABLE persons IF EXISTS;


CREATE TABLE autores (
  id         INTEGER IDENTITY PRIMARY KEY,
  first_name VARCHAR(2000),
  dob       DATE,
  ciudad    VARCHAR(2000),
  correo    VARCHAR(2000)
);
CREATE INDEX autores_first_name ON autores (first_name);


CREATE TABLE editoriales (
  id         INTEGER IDENTITY PRIMARY KEY,
  first_name VARCHAR(2000),
  dob       DATE,
  direccion VARCHAR(2000),
  ciudad    VARCHAR(2000),
  correo    VARCHAR(2000),
  contador  INTEGER DEFAULT -1
);
CREATE INDEX editoriales_first_name ON editoriales (first_name);


CREATE TABLE libros (
  id            INTEGER IDENTITY PRIMARY KEY,
  first_name    VARCHAR(2000),
  genero        VARCHAR(2000)
  paginas       INTEGER
  editorial     INTEGER
  autor         INTEGER
);
CREATE INDEX libros_first_name ON libros (first_name);
ALTER TABLE ADD FOREIGN KEY (editorial) REFERENCES editoriales(id);
ALTER TABLE ADD FOREIGN KEY (autor) REFERENCES autores(id);
