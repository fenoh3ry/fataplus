import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fataplus AI - Agritech Ecosystem</title>
        <meta name='description' content='AI-powered agritech platform for Malagasy farmers' />
      </Head>
      <section className='py-12'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Transforming Agriculture with AI
          </h1>
          <p className='text-xl text-gray-600'>
            Fataplus AI is a multi-platform agritech ecosystem designed for Malagasy farmers.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card>
            <div className='flex flex-col items-center text-center'>
              <div className='h-16 w-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' />
                </svg>
              </div>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>AI Chatbot System</h2>
              <p className='text-gray-600 mb-4'> Connect via WhatsApp, Facebook Messenger, or Telegram for farming guidance. </p>
              <Button variant='primary' className='mt-auto'> Try Chatbot </Button>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center text-center'>
              <div className='h-16 w-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' />
                </svg>
              </div>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>Interactive AI Map</h2>
              <p className='text-gray-600 mb-4'> Explore an isometric map of Madagascar showing farms and vendors. </p>
              <Button variant='primary' className='mt-auto'> View Map </Button>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center text-center'>
              <div className='h-16 w-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
                </svg>
              </div>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>AI-Assisted Learning</h2>
              <p className='text-gray-600 mb-4'> Learn modern farming techniques with personalized lessons. </p>
              <Button variant='primary' className='mt-auto'> Start Learning </Button>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center text-center'>
              <div className='h-16 w-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-8 h-8'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
                </svg>
              </div>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>WooCommerce Marketplace</h2>
              <p className='text-gray-600 mb-4'> Buy and sell agricultural products with other farmers. </p>
              <Button variant='primary' className='mt-auto'> Visit Marketplace </Button>
            </div>
          </Card>
        </div>
      </section>
      <section className='py-12 bg-gray-100 rounded-lg my-12'>
        <div className='text-center max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Join The Fataplus AI Ecosystem</h2>
          <p className='text-lg text-gray-600 mb-6'> Connect with other farmers, learn modern techniques, and grow your agricultural business. </p>
          <Button variant='primary' className='text-lg px-6 py-3'> Get Started Today </Button>
        </div>
      </section>
    </>
  );
}
