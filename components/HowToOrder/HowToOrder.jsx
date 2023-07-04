import React from 'react';
import HowToOrderLeftNavbar from './HTOLeftNavbar/HowToOrderLeftNavbar';
import s from './HowToOrder.module.scss';
import Image from 'next/image';
import Povar from '../../public/leftNavbarPovar.png';
import HTO from '../../public/HowToOrder.png';
import { useState } from 'react';
import OrderModal from '../OrderModal/OrderModal';

const HowToOrder = () => {
  const [isModal, setIsModal] = useState(false);

  const TABLE_DATA = [
    {
      id: 1,
      photo: Povar,
      name: 'Шоколад Степс Лесным орехом ',
      category: 'Сладости',
      weight: '100',
      cost: '85',
      quantity: 100,
      sum: '1000',
    },
    {
      id: 2,
      photo: Povar,
      name: 'Шоколад Степс Лесным орехом ',
      category: 'Сладости',
      weight: '200',
      cost: '100',
      quantity: 200,
      sum: '8900',
    },
    {
      id: 3,
      photo: HTO,
      name: 'Шоколад Степс Лесным орехом ',
      category: 'Сладости',
      weight: '2200',
      cost: '1200',
      quantity: 200,
      sum: '8900',
    },
    {
      id: 4,
      photo: HTO,
      name: 'Шоколад Степс Лесным орехом ',
      category: 'Сладости',
      weight: '1200',
      cost: '1200',
      quantity: 200,
      sum: '81900',
    },
  ];

  return (
    <div className=''>
      <div className='container'>
        <div className='content'>
          <HowToOrderLeftNavbar />
          <div className='mainContent'>
            <p className={s.title}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
            <p className={s.subTitle}>Ваш заказ</p>
            <div className={s.tableDiv}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Фото</th>
                    <th>Наименование</th>
                    <th>Категория</th>
                    <th>Вес, гр</th>
                    <th>Цена, руб</th>
                    <th>Количество</th>
                    <th>Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((tableItem) => (
                    <tr key={tableItem.id}>
                      <td>
                        <Image
                          src={tableItem.photo}
                          alt='image'
                          width={100}
                          height={100}
                        />
                      </td>
                      <td>{tableItem.name}</td>
                      <td>{tableItem.category}</td>
                      <td>{tableItem.weight}</td>
                      <td>{tableItem.cost}</td>
                      <td>
                        <input
                          value={tableItem.quantity}
                          type='number'
                          // Временно будет стоять 'readonly'
                          readOnly
                        />
                        <span>штук</span>
                        <p>редактировать</p>
                      </td>
                      <td>{tableItem.sum} руб</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={s.totalBlock}>
                <div>
                  <p>Итого ваш подарок:</p>
                  <span>250000 руб</span>
                </div>
                <div className={s.block2} onClick={() => setIsModal(true)}>
                  Оформить заказ
                </div>

                {isModal && (
                  <div className={s.modalBlock}>
                    <OrderModal isModal={isModal} setIsModal={setIsModal} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
