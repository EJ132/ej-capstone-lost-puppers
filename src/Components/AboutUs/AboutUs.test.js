import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AboutUs from './AboutUs'

describe(`AboutUs component`, () => {

  it('renders the AboutUs page by default', () => {
    const wrapper = shallow(<AboutUs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
