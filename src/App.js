import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import AsWebDev from './pages/AsWebDev'
import AsGIS from './pages/AsGIS'
import './App.css'

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/profile-page/" element={ <Main /> } />
        <Route path="/profile-page/as-webdev" element={ <AsWebDev /> } />
        <Route path="/profile-page/as-gis" element={ <AsGIS /> } />
      </Routes>
    </Router>
  )
}

export default App