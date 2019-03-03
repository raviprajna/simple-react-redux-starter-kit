import React from 'react';
import Reviews from '../';
import reviewsReducer, { initialState, setReviews } from '../reviews-reducer.js';
import reviews from "../data.js";

import configureStore from 'redux-mock-store';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };

    expect(reviewsReducer(initialState, action)).toMatchSnapshot();
  });
});

describe('Set reviews', () => {
  test('returns the correct state', () => {
    const action = { type: setReviews.type, payload: reviews };

    expect(reviewsReducer(initialState, action)).toMatchSnapshot();
  });
});
