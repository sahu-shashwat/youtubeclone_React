import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name='All'/>
      <Button name='Cricket'/>
      <Button name='Bollywood'/>
      <Button name='Football'/>
      <Button name='News'/>
      <Button name='Songs'/>
      <Button name='Games'/>
      <Button name='Cooking'/>
    </div>
  )
}

export default ButtonList