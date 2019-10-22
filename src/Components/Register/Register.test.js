import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Register from './Register'

describe(`Register component`, () => {

  it('renders a Register page by default', () => {
    const wrapper = shallow(<Register />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a section with the Register', () => {
    const section = shallow(<Register />)
      .find('.loginBG')
    expect(toJson(section)).toMatchSnapshot()
  })
})
