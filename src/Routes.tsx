
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/index/Index';

function AppRoutes() {

  return (
     <Router>
       <Routes>
          <Route path="/" element={<Index />} />
       </Routes>
     </Router>
  )
}

export default AppRoutes
