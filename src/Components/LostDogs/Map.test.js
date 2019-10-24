import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Map from './Map'

describe(`Map component`, () => {

  it('renders the Map', () => {
    const wrapper = shallow(<Map />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})
