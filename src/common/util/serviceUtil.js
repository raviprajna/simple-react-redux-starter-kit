import "whatwg-fetch";
import Promise from "es6-promise";
import * as appUtil from "./appUtil.js";
import * as globalActions from "../reducer/sharedReducer.js";
import config from "../../config";

function validateStatus(resp) {
  if (resp.status >= 200 && resp.status < 300) {
    return Promise.resolve(resp);
  }

  return Promise.reject({
      message: resp.message,
      status: resp.status,
      statusCode: resp.statusText,
      url: resp.url
    });
}

export function invoke(resource, payload, options) {
  let serviceHost = config.host + ":" + config.port;
  let url = serviceHost + resource;

  const headers = {
    "Content-Type": "application/json",
    Cache: "no-cache"
  };

  const mode = "cors";
  payload["headers"] = headers;
  // payload["credentials"] = "include";

  if (options && options.showLoading)
    appUtil.globalDispatcher(globalActions.showHideLoadingComponent(true));
  return fetch(url, payload)
    .then(validateStatus)
    .then(function(resp) {
      if (options && options.showLoading)
        appUtil.globalDispatcher(globalActions.showHideLoadingComponent(false));
      return resp.json();
    });
}
