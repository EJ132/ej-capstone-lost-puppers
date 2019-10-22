import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MakeComment from './MakeComment'

describe(`MakeComment component`, () => {

  it('renders a MakeComment page by default', () => {
    const wrapper = shallow(<MakeComment />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
