import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Find from './Find'

describe(`Find component`, () => {

  it('renders a Find page by default', () => {
    const wrapper = shallow(<Find />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
