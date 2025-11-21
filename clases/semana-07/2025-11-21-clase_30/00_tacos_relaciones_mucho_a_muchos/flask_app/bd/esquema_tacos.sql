-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema esquema_tacos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `esquema_tacos` DEFAULT CHARACTER SET utf8 ;
USE `esquema_tacos` ;

-- -----------------------------------------------------
-- Table restaurantes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table tacos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tacos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tortilla` VARCHAR(45) NULL,
  `guiso` VARCHAR(45) NULL,
  `salsa` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `restaurante_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tacos_restaurantes_idx` (`restaurante_id` ASC),
  CONSTRAINT `fk_tacos_restaurantes`
    FOREIGN KEY (`restaurante_id`)
    REFERENCES `restaurantes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table complementos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `complementos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_complemento` VARCHAR(45) NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table complementos_en_tacos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `complementos_en_tacos` (
  `taco_id` INT NOT NULL,
  `complemento_id` INT NOT NULL,
  PRIMARY KEY (`taco_id`, `complemento_id`),
  INDEX `fk_complementos_en_tacos_tacos_idx` (`taco_id` ASC),
  INDEX `fk_complementos_en_tacos_complementos_idx` (`complemento_id` ASC),
  CONSTRAINT `fk_complementos_en_tacos_tacos`
    FOREIGN KEY (`taco_id`)
    REFERENCES `tacos` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_complementos_en_tacos_complementos`
    FOREIGN KEY (`complemento_id`)
    REFERENCES `complementos` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- INSERTS DE EJEMPLO
-- -----------------------------------------------------

-- Restaurantes
INSERT INTO restaurantes (nombre) VALUES
('Taquería El Güero'),
('Tacos Doña Mary'),
('El Rey del Taco');

-- Tacos (relacionados a restaurantes)
INSERT INTO tacos (tortilla, guiso, salsa, restaurante_id) VALUES
('Maíz', 'Asada', 'Verde', 1),
('Harina', 'Pastor', 'Roja', 1),
('Maíz', 'Barbacoa', 'Verde', 2),
('Maíz', 'Chorizo', 'Guacamole', 3),
('Harina', 'Suadero', 'Roja', 2);

-- Complementos
INSERT INTO complementos (nombre_complemento) VALUES
('Queso'),
('Cebolla'),
('Cilantro'),
('Limón'),
('Rábano'),
('Salsa Verde'),
('Salsa Roja');

-- Relaciones complementos_en_tacos (muchos a muchos)
INSERT INTO complementos_en_tacos (taco_id, complemento_id) VALUES
(1, 1),  -- Taco 1 tiene Queso
(1, 2),  -- Taco 1 tiene Cebolla
(1, 3),  -- Taco 1 tiene Cilantro
(2, 1),  -- Taco 2 tiene Queso
(2, 4),  -- Taco 2 tiene Limón
(3, 2),  -- Taco 3 tiene Cebolla
(3, 5),  -- Taco 3 tiene Rábano
(4, 1),  -- Taco 4 tiene Queso
(4, 3),  -- Taco 4 tiene Cilantro
(5, 2);  -- Taco 5 tiene Cebolla

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
