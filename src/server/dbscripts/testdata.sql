INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(1, 'johnson@lipscomb.edu', '123', 'Dwayne', 'Johnson', 'Dr.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(2, 'williams@lipscomb.edu', '123', 'John', 'Williams', 'Mr.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(3, 'jones@lipscomb.edu', '123', 'George', 'Jones', 'Dr,', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(4, 'brown@lipscomb.edu', '123', 'Nichole', 'Brown', 'Mrs.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(5, 'davis@lipscomb.edu', '123', 'Dorothy', 'Davis', 'Dr.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(6, 'miller@lipscomb.edu', '123', 'Mike', 'Miller', 'Dr.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(7, 'wilson@lipscomb.edu', '123', 'Owen', 'Wilson', 'Mr.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(8, 'moore@lipscomb.edu', '123', 'Matt', 'Moore', 'Mr.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(9, 'taylor@lipscomb.edu', '123', 'Zachary', 'Taylor', 'Dr.', 1);

INSERT INTO USERS (USER_ID, EMAIL, PASSWORD, F_NAME, L_NAME, PREFIX, TYPE)
VALUES(10, 'smith@lipscomb.edu', '123', 'John', 'Smith', 'Dr.', 0);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(0, 'Intro to Computer Science', 0, 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(1, 'Intro to Computer Programming', 0, 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(2, 'Object Oriented Systems and Design', 0, 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(3, 'Computer Applications', 1, 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(4, 'Data Structures & Algorithms', 1, 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(5, 'Computer Organization', 1, 'Fall', 2017);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(6, 'Operating Systems', 2, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(7, 'Design and Analysis of Algorithms', 2, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(8, 'Artificial Intelligence', 3, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(9, 'Compiler Construction', 3, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(10, 'Comparative Programming', 4, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(11, 'Senior Seminar', 4, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(12, 'Senior Project', 9, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(13, 'Intro to Software Engineering', 9, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(14, 'Web Application Development I', 5, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(15, 'Into to Information Security', 5, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(16, 'Programming Challenges', 5, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(17, 'Network Principles', 6, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(18, 'Cryptography', 6, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(19, 'Database Management', 7, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(20, 'Competition Programming', 7, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(21, 'Computability and Complexity Theory', 7, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(22, 'Computer Graphics', 8, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(23, 'Fundamentals of Automata', 8, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(24, 'Numerical Methods', 8, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(25, 'Internship', 9, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(26, 'Math Structures', 9, 'Spring', 2018);

INSERT INTO COURSES (COURSE_ID, COURSE_NAME, USER_ID, SEMESTER, YEAR)
VALUES(27, 'Algorithmic Graph Theory', 9, 'Spring', 2018);

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(0, 0, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(1, 1, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(2, 1, 'Solution Des, Impl & Eval', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(3, 2, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(4, 2, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(5, 2, 'Solution Des, Impl & Eval', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(6, 3, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(7, 3, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(8, 3, 'Solution Des, Impl & Eval', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(9, 4, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(10, 4, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(11, 4, 'Solution Des, Impl & Eval', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(12, 5, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(13, 5, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(14, 5, 'Solution Des, Impl & Eval', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(15, 6, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(16, 6, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(17, 6, 'Solution Des, Impl & Eval', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(18, 6, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(19, 6, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(20, 6, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(21, 6, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(22, 7, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(23, 7, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(24, 7, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(25, 7, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(26, 7, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(27, 7, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(28, 7, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(29, 7, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(30, 8, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(31, 8, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(32, 8, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(33, 8, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(34, 9, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(35, 9, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(36, 9, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(37, 10, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(38, 10, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(39, 10, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(40, 11, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(41, 11, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(42, 11, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(43, 12, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(44, 12, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(45, 12, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(46, 12, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(47, 12, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(48, 12, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(49, 13, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(50, 13, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(51, 13, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(52, 13, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(53, 13, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(54, 14, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(55, 14, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(56, 14, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(57, 14, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(58, 14, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(59, 15, 'Knowledge Application', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(60, 15, 'Problem Analysis', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(61, 15, 'Professional Development', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(62, 15, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(63, 15, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(64, 16, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(65, 16, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(66, 16, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(67, 16, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(68, 16, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(69, 16, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(70, 17, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(71, 17, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(72, 17, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(73, 17, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(74, 17, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(75, 17, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(76, 18, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(77, 18, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(78, 18, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(79, 18, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(80, 18, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(81, 18, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(82, 19, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(83, 19, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(84, 19, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(85, 19, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(86, 19, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(87, 19, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(88, 20, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(89, 20, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(90, 20, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(91, 20, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(92, 20, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(93, 20, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(94, 21, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(95, 21, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(96, 21, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(97, 21, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(98, 21, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(99, 21, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(100, 22, 'Teamwork', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(101, 22, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(102, 22, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(103, 22, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(104, 22, 'Use of Current Technologies', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(105, 22, 'Theoretical Foundation', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(106, 23, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(107, 23, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(108, 23, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(109, 24, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(110, 24, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(111, 24, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(112, 25, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(113, 25, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(114, 25, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(115, 26, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(116, 26, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(117, 26, 'Understanding Impact', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(118, 27, 'Ethical Responsibilities', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(119, 27, 'Effective Communication', '{}');

INSERT INTO FORMS (FORM_ID, COURSE_ID, OUTCOME, DATA)
VALUES(120, 27, 'Understanding Impact', '{}');

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
