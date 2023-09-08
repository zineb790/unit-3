import React from 'react'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import LoginForm from '../components/LogInForm/LogInForm'

export default function AuthPage({ setUser }) {
  return (
    <div>
        <h1>AuthPage</h1>
        <h2>Sign Up</h2>
        <SignUpForm setUser={setUser} />
        <h2>Log In</h2>
        <LoginForm setUser={setUser} />
    </div>
  )
}