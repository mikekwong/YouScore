import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'

import App from '../App'
import Players from '../Players/Players'

describe('App component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  test('should render a <div/>', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  // test('should render the Players Component', () => {
  //   expect(wrapper.containsMatchingElement(<Players />)).toEqual(true)
  // })
})
