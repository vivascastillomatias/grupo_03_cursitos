-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: cursitos_db
-- ------------------------------------------------------
-- Server version	5.7.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Negocios, inversiones, trading','Relacionado con desarrollo de videojuegos, sistemas y autómatas',NULL,NULL),(2,'Tecnología','Recursos creativos para las nuevas tendencias de hoy en día','2020-11-30 13:22:46','2020-11-30 13:22:46'),(3,'Diseño','A travez de estos conocimientos conoceras las verdaderas claves para sobresalír en las tendencias de hoy en día','2020-12-01 19:18:31','2020-12-01 19:18:31'),(4,'Marketing','Herramientas que te permitiran detectar momentos claves en el desarrollo constante','2020-12-01 19:19:07','2020-12-01 19:19:07');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `short_description` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` int(10) NOT NULL,
  `price` float NOT NULL DEFAULT '0',
  `discount` float NOT NULL DEFAULT '0',
  `link` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `owner` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category` (`category`),
  KEY `owner` (`owner`),
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`),
  CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`owner`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Tablas Dinámicas: Análisis de datos en Microsoft E','Domina las Tablas Dinámicas. Aprende la herramienta más potente de Excel para obtener estadísticas sin crear fórmulas.','Si de algo puede presumir Excel, es de su capacidad para obtener estadísticas, resultados matemáticos y seguro que en lo primero que has pensado es, en sus fórmulas, más en concreto en las funciones que podemos usar dentro de esas fórmulas. Pero que pensarías si te digo que no son la herramienta más potente que tiene Excel para realizar ese tipo de trabajos, que hay otra. Y, además esa herramienta permite obtener los resultados sin crear fórmulas, sin escribir una sola fórmula de Excel, simplemente haciendo clics con el ratón... Bueno pues no estoy loco ni te estoy engañando, esa herramienta son las Tablas Dinámicas. Son la herramienta más potente de análisis de datos y el camino fácil sería deciros que sirven para obtener estadísticas, pero la realidad es que son algo más que eso. Con las Tablas Dinámicas, Excel pone en vuestras manos una herramienta capaz de analizar millones de filas de datos, para obtener resultados individuales o tablas comparativas con diferentes datos o criterios. Son la herramienta definitiva para convertir tus datos en información, en respuestas, en estadísticas con las que tomar decisiones o detectar las razones del porqué de esos resultados.',1,1500,10,'link.com',1,NULL,NULL,NULL),(34,'Máster en Programación de Videojuegos','Publicar tus propios videojuegos con el motor gratuito Unity® y programando con C# y Visual Studio.','Empezaremos con la interface de Unity® y la programación desde cero. \r\n\r\nEn las primeras unidades estarás escribiendo tus primeras lineas de código. \r\n\r\nEstudiaremos como desarrollar mecánicas de videojuegos básicas y avanzadas.\r\n\r\nDiseñaremos niveles de Videojuegos en 2D y 3D.\r\n\r\nIluminaremos y daremos color con materiales y texturas.\r\n\r\nAprenderemos a trabajar con Mecanim y Animación de Personajes desde cero a nivel avanzado.\r\n\r\nEstudiaremos conceptos de desarrollo 2D y 3D a nivel profesional.\r\n\r\nAprenderás a publicar en plataformas móviles y monetizar tus juegos con anuncios.\r\n\r\nEl Master siempre se mantiene actualizado y se agregan contenidos nuevos.',2,900.99,0,'www.holasoyunvideojuego.com',3,'2020-12-01 19:12:10','2020-12-01 19:12:10','image-1606849930499.png'),(35,'Programación de Android desde Cero ',' android desde cero y de forma sencilla ','Java necesario para el desarrollo en Android\r\n\r\nDesarrollo de Aplicaciones nativas para Android\r\n\r\nDesarrollo de Juegos para Android\r\n\r\nInterfaces con Material Design y Responsive Design\r\n\r\nAdministración del hardware de los dispositivos (cámara, memoria, sensores...)\r\n\r\nAdministración de Base de Datos para las apps\r\n\r\nControl de Versiones con Git y GitHub\r\n\r\nDiseño y Usabilidad\r\n\r\nSoporte Multilenguaje de una app\r\n\r\nGPS, Google Maps\r\n\r\nExtras',2,2050,0,'www.holasoyandroid.com',3,'2020-12-01 19:14:38','2020-12-01 19:14:38','image-1606850078142.png'),(36,'Fundamentos de Programación','aprenderás de forma básica y muy completa las nociones más elementales sobre el desarrollo de software. ','os lenguajes que veremos en este curso son los siguientes:\r\n\r\nPython\r\n\r\nRuby\r\n\r\nJavaScript\r\n\r\nPHP\r\n\r\nJava\r\n\r\nGo\r\n\r\nC\r\n\r\nC++\r\n\r\nC#',2,10000,200,'www.programar.com',3,'2020-12-01 19:15:54','2020-12-01 19:15:54','image-1606850154940.png'),(37,'Illustrator CC para novatos:','Este curso es la puerta de entrada a personas que se inicien el el diseño gráfico vectorial.','Aprende cada herramienta a travez de ejercicios prácticos\r\nRealiza artes vectoriales geométricos y minimalistas.\r\nAsí como complejas ilustraciones realistas y con 3D\r\nComprede los principios básicos de Artes Gráficas\r\nRealiza diseños tanto para impresión como para web\r\nIlustra logos, iconos, dibujos o cualquier tipo de arte vectorial',3,999,0,'www.ilustrando.com',3,'2020-12-01 19:20:52','2020-12-01 19:20:52','image-1606850452075.png'),(38,'Google Ads','Conoce cómo incrementar tus ventas utilizando correctamente Google Ads; es mejor saber que suponer.','Vamos a trabajar con la nueva experiencia de Google Ads, ¡ya eso es genial! pero no es todo. Con el curso completo de Google Ads llevará su negocio al nivel más alto de la publicidad, aprendiendo realmente como un experto todo el manejo de la plataforma.\r\n\r\n¿Sabias que tus clientes utilizan Google todos los días para buscar los productos y servicios que ofreces?, y es muy probable que tu competencia ya esté usando de manera optimizada las campañas que tiene Google Ads. Es hora de ser los mejores y desarrollar campañas profesionalmente.\r\n\r\n',4,5050,0,'www.ads.com',3,'2020-12-01 19:23:03','2020-12-01 19:23:03','image-1606850583109.png');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursado_usuario`
