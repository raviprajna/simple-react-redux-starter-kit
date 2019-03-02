import reviews from "./reviews/reviews-reducer.js";
// import home from "./home/home-reducer.js";

/*
1. allReducer is an object where KEY as name of state and
   VALUE is the piece of state returned by reducer
*/
// Add home reducer key if required : ex ( home : home) ,

const allReducers = {
  reviews : reviews
};

export default allReducers;
