import { routes } from './AppRouter'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes}
        </Routes>
      </Router>
    </>
  )
}

export default App
