<p align="center"><a href="https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f"><img src="https://cdn-images-1.medium.com/max/2000/1*6czub9YyW8AVJpFlIgaDUQ.png" title="View tutorial" alt="React, React Router, Redux and Redux Thunk" width="900"></a></p>

## Prerequisite

Install nodejs from software center then install yarn as global module
npm install yarn --global

## Installation

```bash
git clone <Project REPO URL>
cd <Project Name>
yarn "or" npm install
```

## Get started

```bash

set APPLICATION_PROFILE=<profile>
profile values - local , dev, sit, uat, prod
same APPLICATION_PROFILE value can be used by Spring Boot

To start application
npm run start

```

## Code formatting

```bash
yarn pretty-quick --staged

Code formatting pre-commit hook is already added in package.json
"precommit": "pretty-quick --staged"
Note : With this hook you still see some files in your version control even after commit
If you try to commit it again you will get this error
0 files committed, 9 files failed to commit: <commit message>
warning: LF will be replaced by CRLF in <file>

If you are getting this error do following
1. You can ignore these files and revert
2. Disable pre commit hook and run code formatting manually before commit
3. Change line separator from CLRF to LF in your IDE
```

## Deployment

```bash
Before generating artifacts
set APPLICATION_PROFILE=<env_name>

env_name [ prod, sit, dev, local ]

This is required because build will generate static file from the host machine and packaged as JAR then deployed to server.
So setting APPLICATION_PROFILE on server is not enough.

If this is not set it will automatically pick up PROD configurations
```

## This boilerplate is inspired from

[create-react-app](https://github.com/facebookincubator/create-react-app)

[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)

[create-react-app-redux](https://github.com/notrab/create-react-app-redux)

[react-boilerplate](https://github.com/react-boilerplate)

- Tutorial: [Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)


## TODO
To prettyfy -> "precommit": "pretty-quick --staged",
