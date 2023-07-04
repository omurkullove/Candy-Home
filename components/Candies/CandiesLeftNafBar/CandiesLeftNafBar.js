import React, { createRef, useState } from 'react';
import LeftNavBar from '../../LeftNavBar/LeftNavBar';
import candiesNavBar from '../../../public/candiesNavBar.png';
import s from './CandiesLeftNafBar.module.scss';
import Link from 'next/link';
import CheckBox from '../../../modules/CheckBox/CheckBox';

const CandiesLeftNafBar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  let [a, b] = useState(0);
  const open = (isOpen) => {
    setIsOpen1(!isOpen1);
    b(ref1.current.scrollHeight);
  };
  const ref1 = createRef();
  return (
    <LeftNavBar img={candiesNavBar}>
      <div className={s.navBarItems}>
        <div className={s.navBarDropDowns}>
          <div className={s.dropDownWrap}>
            <div className={s.dFlex}>
              <div className={s.navBarDropDownTitle} onClick={() => open(1)}>
                Кондитерские изделия
              </div>
              <svg
                viewBox='0 0 9 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={
                  isOpen1
                    ? {
                        transform: 'rotate(90deg)',
                      }
                    : {
                        transform: 'rotate(0deg',
                      }
                }
              >
                <path d='M9 6L0 0.803848V11.1962L9 6Z' fill='black' />
              </svg>
            </div>
            <div
              className={s.dropDownContent}
              ref={ref1}
              style={
                isOpen1
                  ? { maxHeight: `${a}px` }
                  : { maxHeight: '0px', paddingBottom: '0' }
              }
            >
              <div className={s.dropDownItem}>
                <CheckBox id={'item1'}>Весь ассортимент</CheckBox>
              </div>

              <div className={s.dropDownItem}>
                <CheckBox id={'item2'}>Шоколад</CheckBox>
              </div>

              <div className={s.dropDownItem}>
                <CheckBox id={'item3'}>Батончики.</CheckBox>
              </div>

              <div className={s.dropDownItem}>
                <CheckBox id={'item4'}>Драже</CheckBox>
              </div>

              <div className={s.dropDownItem}>
                <CheckBox id={'item5'}>Зефир</CheckBox>
              </div>
            </div>
          </div>
        </div>
        <div className={s.navBarItem}>
          <Link href={'#'}>
            <a className='gradientText'>Акции</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Брендирование</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Сертификаты</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Оформить Заказ</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Презентация компании</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Скачать Каталог</a>
          </Link>
          <Link href={'#'}>
            <a className='gradientText'>Скачать прайс</a>
          </Link>
        </div>
      </div>
    </LeftNavBar>
  );
};

export default CandiesLeftNafBar;
