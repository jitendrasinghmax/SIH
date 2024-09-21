import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import Landing from './pages/landing'
import Dashboard from './pages/dashboard'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Landing/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
