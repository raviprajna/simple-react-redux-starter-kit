<p align="center"><img src="src/resource/img/Banner.png" alt="React, React Router, Redux, Redux Thunk, Rebass, Styled Components " width="900"></a></p>

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

## Testing

```bash

npm test or yarn test
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

```

## Deployment

```bash
Before generating artifacts
set APPLICATION_PROFILE=<env_name>

env_name [ prod, sit, dev, local ]

This is required because build will generate static file from the host machine and packaged as JAR then deployed to server.
So setting APPLICATION_PROFILE on server is not enough.

If this is not set it will automatically pick up PROD configurations

npm run build or yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

```

## More Details on Testing and Deployment.
https://github.com/facebook/create-react-app


## This boilerplate is built on top of

[create-react-app](https://github.com/facebookincubator/create-react-app)

[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)

[create-react-app-redux](https://github.com/notrab/create-react-app-redux)

[react-boilerplate](https://github.com/react-boilerplate)

[rebass](https://rebassjs.org/getting-started)

## Code formatting

```bash
#yarn pretty-quick --staged

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

## FAQ
Why APPLICATION_PROFILE why not node.env
- This is to have common environment variable for REACT and API components.
  Also name is more generic now