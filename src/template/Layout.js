import React from 'react'
import Header from '../component/Header/Header'

export default function Layout({children}) {
  return (
    <div className="space-y-5">
        <Header/>
        {children}
    </div>
  )
}

// props children