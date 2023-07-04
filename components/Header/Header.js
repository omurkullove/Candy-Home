import React, { useEffect, useState } from 'react';
import s from '../../styles/header.module.scss';
import headerBg from '../../public/headerBg.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const links = [
    { id: 1, title: 'Главная', href: '/' },
    { id: 2, title: 'Сладости', href: '/candies' },
    { id: 3, title: 'Упаковка', href: '/package' },
    { id: 4, title: 'Подарки', href: '/gifts' },
    { id: 5, title: 'Конструктор', href: '/constructor' },
    { id: 6, title: 'Как заказать', href: '/howToOrder' },
    { id: 7, title: 'Контакты', href: '/contacts' },
    { id: 8, title: 'Развлечения', href: '/entertainment' },
  ];

  const [currentPage, setCurrentPage] = useState(router.route);

  return (
    <>
      <header className={s.header}>
        <div className={s.bg}>
          <Image src={headerBg} alt='headerBg' priority width={1540} />
          <div className={s.totalPrice}>
            Ваш заказ: <br />0 руб.
          </div>
        </div>
      </header>
      <div className={s.sticky}>
        <div className={s.navBar}>
          <div className={s.topLine}></div>
          <div className='container'>
            <div className={s.links}>
              {links.map((e) => (
                <Link href={e.href} key={e.id}>
                  <a
                    className={currentPage === e.href ? s.activeLink : s.link}
                    onClick={() => setCurrentPage(e.href)}
                  >
                    {e.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className={s.bottomLine}></div>
        </div>
      </div>
    </>
  );
};

export default Header;
