import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Main from './Main'

describe(`Main component`, () => {

  it('renders the home page by default', () => {
    const wrapper = shallow(<Main />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
