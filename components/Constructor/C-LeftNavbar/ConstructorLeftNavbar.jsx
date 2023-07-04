import React, { createRef, useState } from 'react';
import s from './ConstructorLeftNavbar.module.scss';
import Povar from '../../../public/leftNavbarPovar.png';
import LeftNavBar from '../../LeftNavBar/LeftNavBar';
import CheckBox from '../../../modules/CheckBox/CheckBox';

const ConstructorLeftNavbar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  let [a, b] = useState(0);
  const open = (isOpen) => {
    if (isOpen === 1) {
      setIsOpen1(!isOpen1);
    } else {
      setIsOpen2(!isOpen2);
    }
    b(ref1.current.scrollHeight);
  };

  const ref1 = createRef();

  const DROP_ITEMS1 = [
    {
      title: 'Без упаковки',
      id: 1,
    },
    {
      title: 'Картон.МГК',
      id: 2,
    },
    {
      title: 'ЖестьБанка',
      id: 3,
    },
    {
      title: 'Мягкая.Текстиль',
      id: 4,
    },
    {
      title: 'Переплетный картон.Трубы',
      id: 5,
    },
    {
      title: 'Дерево.Кожа.ВИП',
      id: 6,
    },
    {
      title: 'Игрушки',
      id: 7,
    },
    {
      title: 'Распродажа',
      id: 8,
    },
    {
      title: 'Вся упаковка',
      id: 9,
    },
    {
      title: 'Игрушки.Игры.Вложения',
      id: 10,
    },
  ];
  const DROP_ITEMS2 = [
    {
      title: 'Весь ассортимент',
      id: 1,
    },
    {
      title: 'Шоколад.',
      id: 2,
    },
    {
      title: 'Батончики.',
      id: 3,
    },
    {
      title: 'Вафли, печенье',
      id: 4,
    },
    {
      title: 'Драже',
      id: 5,
    },
    {
      title: 'Зефир',
      id: 6,
    },
    {
      title: 'Мармелад',
      id: 7,
    },
    {
      title: 'Десерты',
      id: 8,
    },
    {
      title: 'Фрукты в шоколаде',
      id: 9,
    },
    {
      title: 'Ассорти',
      id: 10,
    },
    {
      title: 'Пралиновые',
      id: 11,
    },
    {
      title: 'Вафельные',
      id: 12,
    },
    {
      title: 'Комбинированные',
      id: 13,
    },
    {
      title: 'Грильяжные',
      id: 14,
    },
    {
      title: 'Восточные сладости',
      id: 15,
    },
    {
      title: 'Суфле',
      id: 16,
    },
    {
      title: 'Желейные',
      id: 17,
    },
    {
      title: 'Тоффи',
      id: 18,
    },
    {
      title: 'Помадные',
      id: 19,
    },
    {
      title: 'Карамель, ирис',
      id: 20,
    },
  ];

  return (
    <LeftNavBar img={Povar}>
      <div>
        <div className={s.navBarDropDowns}>
          <div className={s.dropDownWrap}>
            <div className={s.dFlex}>
              <div className={s.navBarDropDownTitle} onClick={() => open(1)}>
                Выбор упаковки, вложений
              </div>
              <svg
                width='9'
                height='12'
                viewBox='0 0 9 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={
                  isOpen1
                    ? { transform: 'rotate(90deg)' }
                    : { transform: 'rotate(0deg' }
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
              {DROP_ITEMS1.map((item) => (
                <div className={s.dropDownItem} key={item.id}>
                  <CheckBox id={item.id}>{item.title}</CheckBox>
                </div>
              ))}
            </div>
          </div>
          <div className={s.dropDownWrap}>
            <div className={s.dFlex}>
              <div className={s.navBarDropDownTitle} onClick={() => open(2)}>
                Выбор кондитерских изделий
              </div>
              <svg
                width='9'
                height='12'
                viewBox='0 0 9 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={
                  isOpen2
                    ? { transform: 'rotate(90deg)' }
                    : { transform: 'rotate(0deg' }
                }
              >
                <path d='M9 6L0 0.803848V11.1962L9 6Z' fill='black' />
              </svg>
            </div>
            <div
              className={s.dropDownContent}
              ref={ref1}
              style={
                isOpen2
                  ? { maxHeight: `${a}px` }
                  : { maxHeight: '0px', paddingBottom: '0' }
              }
            >
              {DROP_ITEMS2.map((item) => (
                <div className={s.dropDownItem} key={item.id}>
                  <CheckBox id={item.id}>{item.title}</CheckBox>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LeftNavBar>
  );
};

export default ConstructorLeftNavbar;
