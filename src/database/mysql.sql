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


+----------------------+--------------+------+-----+-------------------+-------------------+
| Field                | Type         | Null | Key | Default           | Extra             |
+----------------------+--------------+------+-----+-------------------+-------------------+
| _id                  | char(36)     | NO   | PRI | uuid()            | DEFAULT_GENERATED |
| nombres              | varchar(255) | NO   |     | NULL              |                   |
| apellidos            | varchar(255) | NO   |     | NULL              |                   |
| documento            | bigint       | NO   | UNI | NULL              |                   |
| telefono             | bigint       | NO   | UNI | NULL              |                   |
| correo               | varchar(255) | NO   | UNI | NULL              |                   |
| usuario              | varchar(255) | NO   | UNI | NULL              |                   |
| pass_1               | varchar(255) | NO   |     | NULL              |                   |
| pass_2               | varchar(255) | YES  |     | NULL              |                   |
| estado               | int          | NO   |     | NULL              |                   |
| empresa              | int          | NO   |     | NULL              |                   |
| proceso              | int          | NO   |     | NULL              |                   |
| rol                  | varchar(255) | YES  |     | NULL              |                   |
| fecha_creacion       | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| resetPasswordToken   | varchar(255) | YES  |     | NULL              |                   |
| resetPasswordExpires | datetime     | YES  |     | NULL              |                   |
+----------------------+--------------+------+-----+-------------------+-------------------+

drop table usuarios;