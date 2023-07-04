import s from '../styles/header.module.scss';
import Header from './Header/Header';
import Head from 'next/head';
import Footer from './Footer/Footer';
import { useState } from 'react';
import HelpModal from './HelpModal/HelpModal';

const MainContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='darica' content='Магазин сладостей, игрушек, оберток' />
      </Head>
      <Header />
      {children}
      <Footer setIsOpen={setIsOpen} />
      <HelpModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MainContainer;
