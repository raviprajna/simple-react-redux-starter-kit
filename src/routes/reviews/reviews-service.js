import * as serviceUtil from "../../common/util/serviceUtil.js";
import Promise from "es6-promise";
import reviews from "./data.js";

export function fetchReviews() {
  return Promise.resolve(reviews);
  // return serviceUtil.invoke("/api/reviews", { method: "get" }, { showLoading : true });
}