--

DROP TABLE IF EXISTS `cursado_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursado_usuario` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user` int(10) NOT NULL,
  `course` int(10) NOT NULL,
  `price` float NOT NULL,
  `discount` float NOT NULL,
  `rating` decimal(10,0) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course` (`course`),
  KEY `user` (`user`),
  CONSTRAINT `cursado_usuario_ibfk_1` FOREIGN KEY (`course`) REFERENCES `courses` (`id`),
  CONSTRAINT `cursado_usuario_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursado_usuario`
--

LOCK TABLES `cursado_usuario` WRITE;
/*!40000 ALTER TABLE `cursado_usuario` DISABLE KEYS */;
INSERT INTO `cursado_usuario` VALUES (1,2,1,1500,10,10,NULL,NULL);
/*!40000 ALTER TABLE `cursado_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'mativivas77','mativivas77@gmail.com','Matias','Vivas Castillo','image-1603152550599.jpg','Hola esta es mi biografía',0,'password',NULL,NULL),(2,'dahyAzabal','dahyaazabal@gmail.com','Dahyana','Azabal','image-1603152550599.jpg','Hola soy otra biografía',1,'password',NULL,NULL),(3,'francolosa','franconicolaslosa@gmail.com','franco','losa','asd.jpg','asd',0,'francolosa','2020-11-30 01:06:09','2020-11-30 01:06:09');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-01 16:30:51
