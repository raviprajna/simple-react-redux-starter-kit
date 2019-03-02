import store from "../../store.js";
import _ from "lodash";

// ------------------------------------
// Private functions
// ------------------------------------

// ------------------------------------
// Public functions
// ------------------------------------


export function globalDispatcher(action) {
  store.dispatch(action);
}


export function cleanUpArray(test_array) {
  // Remove null, 0, blank, false, undefined and NaN values from an array

  var index = -1,
    arr_length = test_array ? test_array.length : 0,
    resIndex = -1,
    result = [];

  while (++index < arr_length) {
    var value = test_array[index];

    if (value) {
      result[++resIndex] = value;
    }
  }

  return result;
}



