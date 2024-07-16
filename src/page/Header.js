import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='text-center text-xl py-5 bg-slate-100 sticky top-0'>{title}</div>
  )
}

export default Header