import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Index, Login, SignUp, Home, Information, AttachPayment, Contact,Dashboard, UserAccount} from './envs/elements'

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
        <Route path="" element={<Home />} />
        <Route path="/informations" element={<Information />} />
        <Route path="/attach_payment" element={<AttachPayment />} />
        <Route path="/contacts" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/new_account" element={<UserAccount />} />
        
      </Routes>
    </Router>
  )
}

export default AppRoutes
