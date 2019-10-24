import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Hamburger from './Hamburger'

describe(`Hamburger component`, () => {
  it('renders the Hamburger', () => {
    const wrapper = shallow(<Hamburger />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
