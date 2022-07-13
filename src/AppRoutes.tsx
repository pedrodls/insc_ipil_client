import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Index, Login, SignUp, Home, Information, AttachPayment, Contact, Dashboard, UserAccount, DashboardPage, GuidesPage } from './environments/elements'

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

        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="guides" element={<GuidesPage />} />
          <Route path="validate_payment" element={<Information />} />
          <Route path="attach_valid_payment" element={<AttachPayment />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default AppRoutes
