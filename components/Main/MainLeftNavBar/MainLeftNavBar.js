import React from 'react';
import s from '../../../styles/main.module.scss';
import mainNavBarImg from '../../../public/mainNavBarImg.png';
import Link from 'next/link';
import LeftNavBar from '../../LeftNavBar/LeftNavBar';

const MainLeftNavBar = () => {
  return (
    <LeftNavBar img={mainNavBarImg}>
      <div className={s.navBarItems}>
        <div className={s.navBarItem}>
          <Link href={'#'}>
            <a className='gradientText'>Сладкие подарки</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Новогодние подарки</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Корпоративные подарки</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Статьи</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Презентация компании</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Наши преимущества</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>История компании</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>
              <span>Фото с выставок,</span> производства, видео
            </a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Акции, скидки</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>История в буклетах</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>
              <span>Отзывы клиентов,</span> благодарности
            </a>
          </Link>
        </div>
      </div>
    </LeftNavBar>
  );
};

export default MainLeftNavBar;
