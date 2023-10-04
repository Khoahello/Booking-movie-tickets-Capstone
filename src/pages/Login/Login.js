import React from 'react'
import Form from './Form'
import Banner from './Banner'

export default function Login() {
  return (
    <div className="h-screen bg-orange-600 flex items-center">
      <div className='container flex bg-white rounded-xl p-10'>
          <Form/>
          <Banner/>
      </div>
    </div>
  )
}
