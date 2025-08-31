import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {
    const [login, setLogin] = useState(true)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {login ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p className="text-gray-600">
                        {login ? 'Sign in to continue shortening URLs' : 'Join us to start shortening URLs'}
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        {login ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button
                            onClick={() => setLogin(!login)}
                            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                        >
                            {login ? 'Sign up here' : 'Sign in here'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthPage