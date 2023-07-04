import React from 'react';
import LeftNavBar from '../../LeftNavBar/LeftNavBar';
import s from './HowToOrderLeftNavbar.module.scss';
// import HTO from '../../../public/HowToOrder.png';

const HowToOrderLeftNavbar = () => {
  return (
    <LeftNavBar key={5} img={require('../../../public/HowToOrder.png')}>
      <div className={s.main}>
        <p>Как сделать заказ.</p>
        <p>Условия доставки.</p>
        <p>Специфика работы</p>
        <p>Вопросы-ответы</p>
      </div>
    </LeftNavBar>
  );
};

export default HowToOrderLeftNavbar;
