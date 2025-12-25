-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 14, 2023 at 05:36 PM
-- Server version: 5.7.36
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nebosh_iosh`
--

-- --------------------------------------------------------

--
-- Table structure for table `certificates`
--

DROP TABLE IF EXISTS `certificates`;
CREATE TABLE IF NOT EXISTS `certificates` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reference` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `certificates`
--

INSERT INTO `certificates` (`id`, `name`, `reference`, `status`, `created_at`, `updated_at`) VALUES
(1, 'NEBOSH International General Certificate in Occupational Health', NULL, 1, '2023-05-05 11:49:33', '2023-05-06 05:55:56');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_04_190050_create_prompts_table', 1),
(6, '2023_02_04_214349_create_characters_table', 1),
(7, '2023_02_07_172821_create_plans_table', 1),
(8, '2023_02_07_175115_create_muser_to_plans_table', 1),
(9, '2023_02_07_175529_create_motps_table', 1),
(10, '2023_02_10_111202_add_column_to_characters_table', 1),
(11, '2023_02_10_163313_add_is_admin_to_users_table', 1),
(14, '2023_05_06_105929_create_records_table', 4),
(13, '2023_02_04_214349_create_certificates_table', 3),
(15, '2023_05_06_161408_add_soft_delete_to_record', 5);

-- --------------------------------------------------------

--
-- Table structure for table `motps`
--

DROP TABLE IF EXISTS `motps`;
CREATE TABLE IF NOT EXISTS `motps` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otp_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otp_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

DROP TABLE IF EXISTS `records`;
CREATE TABLE IF NOT EXISTS `records` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `learner_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `learner_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `certificate_id` int(10) UNSIGNED NOT NULL,
  `sqa_reference` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_awarded` date DEFAULT NULL,
  `certificate_log_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` text COLLATE utf8mb4_unicode_ci,
  `registration_no` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `learner_name`, `learner_number`, `certificate_id`, `sqa_reference`, `date_awarded`, `certificate_log_number`, `link`, `registration_no`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Sekh Mohammad Neyazuddin', '00718066', 1, 'R630 04', '2023-01-11', '00718066/1332338', 'http://127.0.0.1:8080/validation/details/6DF8038E24FDAB3BB22F5B93', '6DF8038E24FDAB3BB22F5B93', '2023-05-06 11:21:29', '2023-05-06 11:23:40', '2023-05-06 11:23:40'),
(2, 'Alisa Webster', '441', 1, 'Inventore ut sed qui', '1992-04-14', '426', 'https://neboshazurrewebsites.net/validation/details/404CA79186C4FA25DEDD99F4', '404CA79186C4FA25DEDD99F4', '2023-05-11 06:50:25', '2023-05-11 06:50:25', NULL),
(3, 'Rebecca Madden', '66', 1, 'Vel amet nihil qui', '1977-06-01', '326', 'https://neboshazurrewebsites.net/validation/details/8813918F66517B75CC4B1F30', '8813918F66517B75CC4B1F30', '2023-05-11 07:19:17', '2023-05-11 07:19:17', NULL),
(4, 'Wyoming Le', '369', 1, 'Officia officiis ali', '1995-08-01', '955', 'https://neboshazurrewebsites.net/validation/details/15DFA6F2157B0FD8051B2E0D', '15DFA6F2157B0FD8051B2E0D', '2023-05-11 07:19:24', '2023-05-11 07:19:24', NULL),
(5, 'Wyatt Juarez', '341', 1, 'Cillum anim cumque u', '2020-11-10', '880', 'https://neboshazurrewebsites.net/validation/details/A772C3AA6262C42F3EA00A59', 'A772C3AA6262C42F3EA00A59', '2023-05-11 07:19:34', '2023-05-11 07:19:34', NULL),
(6, 'Mercedes Gregory', '956', 1, 'Sint nulla elit ut', '1989-12-10', '378', 'https://neboshazurrewebsites.net/validation/details/A686D899381195A2514159DB', 'A686D899381195A2514159DB', '2023-05-11 07:19:42', '2023-05-11 07:19:42', NULL),
(7, 'Priscilla Woodward', '109', 1, 'Officiis voluptate a', '2003-10-03', '98', 'https://neboshazurrewebsites.net/validation/details/BA6316F8FA08CD3B8359B220', 'BA6316F8FA08CD3B8359B220', '2023-05-11 07:19:51', '2023-05-11 07:19:51', NULL),
(8, 'Jorden Mcguire', '789', 1, 'Non ipsa fugiat min', '2016-03-23', '116', 'https://neboshazurrewebsites.net/validation/details/C872B290AC0A5FDF895786E8', 'C872B290AC0A5FDF895786E8', '2023-05-11 07:19:59', '2023-05-11 07:19:59', NULL),
(9, 'Jamalia Reed', '141', 1, 'Perferendis autem is', '1990-12-31', '942', 'https://neboshazurrewebsites.net/validation/details/0AF4D335B89C23B9D79DB43E', '0AF4D335B89C23B9D79DB43E', '2023-05-11 07:20:06', '2023-05-11 07:20:06', NULL),
(10, 'Theodore Woodard', '610', 1, 'Soluta a corrupti m', '1987-03-22', '158', 'https://neboshazurrewebsites.net/validation/details/25F767899800DFA01D1334AC', '25F767899800DFA01D1334AC', '2023-05-11 07:20:17', '2023-05-11 07:20:17', NULL),
(11, 'Theodore Woodard', '610', 1, 'Soluta a corrupti m', '1987-03-22', '158', 'https://neboshazurrewebsites.net/validation/details/AA8CDE0440DD54BA59395FF9', 'AA8CDE0440DD54BA59395FF9', '2023-05-11 07:20:17', '2023-05-11 07:20:17', NULL),
(12, 'Kessie Chavez', '953', 1, 'Vero fugiat et dolor', '1982-12-10', '469', 'https://neboshazurrewebsites.net/validation/details/D3477EEEBC9F5CA27C51C035', 'D3477EEEBC9F5CA27C51C035', '2023-05-11 07:20:30', '2023-05-11 07:20:30', NULL),
(13, 'Hayfa Holman', '414', 1, 'Veritatis quas aliqu', '2001-09-24', '329', 'https://neboshazurrewebsites.net/validation/details/E6C94B0DE4E221F9CE00337B', 'E6C94B0DE4E221F9CE00337B', '2023-05-11 07:20:42', '2023-05-11 07:20:42', NULL),
(14, 'Elaine Ward', '567', 1, 'Debitis ea voluptas', '1992-01-10', '410', 'https://neboshazurrewebsites.net/validation/details/4B9188AC0BFD7A209AFE4E25', '4B9188AC0BFD7A209AFE4E25', '2023-05-27 05:09:07', '2023-05-27 05:09:07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_code` bigint(20) NOT NULL,
  `user_uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `user_code`, `user_uuid`, `email_verified_at`, `password`, `remember_token`, `status`, `created_at`, `updated_at`, `is_admin`) VALUES
(1, 'admin', 'admin@admin.com', 231234, 'seuhsji-asdfnk-ujhkhs', NULL, '$2y$10$jedQ29J9L6oDIL8so8NFe.aqMqUEkpPHyiiPuoF3N9XLTZVnh6cG.', NULL, 1, NULL, NULL, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
