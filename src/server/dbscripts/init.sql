CREATE TABLE USERS (
  USER_ID SERIAL,
  EMAIL VARCHAR(80) UNIQUE NOT NULL,
  PASSWORD VARCHAR(64) NOT NULL,
  F_NAME VARCHAR(80),
  L_NAME VARCHAR(80),
  PREFIX VARCHAR(20),
  TYPE INT NOT NULL,
  PRIMARY KEY (USER_ID)
);

CREATE TABLE COURSES (
  COURSE_ID SERIAL,
  COURSE_NAME VARCHAR(150) NOT NULL,
  USER_ID INT,
  SEMESTER VARCHAR(80) NOT NULL,
  YEAR INT NOT NULL,
  PRIMARY KEY (COURSE_ID),
  FOREIGN KEY (USER_ID) REFERENCES USERS (USER_ID) ON DELETE SET NULL
);

CREATE TABLE FORMS (
  FORM_ID SERIAL,
  COURSE_ID INT NOT NULL,
  OUTCOME VARCHAR (80) NOT NULL,
  COMPLETED INT NOT NULL DEFAULT 0,
  DATA JSON NOT NULL,
  -- FILE
  PRIMARY KEY (FORM_ID),
  FOREIGN KEY (COURSE_ID) REFERENCES COURSES (COURSE_ID) ON DELETE CASCADE
);

CREATE TABLE FILES (
  FILE_ID SERIAL,
  FILE_NAME VARCHAR(100) NOT NULL,
  ORIGINAL_FILE_NAME VARCHAR(100) NOT NULL,
  FORM_ID INT NOT NULL,
  -- FILE
  PRIMARY KEY (FILE_ID),
  FOREIGN KEY (FORM_ID) REFERENCES FORMS (FORM_ID) ON DELETE CASCADE
);

INSERT INTO USERS (EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES('admin@bing.com', '5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8', 'The', 'Senate', 'Mr.', 0);

CREATE EXTENSION pgcrypto;
