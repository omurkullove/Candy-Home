import React from 'react';
import LeftNavBar from '../../LeftNavBar/LeftNavBar';
import ContactsGnom from '../../../public/ContactsGnom.png';
import Link from 'next/link';

import s from './ContactsLeftNavbar.module.scss';

const ContactsLeftNavbar = () => {
  const ITEMS = [
    {
      id: 1,
      title: 'Сладкие подарки',
      path: '#',
    },
    {
      id: 2,
      title: 'Новогодние подарки',
      path: '#',
    },
    {
      id: 3,
      title: 'Корпоративные подарки',
      path: '#',
    },
    {
      id: 4,
      title: 'Статьи',
      path: '#',
    },
    {
      id: 5,
      title: 'Презентация компании',
      path: '#',
    },
    {
      id: 6,
      title: 'Наши преимущества',
      path: '#',
    },
    {
      id: 7,
      title: 'История компании',
      path: '#',
    },
    {
      id: 8,
      title: 'Акции, скидки',
      path: '#',
    },
    {
      id: 9,
      title: 'Фото с выставок, производства, видео',
      path: '#',
    },
    {
      id: 10,
      title: 'История в буклетах',
      path: '#',
    },
    {
      id: 11,
      title: 'Отзывы клиентов, благодарности ',
      path: '#',
    },
  ];

  return (
    <LeftNavBar img={ContactsGnom}>
      <div className={s.block}>
        {ITEMS.map((item) => (
          <p key={item.id} className={s.link}>
            {item.title}
          </p>
        ))}
      </div>
    </LeftNavBar>
  );
};

export default ContactsLeftNavbar;
