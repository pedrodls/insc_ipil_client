import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Index, Login, SignUp, Home, Information, AttachPayment, Contact, Dashboard, UserAccount, DashboardPage, GuidesPage } from './environments/elements'
import ProtectedRoutes, { SuperProtectedRoutes, UnProtectedRoutes } from './ProtectedRoutes'

function AppRoutes({ type_account }: any) {

  return (

    <Router>

      <Routes>

        <Route element={<SuperProtectedRoutes />} >

          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/new_account" element={<UserAccount />} />

        </Route>

        <Route element={<UnProtectedRoutes />} >

          <Route path="/" element={<Index />}>
            <Route path="" element={<Home />} />
            <Route path="/informations" element={<Information />} />
            <Route path="/attach_payment" element={<AttachPayment />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

        </Route>

        <Route element={<ProtectedRoutes />} >

          <Route path="/dashboard" element={<DashboardPage type_account={type_account} />}>
            <Route path="guides" element={<GuidesPage type_account={type_account} />} />
            <Route path="validate_payment" element={<Information />} />
            <Route path="attach_valid_payment" element={<AttachPayment />} />
          </Route>

        </Route>

      </Routes>

    </Router>

  )
}

export default AppRoutes
