-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2020 a las 23:41:58
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_cursitos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Negocios, inversiones, trading', 'Relacionado con desarrollo de videojuegos, sistemas y autómatas', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses`
--

CREATE TABLE `courses` (
  `id` int(10) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `short_description` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` int(10) NOT NULL,
  `price` float NOT NULL DEFAULT 0,
  `discount` float NOT NULL DEFAULT 0,
  `link` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `owner` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `courses`
--

INSERT INTO `courses` (`id`, `name`, `short_description`, `description`, `category`, `price`, `discount`, `link`, `owner`, `created_at`, `updated_at`) VALUES
(1, 'Tablas Dinámicas: Análisis de datos en Microsoft E', 'Domina las Tablas Dinámicas. Aprende la herramienta más potente de Excel para obtener estadísticas sin crear fórmulas.', 'Si de algo puede presumir Excel, es de su capacidad para obtener estadísticas, resultados matemáticos y seguro que en lo primero que has pensado es, en sus fórmulas, más en concreto en las funciones que podemos usar dentro de esas fórmulas. Pero que pensarías si te digo que no son la herramienta más potente que tiene Excel para realizar ese tipo de trabajos, que hay otra. Y, además esa herramienta permite obtener los resultados sin crear fórmulas, sin escribir una sola fórmula de Excel, simplemente haciendo clics con el ratón... Bueno pues no estoy loco ni te estoy engañando, esa herramienta son las Tablas Dinámicas. Son la herramienta más potente de análisis de datos y el camino fácil sería deciros que sirven para obtener estadísticas, pero la realidad es que son algo más que eso. Con las Tablas Dinámicas, Excel pone en vuestras manos una herramienta capaz de analizar millones de filas de datos, para obtener resultados individuales o tablas comparativas con diferentes datos o criterios. Son la herramienta definitiva para convertir tus datos en información, en respuestas, en estadísticas con las que tomar decisiones o detectar las razones del porqué de esos resultados.', 1, 1500, 10, 'link.com', 1, NULL, NULL),
(2, 'Master Flutter & Dart: De cero a experto', 'Desarrolla aplicaciones IOS y Android desde un solo lugar con Flutter y Dart. +13 Aplicaciones y 2 Proyectos Reales', 'Flutter es el nuevo framework mobile de Google para crear interfaces nativas en iOS y Android en un tiempo récord. Flutter funciona con Dart (originalmente llamado Dash) el cual es un lenguaje de programación orientado a objetos y de código abierto. La prioridad de Flutter es aumentar la calidad de desarrollo de aplicaciones y que sea sencillo. ¿Porque deberíamos comenzar a utilizar Flutter? Multiplataforma: Al utilizar el mismo render, framework y librerías, flutter permite crear a través de un solo UI una aplicación que pueda correr tanto en Android como en IOS, además proporciona widgets basados en las pautas de Cupertino (IOS) y Material Design (Android) como los es el scrolling, navegación, iconos y fuentes para proporcionar un completo rendimiento nativo en el dispositivo Desarrollo Rápido: Hot Reload es una práctica que permite realizar cambios en tu aplicación en tiempos de ejecución. En milisegundos las modificaciones se verán en el dispositivo sin la necesidad de tener que detener y levantar la aplicación como se realiza en el modo tradicional. Comunidad en crecimiento Flutter es un framework aún en Beta, pero está respaldado por Google, su comunidad va en crecimiento, lo', 1, 1800, 15, 'link.com', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursado_usuario`
--

CREATE TABLE `cursado_usuario` (
  `id` int(10) NOT NULL,
  `user` int(10) NOT NULL,
  `course` int(10) NOT NULL,
  `price` float NOT NULL,
  `discount` float NOT NULL,
  `rating` decimal(10,0) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `cursado_usuario`
--

INSERT INTO `cursado_usuario` (`id`, `user`, `course`, `price`, `discount`, `rating`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1500, 10, '10', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT 0,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `email`, `first_name`, `last_name`, `image`, `bio`, `completed`, `password`, `created_at`, `updated_at`) VALUES
(1, 'mativivas77', 'mativivas77@gmail.com', 'Matias', 'Vivas Castillo', 'image-1603152550599.jpg', 'Hola esta es mi biografía', 0, 'password', NULL, NULL),
(2, 'dahyAzabal', 'dahyaazabal@gmail.com', 'Dahyana', 'Azabal', 'image-1603152550599.jpg', 'Hola soy otra biografía', 1, 'password', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`),
  ADD KEY `owner` (`owner`);

--
-- Indices de la tabla `cursado_usuario`
--
ALTER TABLE `cursado_usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course` (`course`),
  ADD KEY `user` (`user`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cursado_usuario`
--
ALTER TABLE `cursado_usuario`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`owner`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `cursado_usuario`
--
ALTER TABLE `cursado_usuario`
  ADD CONSTRAINT `cursado_usuario_ibfk_1` FOREIGN KEY (`course`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `cursado_usuario_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
