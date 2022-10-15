import React from 'react'
import HeaderComponent from './summary/HeaderComponent'
import MainComponent from './summary/MainComponent'
export default function Summary({type}) {
    const isMechanic = type === "tukang"
  return (
    <div className={`space-y-5 mt-10 shadow-xl p-6 ${isMechanic && "flex"} gap-8 bg-white rounded-xl ${isMechanic && "max-h-72"}`}>
        <HeaderComponent type={type}/>
        <MainComponent type={type} />
    </div>
  )
}
