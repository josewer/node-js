CREATE DATABASE db_movies;

-- Habilitar extensión para UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear tabla de películas
CREATE TABLE movies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    titulo VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    año INT NOT NULL,
    url_imagen TEXT,
    descripcion TEXT,
    puntuacion NUMERIC(3,1),  -- ej: 8.8
    duracion INT,
    genero TEXT[]  -- array de géneros
);


-- Insertar películas
INSERT INTO movies (id, titulo, director, año, url_imagen, descripcion, puntuacion, duracion, genero) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'Inception', 'Christopher Nolan', 2010, 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg', 'Un ladrón que roba secretos a través de los sueños debe realizar la tarea más difícil: implantar una idea en la mente de alguien.', 8.8, 148, '{"Ciencia ficción","Acción","Suspenso"}'),
('6fa459ea-ee8a-3ca4-894e-db77e160355e', 'The Matrix', 'Lana Wachowski, Lilly Wachowski', 1999, 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2902988/5927078/MOVEJ8492__81968.1679575827.jpg?c=2', 'Un hacker descubre la verdad sobre su realidad y su papel en la guerra contra las máquinas que controlan a la humanidad.', 8.7, 136, '{"Ciencia ficción","Acción"}'),
('7c9e6679-7425-40de-944b-e07fc1f90ae7', 'Interstellar', 'Christopher Nolan', 2014, 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.', 8.6, 169, '{"Ciencia ficción","Drama","Aventura"}'),
('16fd2706-8baf-433b-82eb-8c7fada847da', 'Parasite', 'Bong Joon-ho', 2019, 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', 'Una familia pobre se infiltra en la vida de una familia rica, con consecuencias inesperadas y oscuras.', 8.5, 175, '{"Drama","Suspenso"}'),
('9b2e5d3e-45cb-4a5e-b1e1-8f3c7f6a4b2d', 'The Godfather', 'Francis Ford Coppola', 2019, 'https://image.tmdb.org/t/p/w500/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg', 'La historia épica de la familia Corleone y el ascenso de Michael Corleone como jefe de la mafia.', 9.2, 175, '{"Drama","Crimen"}');


select * from movies