import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Create from './Create'

describe(`Create component`, () => {

  it('renders a Create page by default', () => {
    const wrapper = shallow(<Create />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders only the form', () => {
      const form = shallow(<Create />)
        .find('.createPup')
      expect(toJson(form)).toMatchSnapshot()
  })
})
