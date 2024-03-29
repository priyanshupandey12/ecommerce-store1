import React from 'react'
import Header from './components/Header'

import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

const App = () => {
  return (

    <Provider store={appStore}>
    <div>
     
      <Header/>
     <Outlet/>
    </div>
    </Provider>
  )
}

export default App