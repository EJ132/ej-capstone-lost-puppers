import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Profile from './Profile'

describe(`Profile component`, () => {

  it('renders a Profile page by default', () => {
    const wrapper = shallow(<Profile />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
