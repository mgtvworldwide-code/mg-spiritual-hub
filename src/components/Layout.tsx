import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'sonner';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='bg-white text-gray-800 font-sans'>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster richColors />
    </div>
  );
};

export default Layout;