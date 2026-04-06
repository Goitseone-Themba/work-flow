import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { ProtectedRoute } from "./context/ProtectedRoute"
import { Login } from "./signup-login/Login"
import { Signup } from "./signup-login/Signup"
import { Dashboard } from "./pages/Dashboard"
import { LandingPage } from "./pages/LandingPage"

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="landing" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

