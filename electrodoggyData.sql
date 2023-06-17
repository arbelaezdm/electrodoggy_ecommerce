CREATE DATABASE  IF NOT EXISTS `electrodoggy_db` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `electrodoggy_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: electrodoggy_db
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Dumping data for table `categoriesbrands`
--

LOCK TABLES `categoriesbrands` WRITE;
/*!40000 ALTER TABLE `categoriesbrands` DISABLE KEYS */;
INSERT INTO `categoriesbrands` VALUES (1,'Samsung'),(2,'Apple'),(3,'LG'),(4,'Huawei'),(5,'Sony'),(6,'Acer'),(7,'Phillip'),(8,'Nintendo'),(9,'SkullCandy'),(10,'Logitech'),(11,'HP'),(12,'Lenovo'),(13,'Asus'),(14,'Xiaomi');
/*!40000 ALTER TABLE `categoriesbrands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categoriescolors`
--

LOCK TABLES `categoriescolors` WRITE;
/*!40000 ALTER TABLE `categoriescolors` DISABLE KEYS */;
INSERT INTO `categoriescolors` VALUES (1,'Red'),(2,'Blue'),(3,'White'),(4,'Black'),(5,'Green'),(6,'Pink'),(7,'Violet'),(8,'Yellow'),(9,'Grey'),(10,'Sky blue');
/*!40000 ALTER TABLE `categoriescolors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categoriesproducts`
--

LOCK TABLES `categoriesproducts` WRITE;
/*!40000 ALTER TABLE `categoriesproducts` DISABLE KEYS */;
INSERT INTO `categoriesproducts` VALUES (1,'Celulares'),(2,'Laptops'),(3,'Tablets'),(4,'Gamer'),(5,'Audio'),(6,'Accesorios');
/*!40000 ALTER TABLE `categoriesproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categoriesusers`
--

LOCK TABLES `categoriesusers` WRITE;
/*!40000 ALTER TABLE `categoriesusers` DISABLE KEYS */;
INSERT INTO `categoriesusers` VALUES (1,'Admin'),(2,'Usuario');
/*!40000 ALTER TABLE `categoriesusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 13 Pro',1500,1200,20,'product1658286252137.png','              ','',20,2,1,2),(2,'Chromebook S330',3500,2975,15,'product1658286297399.jpg','              ','',30,12,2,9),(3,'Nintendo Switch',1800,1620,10,'product1658286314818.jpg','              ','',12,8,4,1),(5,'Redmi Note 11',720,504,30,'product1658286383547.jpg','              ','',20,14,1,4),(6,'Tablet Galaxy Prueba',500,50,10,'product1660611936165.jpg','Una tablet interesante','Una tablet para toda la familia, facil de usar y con mucho poder',20,1,3,3),(7,'iPad Pro',6400,5632,12,'product1658286415119.png','              ','',5,2,3,9),(8,'PlayStation 5',2400,1632,32,'product1658286426689.jpg','              ','',7,5,4,3),(9,'Audífonos Sesh Evo',1990,1672,12,'product1658286455692.jpg','              ','',2,9,5,4),(10,'Parlante inalámbrico SRS-XB13',200,140,30,'product1658286467527.png','              ','',24,5,5,2),(11,'Kit Teclado Mecanico y Mouse',520,208,60,'product1658286480378.jpg','              ','',5,10,6,8),(12,'Docking Station',140,105,25,'product1658286590172.webp','              ','',2,11,6,9),(13,'Playstation 3',12000,10000,50,'product1658286630918.jpg','              ','',10,5,4,4),(14,'Wii',51000,50000,25,'product1658286645361.jpg','              ','',25,8,4,3),(43,'Compu de Prueba Dashboard',10000,100,10,'product1660267530798.jpg','Compu de Prueba para el dash','Compuuuuuuuuuuuuuuuuuuuuuuuu esta buenardaaaaaaaaaa',10,6,2,1),(45,'Teclado portatil',1000,0,0,'product1660585138465.jpg','','Es un teclado preparado especificamente para programcion js',5,1,6,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_categoriescolors`
--

LOCK TABLES `products_categoriescolors` WRITE;
/*!40000 ALTER TABLE `products_categoriescolors` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_categoriescolors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_products`
--

LOCK TABLES `user_products` WRITE;
/*!40000 ALTER TABLE `user_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'Alexa','cc','alecc@gmail.com','$2a$10$SAkRlcH8OfUPVsmLeKikTOdfD7rTssS0Z50VoU2bypwERDV9yCmWm','ll','1986-05-21','default-image.jpg',NULL,1),(8,'Prueba','Usuario','PUsu@gmail.com','$2a$10$tg/9KX4WhPRxrzYDxci85eolaXbbKx.9guzeDoD1jNvIeornFQCDa','usu','1990-12-06','user1658286131280.png',NULL,2),(9,'Loki','Lokillo','Lokilo@gmail.com','$2a$10$4lewheJzZmHtOyAgc7yQ8OwgtAt7YkvN6/stJmBA6EtD3jV/Nopbi','ll','1998-02-14','user1660261370764.png',NULL,1),(10,'Hernan','Gomez','HGomez@gmail.com','$2a$10$jW6tJXMpjuT1N4pXdKyE9.prXh5uFtZx6xxK0sAX3G7nVBv8k8gXS','calle falsa 123','2011-05-23','user1658286184167.png',NULL,2),(11,'Matias','Pasquini','matipasqui@dh.com','$2a$10$NFZw5RNhhZR5A6ZGTXLdv.EuZfH3BMnuvcRA3cMMGwLhVyXBQho62','Casa','1995-09-20','user1660021495407.png',NULL,1),(13,'Loki','Chirolense','Lokichiro@gmail.com','$2a$10$Vbb.hsdnjJbSsGZYD4wUAOavEIvqVtHBvxb1K55QmVzFy7mu5/c5y','Maipu 3322','2020-09-09','user1660204605432.png',NULL,1),(14,'Hernesto','Sanchez','Sanchez@gmail.com','$2a$10$N1V0bPhnSVx57CvQxup26OmNUgPNYcVEIgJ48hiGFYDtYrBzmz5Pm','Calle 444','2022-08-15','user1660612489194.png',NULL,1),(15,'Ezequiel','Peruca','EzePeru@gmail.com','$2a$10$.YQuvsSuondkpYcVCC7KkOCdhrxXUpIhvHmc8pEn/w5WjIIrsPPkK','Calle 444','1997-03-12','default-image.jpg',NULL,1),(16,'Marta','Ceballos','MartaCeba@gmail.com','$2a$10$XiY9lqD5YLcO2lfojefFf.THlcNwojdNe6zz6cTbLioYrlzbjwTRi','la esquina 222','1999-02-21','user1660607971696.png',NULL,2),(17,'Chirola','Alfonsa','Chironsa@gmail.com','$2a$10$x0ncT9magZqQ4pd9o4h51up6SMNpsyYjetL8kus8Rhwv11ZPg5yee','','1990-03-15','user1660612447452.png',NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'electrodoggy_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-16  4:36:49
