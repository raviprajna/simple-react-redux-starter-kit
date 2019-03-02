import local from "./local.js";
import dev from "./dev.js";
import sit from "./sit.js";
import prod from "./prod.js";
import _ from "lodash";

const environments = { local, dev, sit, prod };

/*
 1. Default to prod if profile is not set
 2. Possible values for REACT_APP_HOST_ENV which is set via APPLICATION_PROFILE environment variable
 prod, sit, dev, local
 3. Reason why I am setting REACT_APP_HOST_ENV via APPLICATION_PROFILE is because I want to have
 many configuration file apart from (dev, test, prod)
 4. SO based on REACT_APP_HOST_ENV configuration file is picked.
 NOTE : NODE_ENV is by default set to development, test or prod only so we cannot use it.
*/

const config = _.isUndefined(process.env.REACT_APP_HOST_ENV)
  ? environments["prod"]
  : environments[process.env.REACT_APP_HOST_ENV];

console.log(` REACT_APP_HOST_ENV ${process.env.REACT_APP_HOST_ENV}` );

export default {
  appName: "Customer Review",
  ...config
};
