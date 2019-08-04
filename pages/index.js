import React from 'react';
import Typed from 'react-typed';
import Link from 'next/link';
import Provider from '../src/components/Session/Provider';
import Logo from '../src/components/Logos/Logo'
import Footer from '../src/components/General/Footer'
import {SIGN_IN, SIGN_UP} from '../src/constants/routes';

const Index = () => {
  return (
    <Provider>
      <div className='landing-wrapper' id='landing-wrapper'>
        <section className='intro my-auto'>
          <Logo center={true} />
          <div className='mt-5'>
            <Typed
                className='marquee text-teal-200 sm:text-lg lg:text-2xl'
                data-test='typed-text'
                strings={['One platform to sync, send, and integrate your real-time transcriptions.', 'Web-based live stenography, anywhere.']}
                typeSpeed={60}
                loop
              />
          </div>
          <p className='w-9/12 lg:w-7/12 text-center mx-auto my-5 sm:text-lg lg:text-2xl'>
              Upword.ly is a real-time transcription delivery tool and a content
              management system (CMS) for real-time stenographers. You log in,
              create a job, connect your CAT software via a small helper app,
              and start writing. Distribute your live feed to anyone via a short
              URL and that's it! Since it is web-based, there's no need for your
              consumers to install anything on their end. When the job is over,
              it's your choice to use the variety of tools to save or
              disseminate the transcript or to delete it. Simple.
          </p>
            <Link href={SIGN_IN} prefetch={true}>
              <button
                title='sign in'
                className='bg-blue hover:bg-blue-dark text-teal-200 font-bold md:text-lg py-2 px-4 mx-2 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200'
                type='button'>
                Sign In
              </button>
            </Link>
            <Link href={SIGN_UP} prefetch={true}>
              <button
                title='sign up'
                className='bg-blue hover:bg-blue-dark text-teal-200 font-bold md:text-lg py-2 px-4 mx-2 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200'
                type='button'>
                Sign Up
              </button>
            </Link>
          <Footer />
        </section>
      </div>
    </Provider>
  );
};

Index.getInitialProps = async ({query, res}) => {
  console.log('query, res', query, res);
};

export default Index;
