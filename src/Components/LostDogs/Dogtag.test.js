import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Dogtag from './Dogtag'

describe(`Dogtag function/component`, () => {

  const props = {
      id: 1,
      name: 'Rico', 
      img: 'http://google.com',
      category: 'Small',
      description: 'Test subject',
      date_created: '2029-01-22T08:00:00.000Z',
  }

  it('renders a Dogtag', () => {
    const wrapper = shallow(<Dogtag />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a div with with all dogTag info', () => {
    const div = shallow(<Dogtag {...props}/>)
      .find('.dogTag')
    expect(toJson(div)).toMatchSnapshot()
  })

})
