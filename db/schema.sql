CREATE DATABASE luchador_db;

USE luchador_db;

CREATE TABLE players (
    id INTEGER NOT NULL AUTO_INCREMENT,
    token VARCHAR(200) NOT NULL DEFAULT "0",
    npc BOOLEAN NOT NULL DEFAULT 0,
    boss BOOLEAN NOT NULL DEFAULT 0,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    last_login TIMESTAMP NOT NULL DEFAULT current_timestamp,
    
    char_name VARCHAR(30) NOT NULL,
    profile_pic VARCHAR (200) DEFAULT "put path to a local image here (default image)",

    exp INTEGER(5) NOT NULL DEFAULT 0,
    lvl INTEGER(2) NOT NULL DEFAULT 1,
    new_ability INTEGER(1) DEFAULT 0,
    new_ability_rare INTEGER(1) DEFAULT 0,

    fame INTEGER(4) NOT NULL DEFAULT 0,
    str INTEGER(3) NOT NULL DEFAULT 10,
    hp INTEGER(3) NOT NULL DEFAULT 50,

    fights INTEGER (4) NOT NULL DEFAULT 0,
    wins INTEGER (4) NOT NULL DEFAULT 0,
    losses INTEGER (4) NOT NULL DEFAULT 0,

    tickets INTEGER (2) NOT NULL DEFAULT 15,
    tickets_max INTEGER (2) NOT NULL DEFAULT 15,

    refresh INTEGER (2) NOT NULL DEFAULT 0,

    ab1_name VARCHAR(30) NOT NULL DEFAULT "Punch",
    ab1_dlow INTEGER(3) NOT NULL DEFAULT 4,
    ab1_dhigh INTEGER(3) NOT NULL DEFAULT 8,
    ab1_speed INTEGER(1) NOT NULL DEFAULT 5,
    ab1_crit DECIMAL(3,2) NOT NULL DEFAULT 0.10,
    ab1_fail DECIMAL(3,2) NOT NULL DEFAULT 0.05,
    ab1_color VARCHAR(6) NOT NULL DEFAULT "000000",
    ab1_icon VARCHAR(50) NOT NULL DEFAULT "UPDATE",

    ab2_name VARCHAR(30) NOT NULL DEFAULT "Kick",
    ab2_dlow INTEGER(3) NOT NULL DEFAULT 5,
    ab2_dhigh INTEGER(3) NOT NULL DEFAULT 12,
    ab2_speed INTEGER(1) NOT NULL DEFAULT 3,
    ab2_crit DECIMAL(3,2) NOT NULL DEFAULT 0.00,
    ab2_fail DECIMAL(3,2) NOT NULL DEFAULT 0.00,
    ab2_color VARCHAR(6) NOT NULL DEFAULT "000000",
    ab2_icon VARCHAR(50) NOT NULL DEFAULT "UPDATE",

    ab3_name VARCHAR(30) NOT NULL DEFAULT "Ult",
    ab3_dlow INTEGER(3) NOT NULL DEFAULT 10,
    ab3_dhigh INTEGER(3) NOT NULL DEFAULT 20,
    ab3_speed INTEGER(1) NOT NULL DEFAULT 1,
    ab3_crit DECIMAL(3,2) NOT NULL DEFAULT 0.00,
    ab3_fail DECIMAL(3,2) NOT NULL DEFAULT 0.00,
    ab3_color VARCHAR(6) NOT NULL DEFAULT "000000",
    ab3_icon VARCHAR(50) NOT NULL DEFAULT "UPDATE",

    PRIMARY KEY (id)
);

CREATE TABLE levels (
    lvl INTEGER NOT NULL AUTO_INCREMENT,
    exp_needed INTEGER NOT NULL,

    PRIMARY KEY (lvl)
);
