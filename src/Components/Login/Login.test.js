import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Login from './Login'

describe(`Login component`, () => {

  it('renders a Login page by default', () => {
    const wrapper = shallow(<Login />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
