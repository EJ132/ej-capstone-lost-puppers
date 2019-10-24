import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import pupPage from './pupPage'

describe(`pupPage component`, () => {
  it('renders the pupPage', () => {
    const wrapper = shallow(<pupPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
