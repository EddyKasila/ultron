-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2017 at 10:28 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ultronvideo`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(70) NOT NULL,
  `phone` int(70) NOT NULL,
  `role` varchar(60) NOT NULL,
  `imagepath` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `email`, `phone`, `role`, `imagepath`) VALUES
(1, 'eddykasila', '312316936420', 'eddynguli@gmail.com', 703686559, 'admin', ''),
(2, 'admin', 'lim34', 'edwinkasila@gmail.com', 735353202, 'admin', '');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE IF NOT EXISTS `bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movieid` int(11) NOT NULL,
  `movie` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `quantity` varchar(2) NOT NULL,
  `totalcost` int(4) NOT NULL,
  `post` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `movieid`, `movie`, `user`, `quantity`, `totalcost`, `post`) VALUES
(1, 1, 'Deadpool', 'lepskibryant', '1', 100, '24/04/16'),
(2, 2, 'Gods of Egypt', 'lepskibryant', '4', 200, '24/04/16'),
(3, 3, 'Insurgent', 'lepskibryant', '6', 600, '24/04/16'),
(4, 6, 'Kung Fu Panda 3', 'lepskibryant', '6', 1200, '24/04/16'),
(5, 6, 'Kung Fu Panda 3', 'kasila', '20', 4000, '24/04/16'),
(6, 1, 'Deadpool', 'kasila', '2', 200, '24/04/16'),
(7, 8, 'Good Kills', 'lepskibryant', '5', 150, '24/04/16'),
(8, 5, 'Captain America Civil War', 'griffins', '4', 1200, '24/04/16'),
(9, 2, 'Gods of Egypt', 'griffins', '4', 200, '24/04/16'),
(10, 28, 'Thor', 'admin', '2', 240, '01/05/16'),
(11, 30, 'The Revenant', 'admin', '1', 150, '05/05/16'),
(12, 29, 'Pirates of the Carribean', 'johnny', '2', 400, '05/05/16'),
(13, 30, 'The Revenant', 'johnny', '5', 750, '06/05/16'),
(14, 31, 'Shrek', 'victor', '3', 300, '06/05/16'),
(15, 34, 'Marks man', 'johnny', '3', 600, '06/05/16');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL,
  `movie_title` varchar(150) NOT NULL,
  `main_characters` varchar(150) NOT NULL,
  `description` varchar(800) NOT NULL,
  `movie_poster` varchar(2000) NOT NULL,
  `cost` int(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `movie_title`, `main_characters`, `description`, `movie_poster`, `cost`) VALUES
(0, 'Captain America Civil War', 'Chris Evans, Robert Downey Jr., Scarlett Johansson', 'A movie about Captain America and Iron Man fighting', 'star_wars_episode_1_poster.png', 0),
(1, 'Captain America Civil War', 'Chris Evans, Robert Downey Jr., Scarlett Johansson', 'A movie about Captain America and Iron Man fighting', 'star_wars_episode_1_poster.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(80) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone_no` int(15) NOT NULL,
  `location` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `imagepath` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `email`, `phone_no`, `location`, `role`, `imagepath`) VALUES
(0, 'braniekush', '12345', 'branson kuria', 'brankush@gmail.com', 752485459, 'ruiru', 'user', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
