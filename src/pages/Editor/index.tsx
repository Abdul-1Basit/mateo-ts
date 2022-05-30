import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Composer from '@/components/composer';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Homepage' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-left'>
        
            <h3 >Upload Document Below</h3>
         <Composer/>
          </div>
        </section>
      </main>
    </Layout>
  );
}
