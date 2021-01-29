-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-01-2021 a las 16:18:31
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
-- Base de datos: `cursitos_db`
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
(1, 'Negocios, inversiones, trading', 'Tecnicas de compra y venta de instrumentos financieros como acciones, bonos, materias primas, derivados y fondos mutuos', NULL, NULL),
(2, 'Ilustración y dibujo', 'Tecnicas y recursos creativos para las nuevas tendencias de hoy en día para dibujar', '2020-11-30 13:22:46', '2020-11-30 13:22:46'),
(3, 'Diseño', 'A través de estos conocimientos conocerás las verdaderas claves para la construcción de sistemas robustos', '2020-12-01 19:18:31', '2020-12-01 19:18:31'),
(4, 'Marketing Digital', 'Herramientas que te permitiran detectar momentos claves en el desarrollo constante', '2020-12-01 19:19:07', '2020-12-01 19:19:07'),
(5, 'Desarrollo web', 'Desarrollo web es un término que define la creación de sitios web para Internet o una intranet.', NULL, NULL),
(7, 'Programación', 'La programación es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto', NULL, NULL),
(8, 'Fotografia', 'La fotografía ​ es el arte y la técnica de obtener imágenes duraderas debido a la acción de la luz.', NULL, NULL),
(9, 'Animacion & 3D', 'La animación es un proceso utilizado por uno o más animadores para dar la sensación de movimiento a imágenes', NULL, NULL);

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
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `courses`
--

INSERT INTO `courses` (`id`, `name`, `short_description`, `description`, `category`, `price`, `discount`, `link`, `owner`, `created_at`, `updated_at`, `image`) VALUES
(34, 'Máster en Programación de Videojuegos', 'Publicar tus propios videojuegos con el motor gratuito Unity® y programando con C# y Visual Studio.', 'Empezaremos con la interface de Unity® y la programación desde cero. \r\n\r\nEn las primeras unidades estarás escribiendo tus primeras lineas de código. \r\n\r\nEstudiaremos como desarrollar mecánicas de videojuegos básicas y avanzadas.\r\n\r\nDiseñaremos niveles de Videojuegos en 2D y 3D.\r\n\r\nIluminaremos y daremos color con materiales y texturas.\r\n\r\nAprenderemos a trabajar con Mecanim y Animación de Personajes desde cero a nivel avanzado.\r\n\r\nEstudiaremos conceptos de desarrollo 2D y 3D a nivel profesional.\r\n\r\nAprenderás a publicar en plataformas móviles y monetizar tus juegos con anuncios.\r\n\r\nEl Master siempre se mantiene actualizado y se agregan contenidos nuevos.', 7, 900.99, 0, 'www.holasoyunvideojuego.com', 18, '2020-12-01 19:12:10', '2021-01-28 17:25:34', 'image-1606849930499.png'),
(35, 'Programación de Android desde Cero COMPLETO', 'Aprender a programar aplicaciones y juegos para Android de forma profesional y desde cero.', 'A lo largo del curso tendrás varias horas de ejemplos prácticos para que captes bien el sentido de cada concepto y sepas aplicarlo en tus propios proyectos. \r\n\r\nTendrás el desarrollo de una app como ejercicio por cada sección del curso, así como el código de los ejemplos mostrados en los videos. El curso está estructurado de forma modular, así que tú decides en qué orden ver las secciones, sin necesidad de seguir una secuencia obligatoria. Tienes más de 20 horas de videos que irán aumentando con el tiempo, ya que esté curso estará en constante renovación y ampliación.\r\n\r\nAdemás te transmitiremos nuestra experiencia para que seas un profesional en el desarrollo de aplicaciones para Android. Al final este curso serás capaz de crear una app moderna, funcional y atractiva sin ningún problema :)\r\nDesarrollo de Aplicaciones nativas para Android\r\n\r\nDesarrollo de Juegos para Android\r\n\r\nInterfaces con Material Design y Responsive Design\r\n\r\nAdministración del hardware de los dispositivos (cámara, memoria, sensores...)\r\n\r\nAdministración de Base de Datos para las apps\r\n\r\nControl de Versiones con Git y GitHub\r\n\r\nDiseño y Usabilidad\r\n\r\nSoporte Multilenguaje de una app\r\n\r\nGPS, Google Maps\r\n\r\nExtr', 7, 2050, 0, 'www.holasoyandroid.com', 18, '2020-12-01 19:14:38', '2021-01-28 17:25:21', 'image-1611104665598.png'),
(36, 'Fundamentos de Programación', 'aprenderás de forma básica y muy completa las nociones más elementales sobre el desarrollo de software. ', 'Los lenguajes que veremos en este curso son los siguientes:\r\n\r\nPython\r\n\r\nRuby\r\n\r\nJavaScript\r\n\r\nPHP\r\n\r\nJava\r\n\r\nGo\r\n\r\nC\r\n\r\nC++\r\n\r\nC#', 7, 10000, 5, 'https://www.udemy.com/course/fundamentos-de-la-programacion/', 18, '2020-12-01 19:15:54', '2021-01-28 17:25:46', 'image-1606850154940.png'),
(37, 'Illustrator CC para novatos', 'Este curso es la puerta de entrada a personas que se inicien el el diseño gráfico vectorial.', 'Aprende cada herramienta a travez de ejercicios prácticos\r\nRealiza artes vectoriales geométricos y minimalistas.\r\nAsí como complejas ilustraciones realistas y con 3D\r\nComprede los principios básicos de Artes Gráficas\r\nRealiza diseños tanto para impresión como para web\r\nIlustra logos, iconos, dibujos o cualquier tipo de arte vectorial', 2, 999, 0, 'www.ilustrando.com', 18, '2020-12-01 19:20:52', '2021-01-28 17:25:57', 'image-1606850452075.png'),
(38, 'Google Ads', 'Conoce cómo incrementar tus ventas utilizando correctamente Google Ads; es mejor saber que suponer.', 'Vamos a trabajar con la nueva experiencia de Google Ads, ¡ya eso es genial! pero no es todo. Con el curso completo de Google Ads llevará su negocio al nivel más alto de la publicidad, aprendiendo realmente como un experto todo el manejo de la plataforma.\r\n\r\n¿Sabias que tus clientes utilizan Google todos los días para buscar los productos y servicios que ofreces?, y es muy probable que tu competencia ya esté usando de manera optimizada las campañas que tiene Google Ads. Es hora de ser los mejores y desarrollar campañas profesionalmente.\r\n\r\n', 4, 5050, 0, 'https://www.udemy.com/course/google-ads-curso-completo-desde-lo-basico-hasta-avanzado/', 18, '2020-12-01 19:23:03', '2021-01-28 17:26:12', 'image-1606850583109.png'),
(43, 'Curso de NodeJS', 'Descripcion del curso de nodeJS con Express y Sequelize', 'Descripcion del curso de nodeJS con Express y Sequelize para manejo de base de datos relacionales', 5, 15000, 10, 'https://www.udemy.com/course/node-de-cero-a-experto/', 22, '2021-01-28 19:45:33', '2021-01-28 19:45:33', 'image-1611863133541.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `state` int(3) DEFAULT NULL,
  `assessment` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `user_id`, `course_id`, `price`, `state`, `assessment`, `created_at`, `updated_at`) VALUES
