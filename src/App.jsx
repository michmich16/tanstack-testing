import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Search } from './pages/Search'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
