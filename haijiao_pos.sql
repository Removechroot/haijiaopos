/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.199.109
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : 192.168.199.109:3306
 Source Schema         : haijiao_pos

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 04/02/2021 21:20:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Menu
-- ----------------------------
DROP TABLE IF EXISTS `Menu`;
CREATE TABLE `Menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `foodName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` int(11) NULL DEFAULT NULL,
  `outofprint` tinyint(255) NULL DEFAULT NULL,
  `haltSales` tinyint(255) NULL DEFAULT NULL,
  `count` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of Menu
-- ----------------------------
INSERT INTO `Menu` VALUES (1, '1', '酸辣牛肉面', 18, 0, 0, 1);
INSERT INTO `Menu` VALUES (2, '2', '云吞面', 18, 0, 0, 1);
INSERT INTO `Menu` VALUES (3, '3', '酸辣粉', 18, 0, 0, 1);
INSERT INTO `Menu` VALUES (4, '3', '螺蛳粉', 18, 1, 0, 1);
INSERT INTO `Menu` VALUES (5, '4', '牛肉面', 18, 1, 0, 1);
INSERT INTO `Menu` VALUES (6, '4', '牛肉面', 18, 1, 0, 1);
INSERT INTO `Menu` VALUES (23, '8', '肉松小贝', 12, 0, 0, 99);

-- ----------------------------
-- Table structure for VipCard
-- ----------------------------
DROP TABLE IF EXISTS `VipCard`;
CREATE TABLE `VipCard`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cardNumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `startTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `endTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of VipCard
-- ----------------------------
INSERT INTO `VipCard` VALUES (1, '123456', '刘先生', '2020-01-20', '2099-12-12');

SET FOREIGN_KEY_CHECKS = 1;
