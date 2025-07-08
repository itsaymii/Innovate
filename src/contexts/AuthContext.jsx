import React, { createContext, useState, useContext, useEffect } from 'react'
// Create the auth context
const AuthContext = createContext(null)
// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])
  // Login function
  const login = (email, password) => {
    // In a real app, this would be an API call to validate credentials
    return new Promise((resolve, reject) => {
      // Simulate API call delay
      setTimeout(() => {
        // For demo purposes, accept any email/password with basic validation
        if (!email || !password) {
          reject(new Error('Email and password are required'))
          return
        }
        if (password.length < 6) {
          reject(new Error('Password must be at least 6 characters'))
          return
        }
        // Create user object (in a real app, this would come from the server)
        const userData = {
          id: Date.now().toString(),
          email,
          name: email.split('@')[0], // Extract name from email for demo
        }
        // Save user to state and localStorage
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
        resolve(userData)
      }, 500) // Simulate network delay
    })
  }
  // Signup function
  const signup = (name, email, password) => {
    // In a real app, this would be an API call to create a user
    return new Promise((resolve, reject) => {
      // Simulate API call delay
      setTimeout(() => {
        // Basic validation
        if (!name || !email || !password) {
          reject(new Error('All fields are required'))
          return
        }
        if (password.length < 6) {
          reject(new Error('Password must be at least 6 characters'))
          return
        }
        // Create user object
        const userData = {
          id: Date.now().toString(),
          email,
          name,
        }
        // Save user to state and localStorage
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
        resolve(userData)
      }, 500) // Simulate network delay
    })
  }
  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }
  // Context value
  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}