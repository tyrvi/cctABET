INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('smith', '123', 'smith@lipscomb.edu', 0);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('johnson', '123', 'johnson@lipscomb.edu', 1);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('williams', '123', 'williams@lipscomb.edu', 2);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('jones', '123', 'jones@lipscomb.edu', 3);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('brown', '123', 'brown@lipscomb.edu', 4);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('davis', '123', 'davis@lipscomb.edu', 5);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('miller', '123', 'miller@lipscomb.edu', 6);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('wilson', '123', 'wilson@lipscomb.edu', 7);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('moore', '123', 'moore@lipscomb.edu', 8);

INSERT INTO USERS (USERNAME, PASSWORD, EMAIL, TYPE)
VALUES('taylor', '123', 'taylor@lipscomb.edu', 9);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(0, 'Intro to Computer Science', 'smith@lipscomb.edu', 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(1, 'Intro to Computer Programming', 'johnson@lipscomb.edu', 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(2, 'Object Oriented Systems and Design', 'williams@lipscomb.edu', 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(3, 'Data Structures & Algorithms', 'jones@lipscomb.edu', 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(4, 'Computer Organization', 'brown@lipscomb.edu', 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(5, 'Operating Systems', 'davis@lipscomb.edu', 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(6, 'Design and Analysis of Algorithms', 'miller@lipscomb.edu', 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(7, 'Artificial Intelligence', 'wilson@lipscomb.edu', 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(8, 'Compiler Construction', 'moore@lipscomb.edu', 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, EMAIL, SEMESTER, YEAR)
VALUES(9, 'Comparative Programming', 'taylor@lipscomb.edu', 'Spring', 2018);

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(0, 0, 'Knowledge Application', 0, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(1, 1, 'Problem Analysis', 1, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(2, 2, 'Solution Des, Impl & Eval', 2, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(3, 3, 'Teamwork', 3, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(4, 4, 'Ethical Responsibilities', 4, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(5, 5, 'Effective Communication', 5, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(6, 6, 'Understanding Impact', 6, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(7, 7, 'Professional Development', 7, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(8, 8, 'Use of Current Technologies', 8, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(9, 9, 'Theoretical Foundation', 9, );

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(10, 10, 'Application of Design & Devt', 10, );

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(0, 'DoNoCopy0.pdf', 0);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(1, 'DoNoCopy1.pdf', 1);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(2, 'DoNoCopy2.pdf', 2);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(3, 'DoNoCopy3.pdf', 3);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(4, 'DoNoCopy4.pdf', 4);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(5, 'DoNoCopy5.pdf', 5);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(6, 'DoNoCopy6.pdf', 6);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(7, 'DoNoCopy7.pdf', 7);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(8, 'DoNoCopy8.pdf', 8);

INSERT INTO FILES (FILE_ID, FILE_NAME, FORM_ID)
VALUES(9, 'DoNoCopy9.pdf', 9);
