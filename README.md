# Lipscomb ABET Data Website
Website for Lipscomb ABET Data Collection

## Installation
A quick guide on installation to start working on the site.

1. Clone the project repository into the directory of your choice `git clone https://github.com/tyrvi/cctABET.git`
2. Install [Docker](https://www.docker.com/community-edition).
3. Install node.js. You can find a link to the
[LTS version here](https://nodejs.org/en/download/). The LTS version we are using is v8.9.4.
4. You need to install create-react-app globally. So now that you have npm you should be able to type `npm install -g create-react-app`. Make sure that create-react-app is installed with `create-react-app --version`
5. Next go to the directory of the react app in the project `cd cctABET/src/site`.
6. Once in the correct directory run `npm install`. This should install all the dependencies of the application.
7. Next go to the server folder located at `cctABET/src/server`.
8. Here we also need to run `npm install`.
9. Once that has installed you can start the server. Change back to the project directory's home, and create the docker container with `./create_docker.sh`. This will take some time to run.
10. Once the Docker container is created, you can start the server with `./run_docker.sh`
11. To access the site, simply point your web browser to `localhost:3000`

## Tools

- Docker
- PostgresQL v9.5
- Trello
- Slack
- Git/GitHub

## Libraries

- express
  - pg (node-postgres)
  - express-session
- reactjs
  - redux
  - redux-logger
  - redux-thunk

# Development Process

## Git
We are basing our git branching model off of [this article](http://nvie.com/posts/a-successful-git-branching-model/). The master branch is the *release* branch i.e. the master branch should always be as bug free as possible. The dev branch is for testing and branching off of when new features are created or bugs need to be fixed. If a bug is found on the master branch someone should check whether it also exists on the dev branch. If it does then a bug branch should be created off of dev where the bug is fixed and then merged back into dev to be tested before being merged back into master. Once a feature/bug has been completed/fixed a pull request should be created for merging into dev. This should be reviewed by at least one another person before it is merged. Once merged the feature/bug branch should be deleted.


### Branch naming
- For new features name the branch `feature/descriptivename`
- For bug branches name the branch `bug/bugname`

## Useful Git commands
Get a copy of the git repository.
```
git clone REPOSITORY_URL
```

Create a new branch with the name `BRANCH_NAME`.
```
git branch BRANCH_NAME
```

See a list of files and paths that have differences from the last commit.
```
git status
```

Stage the list of files you would like to commit.
```
git add LIST_OF_FILES
```

Create commit of the staged files storing changes with a log message describing the changes made.
```
git commit -m 'YOUR_COMMENT_HERE`
```

# Docker
Docker needs to have the following:

- Ubuntu server 16.04 LTS
- Apache
- node v8.9.4 LTS (includes npm)
- PostgreSQL


# JS Code Style
The code style used for all JavaScript code throughout the project. We are using [editor config](http://editorconfig.org/) to ensure that all developers use the same editor settings. Check the link for an extension for your editor of choice. The `.editorconfig` file in the root of the repository contains the editorconfig settings.

## Indentation
All indentation will be tabs inserted as spaces (4 spaces == 1 tab).

## Naming
On the **back end** Variables and functions are in snake_casing:
```javascript
let major_minor = 'CS / Interpretive dance';
```

On the **front end** variables and functions are in camelCase starting with a lowercase letter
due to react naming conventions:
```javascript
let majorMinor = 'CS / Interpretive dance';
```

Classes are are always in CamelCasing and should start with a capital letter:
```javascript
class RobotArmyManager {
}
```
For react components file names are CamelCase starting with a capital letter,
otherwise all regular camelCase:

- `RobotArmyManager.js`
- `robotArmyManager.js`

Constants should be named with all caps snake casing:
```javascript
const LOG_IN = 'LOG_IN';
```

## Braces
Braces will follow the K&R approach of being on the same line.
ex:
```javascript
if(car == "Arisoa's Car") {
   console.log('That green mustang tho');
} else {
   console.log('Nice car.');
}
```

## Functions
Functions are named with camelCasing with the first letter being lowercase.

You should comment functions like the example below as well:
```javascript
/*
   Sums the two paramaters
   Params:
      a: One of the integers to sum
      b: The other integer to sum
   Returns:
      The sum of a and b
*/
function sumTwoNumbers(a, b) {
   ...
}
```
## Inline Functions & Callbacks

Use the [Arrow notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `() => syntax` for callbacks or inline functions:
```javascript
router.get('/', (req, res, next) => {
   res.send('Hello World!');
});
```

# Project Timeline

## Senior Seminar Spring 2018
### Project #2 (ABET website) Timeline

Connor Austin, Andrew Kerley, Thais Minet, Brandon Toppins, Taylor Watkins

Week (Sun - Sat) | Goal | Description
---------------- | ---- | -----------
Week 1: 1/14/18 - 1/20/18 | Setting up local environments and server | Everyone should be ready to begin development
Week 2: 1/21/18 - 1/27/18 | Requirements gathering and server | We have spoken to Dr. Arisoa and clarified and requirements questions we have. We have begun to set up the server.
Week 3: 1/28/18 - 2/3/18 | Login page | Users should be able to login and be authenticated on login.
Week 4: 2/4/10 - 2/10/18 | Preliminary Dashboard page | A semi-functional dashboard component
Week 5: 2/11/18 - 2/17/18 | Docker and server ready | Docker set up and ready to be deployed to server so the current version of the site can be put up.
Week 6: 2/18/18 - 2/24/18 | Preliminary course forms | A working preliminary version of the forms that a professor submits for a course.
Week 7: 2/25/18 - 3/3/18 | Completed course forms and dashboard| Complete working version of the ABET forms that professors complete.
Week 8: 3/4/18 - 3/10/18 | Preliminary compilation of course data | Preliminary compilation of professor submitted data from courses.
Week 9: 3/11/18 - 3/17/18 | Complete compilation of data from courses | Ability to generate and compile report of ABET data from all courses
Week 10: 3/18/18 - 3/24/18 | Testing/Documentation | Testing, cleanup of code and documentation. Ensuring successful deployment.
Week 11: 3/25/18 - 3/31/18 | Testing/Documentation | Continue testing and developing documentation of work.
Week 12: 4/1/18 - 4/7/18 | API reference documentation/Testing | Complete server API reference documentation (OpenAPI/Swagger).
Week 13: 4/8/18 - 4/14/18 | Testing |
Week 14: 4/15/18 - 4/21/18 | Testing/Final deployment |
Week 15: 4/22/18 - 4/28/18 | Deploy/Presentation |

# Project Job Assignments
(Job Roles are not restrictive, everyone has a chance to work where they’re needed)

Thais Minet:
- Developer Tools Lead
- Front-end Development Lead
- Code Reviewer

Connor Austin:
- Backend Development Lead
- Docker
- Server
- Database
- Code Reviewer

Brandon Toppins:
- Backend and Frontend programming
- Server
- Database
- Code Reviewer

Andrew Kerley:
- Server
- Database
- Code Reviewer

Taylor Watkins:
- Frontend Design and Development
- Code Reviewer
