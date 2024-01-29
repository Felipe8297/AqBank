import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { CreateAccount } from './pages/CreateAccount'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import { SideBar } from './components/side-bar'
import { getToken } from './lib/auth'

export function App() {
  const auth = getToken()

  if (auth) {
    return (
      <Router>
        <SideBar>
          <Routes>
            <Route path="/*" element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="produtos" element={<Products />} />
          </Routes>
        </SideBar>
      </Router>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="criar-conta" element={<CreateAccount />} />
      </Routes>
    </Router>
  )
}
