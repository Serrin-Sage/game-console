import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import powerSlice from './features/powerCheck'
import titleSlice from './features/titleTransition'
import App from './App'
import './index.css'
import './stylesheets/App.css'
import './stylesheets/gameboystyle.scss'
import './stylesheets/screenstyle.scss'
import './stylesheets/controlstyle.scss'

const store = configureStore({
    reducer: {
      power: powerSlice,
      title: titleSlice,
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />,
  </Provider>
)