(11, 17, 38, 5050, NULL, NULL, '2021-01-28 17:16:54', '2021-01-28 17:16:54'),
(12, 22, 36, 9500, NULL, NULL, '2021-01-28 19:47:44', '2021-01-28 19:47:44'),
(13, 17, 35, 2050, NULL, NULL, '2021-01-28 19:50:01', '2021-01-28 19:50:01'),
(14, 17, 36, 9500, NULL, NULL, '2021-01-28 19:50:42', '2021-01-28 19:50:42'),
(15, 22, 34, 900.99, NULL, NULL, '2021-01-28 19:52:00', '2021-01-28 19:52:00'),
(16, 22, 35, 2050, NULL, NULL, '2021-01-28 19:52:00', '2021-01-28 19:52:00'),
(17, 22, 38, 5050, NULL, NULL, '2021-01-28 19:52:00', '2021-01-28 19:52:00'),
(18, 22, 37, 999, NULL, NULL, '2021-01-28 19:52:00', '2021-01-28 19:52:00'),
(19, 23, 43, 13500, NULL, NULL, '2021-01-29 06:03:10', '2021-01-29 06:03:10'),
(20, 23, 35, 2050, NULL, NULL, '2021-01-29 06:11:16', '2021-01-29 06:11:16'),
(21, 23, 37, 999, NULL, NULL, '2021-01-29 06:11:16', '2021-01-29 06:11:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
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
(17, 'MatiVivas', 'mativivas77@gmail.com', 'Matias Gonzalo', 'Vivas Castillo', 'image-1611853646902.jpg', ' Estudiante de ingeniería en sistemas de informacion en Universidad Tecnológica Nacional ', 1, '$2a$10$ytMWenbAShqkVMOQcf8oSutGWMrwGY3qm5yNEdNrJXLKyPz9lf5bW', '2021-01-15 19:39:50', '2021-01-28 17:07:26'),
(18, 'DahyAzabal', 'dahyanaazabal@gmail.com', NULL, NULL, NULL, NULL, 0, '$2a$10$rD9Mj7eZe0SLH3SmXnlY4uoXATTwfs8lCfoqdNCB0zVYB9vcNIpF6', '2021-01-20 15:30:22', '2021-01-20 15:30:22'),
(20, 'MiguelAzabal', 'MiguelAzabal352@gmail.com', NULL, NULL, NULL, NULL, 0, '$2a$10$ny.oyFnwcJtsob9/yAKtoeFmIR1SZ5F2HB83pw0UayNhz4VE4vJAC', '2021-01-28 15:05:42', '2021-01-28 15:05:42'),
(22, 'vivascastillomatias', 'vivascastillomatias@gmail.com', 'Matias', 'Vivas Castillo', 'image-1611863206421.jpeg', 'Hola Soy Matias y soy estudiante de Digital house', 1, '$2a$10$TcAq5scC/CGv3xP1IixlQOaJGlrFAbz//.H/nuYNRC/kTKI1Fv8SK', '2021-01-28 19:43:54', '2021-01-28 19:46:46'),
(23, 'alex zenteno', 'alextalleres42@gmail.com', 'Alexander', 'Zenteno', 'image-1611900629598.jpg', 'Soy un estudiante de cursos de peluquería y barbería', 1, '$2a$10$t04UPGojsG9VgbJf6juFKe7x0vTxEFqLAECwxSwqkchoX937VzDsm', '2021-01-29 06:01:10', '2021-01-29 06:10:29');

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
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
