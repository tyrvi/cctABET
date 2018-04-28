
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
