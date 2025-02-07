"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to New Companies</h1>
        <p className="text-gray-600 mb-8">Manage your companies efficiently with our platform.</p>
        <div className="space-x-4">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => router.push('/sign-up')}
          >
            Sign Up
          </button>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => router.push('/sign-in')}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
} 