import ActiveButton from '../ActiveButton'
import React from 'react'
import { shallow } from 'enzyme'

describe('ActiveButton', () => {
  const onClickSpy = jest.fn()
  const c = shallow(<ActiveButton 
    text='My Test Button'
    onClick={onClickSpy}
  />)
  
  it('renders correctly', () => {
    expect(c.find('button').node).toBeDefined()
    expect(c.contains('My Test Button')).toEqual(true)
  })

  it('handles the onClick', () => {
    c.simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })
})
