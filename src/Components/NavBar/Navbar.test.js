import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavBar from './Navbar'

describe(`Navbar component`, () => {

  it('renders the NavBar', () => {
    const wrapper = shallow(<NavBar />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
