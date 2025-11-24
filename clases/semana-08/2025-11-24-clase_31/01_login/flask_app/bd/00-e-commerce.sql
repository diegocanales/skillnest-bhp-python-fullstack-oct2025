-- ============================================
-- PASO 1: Crear el esquema (base de datos)
-- ============================================
DROP DATABASE IF EXISTS tienda;
CREATE DATABASE tienda;
USE tienda;

-- ============================================
-- PASO 2: Crear tabla de usuarios
-- ============================================
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NULL,  -- Campo agregado para autenticación (Clase 31)
    edad INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- PASO 3: Crear tabla de categorías
-- ============================================
CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- PASO 4: Crear tabla de productos
-- ============================================
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    categoria_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL
);

-- ============================================
-- PASO 5: Crear tabla de pedidos
-- ============================================
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    fecha DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE RESTRICT
);

-- ============================================
-- PASO 6: Crear tabla intermedia pedidos_has_productos
-- ============================================
CREATE TABLE pedidos_has_productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL DEFAULT 1,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE RESTRICT
);

-- ============================================
-- PASO 7: Crear tabla de resenas
-- ============================================
CREATE TABLE resenas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    producto_id INT NOT NULL,
    calificacion INT NOT NULL CHECK (calificacion >= 1 AND calificacion <= 5),
    comentario TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- ============================================
-- PASO 8: Crear tabla de direcciones (uno a uno con usuarios)
-- ============================================
CREATE TABLE direcciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNIQUE NOT NULL,
    calle VARCHAR(200) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(20),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- ============================================
-- PASO 9: Insertar datos de ejemplo - Categorías
-- ============================================
INSERT INTO categorias (nombre) VALUES
('Electrónica'),
('Ropa'),
('Hogar'),
('Deportes'),
('Libros');

-- ============================================
-- PASO 10: Insertar datos de ejemplo - Usuarios
-- ============================================
INSERT INTO usuarios (nombre, apellido, email, edad) VALUES
('Juan', 'Pérez', 'juan.perez@email.com', 28),
('María', 'González', 'maria.gonzalez@email.com', 35),
('Pedro', 'Sánchez', 'pedro.sanchez@email.com', 22),
('Ana', 'Martínez', 'ana.martinez@email.com', 30),
('Carlos', 'López', 'carlos.lopez@email.com', 45),
('Laura', 'Rodríguez', 'laura.rodriguez@email.com', 27);

-- Nota: Los usuarios de ejemplo tienen password = NULL
-- Solo los nuevos usuarios registrados tendrán contraseña hasheada

-- ============================================
-- PASO 11: Insertar datos de ejemplo - Productos
-- ============================================
INSERT INTO productos (nombre, precio, descripcion, categoria_id) VALUES
('Laptop HP', 899.99, 'Laptop HP 15 pulgadas, 8GB RAM, 256GB SSD', 1),
('Smartphone Samsung', 599.99, 'Samsung Galaxy A54, 128GB', 1),
('Camiseta Algodón', 19.99, 'Camiseta 100% algodón, varios colores', 2),
('Pantalón Jeans', 49.99, 'Pantalón jeans clásico, corte regular', 2),
('Sofá 3 Plazas', 599.99, 'Sofá cómodo de 3 plazas, color gris', 3),
('Mesa de Comedor', 299.99, 'Mesa de comedor para 6 personas, madera', 3),
('Pelota de Fútbol', 24.99, 'Pelota oficial de fútbol, tamaño 5', 4),
('Raqueta de Tenis', 89.99, 'Raqueta profesional de tenis', 4),
('Libro Python', 39.99, 'Aprende Python desde cero', 5),
('Novela Best Seller', 15.99, 'Novela más vendida del año', 5);

-- ============================================
-- PASO 12: Insertar datos de ejemplo - Pedidos
-- ============================================
INSERT INTO pedidos (usuario_id, total, fecha) VALUES
(1, 899.99, '2024-01-15'),
(1, 49.99, '2024-02-20'),
(2, 599.99, '2024-01-10'),
(2, 19.99, '2024-02-05'),
(2, 89.99, '2024-03-12'),
(3, 299.99, '2024-01-25'),
(4, 599.99, '2024-02-14'),
(4, 24.99, '2024-02-15'),
(4, 39.99, '2024-02-16'),
(5, 15.99, '2024-03-01');

-- ============================================
-- PASO 13: Insertar datos de ejemplo - Pedidos_has_Productos
-- ============================================
INSERT INTO pedidos_has_productos (pedido_id, producto_id, cantidad, precio_unitario) VALUES
(1, 1, 1, 899.99),  -- Pedido 1: Laptop
(2, 4, 1, 49.99),   -- Pedido 2: Pantalón
(3, 2, 1, 599.99),  -- Pedido 3: Smartphone
(4, 3, 2, 19.99),   -- Pedido 4: 2 Camisetas
(5, 8, 1, 89.99),   -- Pedido 5: Raqueta
(6, 6, 1, 299.99),  -- Pedido 6: Mesa
(7, 2, 1, 599.99),  -- Pedido 7: Smartphone
(8, 7, 1, 24.99),   -- Pedido 8: Pelota
(9, 9, 1, 39.99),   -- Pedido 9: Libro Python
(10, 10, 1, 15.99); -- Pedido 10: Novela

-- ============================================
-- PASO 14: Insertar datos de ejemplo - Reseñas
-- ============================================
INSERT INTO resenas (usuario_id, producto_id, calificacion, comentario) VALUES
(1, 1, 5, 'Excelente laptop, muy rápida y eficiente'),
(2, 2, 4, 'Buen smartphone, la batería dura mucho'),
(2, 3, 5, 'Camiseta muy cómoda, calidad excelente'),
(3, 6, 4, 'Mesa muy resistente, se ve bien'),
(4, 2, 5, 'Me encanta este smartphone'),
(4, 7, 3, 'La pelota está bien pero se desinfla rápido'),
(5, 10, 5, 'Novela increíble, la recomiendo');

-- ============================================
-- PASO 15: Insertar datos de ejemplo - Direcciones
-- ============================================
INSERT INTO direcciones (usuario_id, calle, ciudad, codigo_postal) VALUES
(1, 'Av. Principal 123', 'Ciudad de México', '01000'),
(2, 'Calle Secundaria 456', 'Guadalajara', '44100'),
(3, 'Boulevard Norte 789', 'Monterrey', '64000'),
(4, 'Avenida Sur 321', 'Puebla', '72000');

-- ============================================
-- VERIFICACIÓN: Consultas para verificar los datos
-- ============================================

-- Ver usuarios
SELECT * FROM usuarios;

-- Ver productos
SELECT * FROM productos;

-- Ver pedidos
SELECT * FROM pedidos;

-- Ver pedidos con usuarios
SELECT u.nombre, u.apellido, p.total, p.fecha
FROM usuarios u
JOIN pedidos p ON u.id = p.usuario_id;

-- Ver productos por categoría
SELECT c.nombre AS categoria, COUNT(pr.id) AS total_productos
FROM categorias c
LEFT JOIN productos pr ON c.id = pr.categoria_id
GROUP BY c.id, c.nombre;

