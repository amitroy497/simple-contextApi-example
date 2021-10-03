import React, { createContext } from 'react'
import './App.css'
import ComA from './components/ComA'

export const FirstName = createContext()
export const LastName = createContext()

const App = () => {
  return (
    <div className='App'>
      <FirstName.Provider value={'Amit'}>
        <LastName.Provider value={'Roy'}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default App
