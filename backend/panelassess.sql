-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2020 at 09:39 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `panelassess`
--

-- --------------------------------------------------------

--
-- Table structure for table `semester`
--

CREATE TABLE `semester` (
  `sem_name` varchar(255) NOT NULL,
  `t1` varchar(255) NOT NULL,
  `t2` varchar(255) NOT NULL,
  `t3` varchar(255) NOT NULL,
  `t4` varchar(255) NOT NULL,
  `t5` varchar(255) NOT NULL,
  `t6` varchar(255) NOT NULL,
  `t7` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `semester`
--

INSERT INTO `semester` (`sem_name`, `t1`, `t2`, `t3`, `t4`, `t5`, `t6`, `t7`) VALUES
('MCA1', 'Dr. Avinavsh Panwar', 'Mrs. Sheela Bhat', 'Dr. Manoj Kumar Jain', 'Mr. Mohit Gokhroo', 'Mr. Jitesh', 'Mrs. Arpita Jain', 'Mr. Govind'),
('MCA2', 'Dr. Manoj Kumar Jain', 'Mrs. Dipti Shrimal', 'Dr. Manoj Kumar Jain', 'Mr. Mohit Gokhroo', 'Mrs. Nayana Birla', 'Mrs. Arpita Jain', 'Mrs. Neha Jain'),
('MCA3', 'Miss Namita Jain', 'Dr. Manoj Kumar Jain', 'Mrs. Dipti Shrimal', 'Mrs. Sheela Bhat', 'Mrs. Neha Jain', 'Miss Namita Jain', 'Mr. Bhagwan'),
('MCA4', 'Dr. Avinavsh Panwar', 'Mrs. Dipti Shrimal', 'Dr. Manoj Kumar Jain', 'Mr. Mohit Gokhroo', 'Mrs. Nayana Birla', 'Mrs. Arpita Jain', 'Mrs. Neha Jain'),
('MCA5', 'Mrs. Dipti Shrimal', 'Dr. Manoj Kumar Jain', 'Dr. Avinavsh Panwar', 'Mrs. Nayana Birla', 'Mrs. Neha Jain', 'Miss Namita Jain', 'Mr. Indra Kumar Prajapat');

-- --------------------------------------------------------

--
-- Table structure for table `sub_cmd`
--

CREATE TABLE `sub_cmd` (
  `rate_id` int(11) NOT NULL,
  `q1` int(11) NOT NULL,
  `q2` int(11) NOT NULL,
  `q3` int(11) NOT NULL,
  `q4` int(11) NOT NULL,
  `q5` int(11) NOT NULL,
  `q6` int(11) NOT NULL,
  `q7` int(11) NOT NULL,
  `teacher_id` varchar(50) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `s_login`
--

CREATE TABLE `s_login` (
  `user_id` int(11) NOT NULL,
  `un` varchar(122) CHARACTER SET utf8mb4 NOT NULL,
  `pwd` varchar(15) CHARACTER SET utf8mb4 NOT NULL,
  `sem_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `s_login`
--

INSERT INTO `s_login` (`user_id`, `un`, `pwd`, `sem_name`) VALUES
(1, 'parixit', '123', 'MCA1'),
(2, 'mayank', '123', 'MCA2'),
(3, 'hari', '123', 'MCA3'),
(4, 'nitin', '123', 'MCA4'),
(5, 'kushwant', '123', 'MCA5');

-- --------------------------------------------------------

--
-- Table structure for table `teaching_skills`
--

CREATE TABLE `teaching_skills` (
  `rate_id` int(11) NOT NULL,
  `q1` int(100) NOT NULL,
  `q2` int(100) NOT NULL,
  `q3` int(100) NOT NULL,
  `q4` int(100) NOT NULL,
  `q5` int(100) NOT NULL,
  `teacher_id` varchar(50) NOT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `time_mgmt`
--

CREATE TABLE `time_mgmt` (
  `rate_id` int(11) NOT NULL,
  `q1` int(100) NOT NULL,
  `q2` int(100) NOT NULL,
  `q3` int(100) NOT NULL,
  `q4` int(100) NOT NULL,
  `q5` int(100) NOT NULL,
  `q6` int(100) NOT NULL,
  `teacher_id` varchar(50) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `t_login`
--

CREATE TABLE `t_login` (
  `teacher_id` int(11) NOT NULL,
  `teacher_name` varchar(255) NOT NULL,
  `un` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `pwd` varchar(100) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_login`
--

INSERT INTO `t_login` (`teacher_id`, `teacher_name`, `un`, `pwd`) VALUES
(0, 'Dr. Avinash Panwar', 'AP', '123'),
(1, 'Mrs. Sheela Bhat', 'SB', '123'),
(2, 'Dr. Manoj Kumar Jain', 'MJ', '123'),
(3, 'Mr. Mohit Gokhroo', 'MG', '123'),
(4, 'Mr. Jitesh', 'MJ', '123'),
(5, 'Mrs. Arpita Jain', 'AJ', '123'),
(6, 'Mr. Govind', 'MG', '123'),
(7, 'Mrs. Dipti Shrimal', 'DS', '123'),
(8, 'Mrs. Nayana Birla', 'NB', '123'),
(9, 'Mrs. Neha Jain', 'NJ', '123'),
(10, 'Miss Namita Jain', 'MNJ', '123'),
(11, 'Mr. Bhagwan', 'MB', '123'),
(12, 'Mr. Indra Kumar Prajapat', 'IP', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `semester`
--
ALTER TABLE `semester`
  ADD PRIMARY KEY (`sem_name`);

--
-- Indexes for table `sub_cmd`
--
ALTER TABLE `sub_cmd`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `s_login`
--
ALTER TABLE `s_login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `teaching_skills`
--
ALTER TABLE `teaching_skills`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `time_mgmt`
--
ALTER TABLE `time_mgmt`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `t_login`
--
ALTER TABLE `t_login`
  ADD PRIMARY KEY (`teacher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sub_cmd`
--
ALTER TABLE `sub_cmd`
  MODIFY `rate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `s_login`
--
ALTER TABLE `s_login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `teaching_skills`
--
ALTER TABLE `teaching_skills`
  MODIFY `rate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `time_mgmt`
--
ALTER TABLE `time_mgmt`
  MODIFY `rate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `t_login`
--
ALTER TABLE `t_login`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
