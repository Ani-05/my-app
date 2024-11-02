import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
const App = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
    }}>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
