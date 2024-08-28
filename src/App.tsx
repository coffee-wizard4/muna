import './App.css'
import { Header } from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Fotos from './pages/fotos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/fotos' element={<Fotos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
