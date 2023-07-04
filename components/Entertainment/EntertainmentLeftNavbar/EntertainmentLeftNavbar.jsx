import React from 'react';
import LeftNavBar from '../../LeftNavBar/LeftNavBar';
import entertainment from '../../../public/Entertainment.png';
import s from './EntertainmentLeftNavbar.module.scss';

const EntertainmentLeftNavbar = () => {
  return (
    <LeftNavBar img={entertainment}>
      <div className={s.navbarBlock}>
        <p>
          Стихи, загадки, анекдоты и смешные истории , гороскопы, рецепты,
          сценарии
        </p>
        <p>Игры, конкурсы</p>
        <p>Фотоконкурсы</p>
        <p>Товары спонсора</p>
        <p>Заказ Деда мороза</p>
      </div>
    </LeftNavBar>
  );
};

export default EntertainmentLeftNavbar;
