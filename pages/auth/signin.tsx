import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SignIn from '../../components/auth/SignIn';
import { useAuth } from '../../contexts/AuthContext';

export default function SignInPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if already authenticated
    if (user && !loading) {
      router.push('/');
    }
  }, [user, loading, router]);

  // Don't show the sign in form while checking auth state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-600"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Sign In - Fataplus AI</title>
      </Head>
      
      <div className="max-w-md mx-auto mt-10 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your Fataplus account</p>
        </div>
        
        <SignIn />
      </div>
    </>
  );
} 