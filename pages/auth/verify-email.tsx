import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/ui/Button';

export default function VerifyEmail() {
  return (
    <>
      <Head>
        <title>Verify Your Email - Fataplus AI</title>
      </Head>
      
      <div className="max-w-md mx-auto mt-10 px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h1>
          <p className="text-gray-600">
            We&apos;ve sent a verification link to your email address. Please check your inbox and click the link to verify your account.
          </p>
        </div>
        
        <div className="bg-brand-50 rounded-lg p-6 border border-brand-200">
          <h2 className="text-lg font-medium text-brand-800 mb-4">What happens next?</h2>
          
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand-100 text-brand-800 mr-3 shrink-0">1</span>
              <span>Check your email inbox for a message from Fataplus</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand-100 text-brand-800 mr-3 shrink-0">2</span>
              <span>Click the verification link in the email</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand-100 text-brand-800 mr-3 shrink-0">3</span>
              <span>You&apos;ll be redirected back to sign in</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-gray-600">
            Didn&apos;t receive an email? Check your spam folder or try again.
          </p>
          
          <Link href="/auth/signin">
            <Button variant="primary">
              Go to Sign In
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
} 