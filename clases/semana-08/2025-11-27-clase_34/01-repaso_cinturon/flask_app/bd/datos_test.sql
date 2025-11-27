INSERT INTO usuarios (email, nombre, apellido, password)
VALUES ('usuario@email.com', 'usuario', 'apellido', '12345678');
INSERT INTO usuarios (email, nombre, apellido, password)
VALUES ('usuario2@email.com', 'usuario2', 'apellido2', '12345678');

INSERT INTO eventos (usuario_id, evento, ubicacion, detalles, fecha)
VALUES (1, 'Super Evento', 'Ubicacion Secreta', 'Es un evento secreto', '2025-12-01');
INSERT INTO eventos (usuario_id, evento, ubicacion, detalles, fecha)
VALUES (1, 'Super Evento 2', 'Ubicacion Secreta', 'Es un evento secreto, otra vez', '2025-12-25');
INSERT INTO eventos (usuario_id, evento, ubicacion, detalles, fecha)
VALUES (2, 'Carrete en RoyalRanch', 'Cerca de la playa', 'Es un evento secreto para celebrar la graduacion', '2026-01-20');