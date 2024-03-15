import React, { useState } from 'react'
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Search from './pages/Search'
import { Paper, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import CoinDetails from './components/CoinDetails'
import CryptoDetailPage from './pages/CryptoDetailPage'



const App = () => {
  const [dark, setDark] = useState(false)
  const changeTheme = () => {
    if (dark) {
      setDark(false)
    }
    else {
      setDark(true)
    }
  }
  const appTheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light"
    },
    typography: {
      fontFamily: [
        'Amatic SC',
        'sans-serif'

      ]
    },
  })
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper>
          <Router>
            <NavBar dark={dark} changeTheme={changeTheme} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/trending' element={<Trending />} />
              <Route path='/search' element={<Search />} />
              <Route path='/coin-details/:id' element={<CryptoDetailPage />} />
            </Routes>

          </Router>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default App
