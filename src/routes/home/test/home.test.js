import React from 'react';
import Home from '../';
import {getComponentTree} from '../../../common/util/testUtil.js'

describe('<Home/> Component Test', () => {

  it('renders <Home /> ', () => {
    expect(getComponentTree(<Home />)).toMatchSnapshot();
  });

});