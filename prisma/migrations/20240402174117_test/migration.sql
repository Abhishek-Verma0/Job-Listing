-- CreateTable
CREATE TABLE `JobPosting` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `Salary` DOUBLE NOT NULL DEFAULT 0,
    `location` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NULL,
    `employmentType` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
