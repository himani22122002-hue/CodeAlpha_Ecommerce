import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-10 rounded-2xl shadow-soft w-full max-w-sm border border-gray-100">
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
            </div>
          <h2 className="text-2xl font-bold text-black">Create Account</h2>
          <p className="text-gray-500 text-sm mt-1">Join us today</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="w-full border-gray-200 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" />
          <input type="email" placeholder="Email" className="w-full border-gray-200 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" />
          <input type="password" placeholder="Password" className="w-full border-gray-200 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" />
          <input type="password" placeholder="Confirm Password" className="w-full border-gray-200 border p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" />
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden mt-2"><div className="w-1/2 h-full bg-primary"></div></div>
          <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl hover:shadow-lg transition font-bold text-sm">Register</button>
          <p className="mt-6 text-center text-sm text-gray-500">Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login</Link></p>
        </form>
      </div>
    </div>
  );
}
