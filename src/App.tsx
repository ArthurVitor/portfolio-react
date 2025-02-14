import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Layout } from './pages/LayoutPage/Layout'
import { About } from './pages/AboutPage/About'
import { Projects } from './pages/ProjectsPage/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
