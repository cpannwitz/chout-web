import React from 'react'

import logo from './assets/Chout-LogoLight.svg'
import subtext from './assets/subtext.svg'

import LoginView from './views/LoginView'

const App = () => {
  return (
    <div className="App">
      <img src={logo} alt="chout logo" className="Logo" />
      <img src={subtext} alt="subtext" className="Sub_Logo" />
    </div>
  )
}

export default App
