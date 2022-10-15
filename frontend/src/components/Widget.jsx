import React from 'react'
import HeaderComponent from './widget/HeaderComponent'
import MainContent from './widget/MainContent'
export default function Widget({type}) {
  const border = type==="servis" && 'border border-slate-300'
    return (
    <section className={`${border} mt-10 space-y-3 rounded-lg`}>
        <HeaderComponent type={type}/>
        <MainContent type={type} />
    </section>
  )
}
