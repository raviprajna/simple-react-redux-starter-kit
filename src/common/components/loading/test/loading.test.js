import React from 'react';
import Loading from '../';
import {getComponentTree, getWrapper } from '../../../util/testUtil.js';
import { Flex, Box } from 'rebass';

describe('<Loading /> Component Test', () => {
  it('renders <Loading /> components', () => {

  const wrapper = getWrapper(<Loading />);

  // Print Html to console
  console.log(wrapper.debug());

  // Assert if loading contains particular react element.
  expect(wrapper.contains(<Box> Loading... </Box>)).toEqual(true);

  // Assert with snapshot
  expect(getComponentTree(<Loading />)).toMatchSnapshot();


  });

});