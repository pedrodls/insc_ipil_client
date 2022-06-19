
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Index, Login, SignUp } from './envs/elements';

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
