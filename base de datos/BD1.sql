CREATE TABLE usuario (
  cedula INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nombre VARCHAR(20)  NULL  ,
  apellido VARCHAR(20)  NULL  ,
  email VARCHAR(50)  NULL  ,
  saldo DOUBLE  NULL  ,
  contraseña VARCHAR(20)  NULL    ,
PRIMARY KEY(cedula));



CREATE TABLE equipos (
  IdEquipo INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  NombreEquipo VARCHAR(20)  NULL    ,
PRIMARY KEY(IdEquipo));



CREATE TABLE factura (
  IdFactura INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  usuario_cedula INTEGER UNSIGNED  NOT NULL  ,
  Apostado DOUBLE  NULL  ,
  Pagar DOUBLE  NULL  ,
  TotalCuotas DOUBLE  NULL  ,
  IdCLiente INTEGER UNSIGNED  NULL  ,
  Fecha DATE  NULL    ,
PRIMARY KEY(IdFactura)  ,
INDEX factura_FKIndex1(usuario_cedula),
  FOREIGN KEY(usuario_cedula)
    REFERENCES usuario(cedula)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE Detalle (
  factura_IdFactura INTEGER UNSIGNED  NOT NULL  ,
  equipos_IdEquipo INTEGER UNSIGNED  NOT NULL  ,
  IdDetalle INTEGER UNSIGNED  NOT NULL  ,
  IdLocal INTEGER UNSIGNED  NULL  ,
  IdVisitante INTEGER UNSIGNED  NULL  ,
  TipoApuesta VARCHAR(20)  NULL  ,
  ValorTipoApuesta VARCHAR(20)  NULL  ,
  Cuota DOUBLE  NULL    ,
PRIMARY KEY(factura_IdFactura, equipos_IdEquipo, IdDetalle)  ,
INDEX factura_has_equipos_FKIndex1(factura_IdFactura)  ,
INDEX factura_has_equipos_FKIndex2(equipos_IdEquipo),
  FOREIGN KEY(factura_IdFactura)
    REFERENCES factura(IdFactura)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(equipos_IdEquipo)
    REFERENCES equipos(IdEquipo)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);




