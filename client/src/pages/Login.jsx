import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-soft w-full max-w-sm border border-gray-100">
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
          <h2 className="text-2xl font-bold text-black">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email" className="w-full border-gray-200 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" />
          <input type="password" placeholder="Password" className="w-full border-gray-200 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" />
          <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl hover:shadow-lg transition font-bold text-sm">Login</button>
          <button className="w-full bg-white border border-gray-200 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition font-bold text-sm">Continue with Google</button>
          <p className="mt-6 text-center text-sm text-gray-500">Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Register</Link></p>
        </form>
      </div>
    </div>
  );
}
