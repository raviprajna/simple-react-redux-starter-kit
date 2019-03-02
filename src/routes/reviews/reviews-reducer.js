import { createAction, createReducer } from "redux-act";
import * as service from "./reviews-service.js";
import * as globalActions from "../../common/reducer/sharedReducer.js";

// ------------------------------------
// Actions
// ------------------------------------
export const setReviews = createAction("REVIEWS/setReviews");

//export const multipleDispatch = () => {
//  return dispatch => {
//    dispatch(action1());
//    dispatch(action2());
//  };
//};

export function fetchReviews() {
  return (dispatch, getState) => {
    return service.fetchReviews()
    .then(function(resp) {
      dispatch(setReviews(resp));
    })
    .catch(function(resp) {
      dispatch(globalActions.showHideErrorModal({
               message: resp.message,
               status: resp.status,
               statusCode: resp.statusText,
               url: resp.url
             }));

    });
  };
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [setReviews]: (state, action) => {
    state.reviews = action.payload;
    return state;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  let returnState = handler ? handler(state, action) : state;
  return { ...returnState };
}

// ------------------------------------
// INITIAL STATE
// ------------------------------------
export const initialState = {
  reviews: []
};
