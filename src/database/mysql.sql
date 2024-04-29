show tables;

select * from usuarios;

CREATE TABLE IF NOT EXISTS usuarios (
  _id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  nombres VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  documento BIGINT NOT NULL UNIQUE,
  telefono BIGINT NOT NULL UNIQUE,
  correo VARCHAR(255) NOT NULL UNIQUE,
  usuario VARCHAR(255) NOT NULL UNIQUE,
  pass_1 VARCHAR(255) NOT NULL,
  pass_2 VARCHAR(255),
  estado INT NOT NULL,
  empresa INT NOT NULL,
  proceso INT NOT NULL,
  rol VARCHAR(255),
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  resetPasswordToken VARCHAR(255),
  resetPasswordExpires DATETIME
);

drop table usuarios;