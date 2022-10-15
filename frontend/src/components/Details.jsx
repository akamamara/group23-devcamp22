import React from 'react'
import HeaderComponent from './details/HeaderComponent'
import MainComponent from './details/MainComponent'

export default function Details({type, onChange}) {
  return (
    <div className='space-y-5 mt-10'>
        <HeaderComponent type={type}/>
        <MainComponent type={type} onChange={onChange}/>
    </div>
  )
}
