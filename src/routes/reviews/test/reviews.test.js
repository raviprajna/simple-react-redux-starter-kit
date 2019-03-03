import React from 'react';
import Reviews from '../';
import { initialState } from '../reviews-reducer.js';
import {getComponentTree} from '../../../common/util/testUtil.js'
import reviews from "../data.js";

import configureStore from 'redux-mock-store';

describe('<Reviews/> Component Test', () => {



  it('renders <Reviews /> without comments', () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

    expect(getComponentTree(<Reviews reviews={[]} store={store} />)).toMatchSnapshot();
  });

//  it('renders <Reviews /> with comments', () => {
//    expect(getComponentTree(<Reviews reviews={reviews}/>)).toMatchSnapshot();
//  });


});