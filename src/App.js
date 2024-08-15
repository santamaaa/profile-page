import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import AsWebDev from './pages/AsWebDev'
import AsGIS from './pages/AsGIS'
import './App.css'

function App() {
  return (
    <Router basename="/profile-page">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/as-webdev" element={ <AsWebDev /> } />
        <Route path="/as-gis" element={ <AsGIS /> } />
      </Routes>
    </Router>
  )
}

export default App