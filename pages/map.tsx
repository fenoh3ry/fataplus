import React from 'react';
import Head from 'next/head';
import IsometricMap from '../components/map/IsometricMap';

export default function MapPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Interactive Map - Fataplus AI</title>
        <meta name='description' content='Explore farms and vendors across Madagascar' />
      </Head>
      <div className='py-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>Interactive AI Map</h1>
        <p className='text-lg text-gray-600 mb-8'>
          Explore farms and agricultural vendors across Madagascar. This interactive map helps you locate nearby resources and connect with the Fataplus community.
        </p>
        <IsometricMap />
      </div>
    </>
  );
}
