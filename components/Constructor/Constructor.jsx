import React, { useEffect, useState } from 'react';
import ConstructorLeftNavbar from './C-LeftNavbar/ConstructorLeftNavbar';
import s from './Constructor.module.scss';

import arrow from '../../public/arrow.svg';

import Povar from '../../public/leftNavbarPovar.png';
import Image from 'next/image';

const Constructor = () => {
  // Temporary static data for table

  const [isReady, setIsReady] = useState(false);

  const TABLE_DATA = [
    {
      id: 123,
      category: 'Шоколад',
      photo: Povar,
      name: 'Шоколад Степс Лесным орехом ,100 гр.',
      manufacture: 'КО Славянка',
      weight: '100,00',
      cost: '57,55',
      quantity: 1,
    },
    {
      id: 2123,
      category: 'Шоколад',
      photo: Povar,
      name: 'Шоколад Степс Лесным орехом ,100 гр.',
      manufacture: 'КО Славянка',
      weight: '100,00',
      cost: '57,55',
      quantity: 1,
    },
  ];

  return (
    <div className=''>
      <div className='container'>
        <div className='content'>
          <ConstructorLeftNavbar />
          <div className='mainContent'>
            <p className={s.title}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
            <div className={s.stepperBlock}>
              <div>
                <h3>ШАГ 1</h3>
                <p>Выбрать упаковку, игры</p>
              </div>
              <Image width={'100%'} className={s.img} src={arrow} alt='arrow' />
              <div>
                <h3>ШАГ 2</h3>
                <p>Выбрать наполнение</p>
              </div>
              <Image width={'100%'} className={s.img} src={arrow} alt='arrow' />
              <div>
                <h3>ШАГ 3</h3>
                <p>Оформить заказ</p>
              </div>
            </div>
            <div>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Материал</th>
                    <th>Фото</th>
                    <th>Наименование</th>
                    <th>
                      Размеры,
                      <br /> ДВШ
                    </th>
                    <th>
                      Объем,
                      <br /> гр
                    </th>
                    <th>
                      Цена,
                      <br /> руб
                    </th>
                    <th>Заказать</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((tableItem) => (
                    <tr key={tableItem.id}>
                      <td>{tableItem.category}</td>
                      <td>
                        <Image
                          src={tableItem.photo}
                          alt='image'
                          width={100}
                          height={100}
                        />
                      </td>
                      <td>{tableItem.name}</td>
                      <td>{tableItem.manufacture}</td>
                      <td>{tableItem.weight}</td>
                      <td>{tableItem.cost}</td>
                      <td>
                        <span onClick={(prev) => prev - 1}>-</span>
                        <input
                          value={tableItem.quantity}
                          // Временно будет стоять 'readonly'
                          readOnly
                          type='number'
                          className={s.input}
                        />
                        <span onClick={(prev) => prev + 1}>+</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={s.buttonDiv}>
                <div onClick={() => setIsReady(!isReady)}>Применить</div>
              </div>
            </div>
            {isReady && (
              <div className={s.readyToBySection}>
                <div className={s.totalBlock}>
                  <span>Итого сладостей в подарке:</span>
                  <div>
                    <span>600гр</span>
                    <span>1200 руб</span>
                    <span>15 штук</span>
                  </div>
                </div>
                <div className={s.secondParentBlock}>
                  <div className={s.firstChildBlock}>
                    <span>Ваш выбор : </span>
                    <div>
                      <p>Митрофанушка</p>
                      <p>Материал: Велюр</p>
                      <p>Размер: 20 см.</p>
                      <p>Объем: до 200 гр.</p>
                      <p>Цена от 420 руб.</p>
                    </div>
                    <Image src={Povar} alt='image' />
                  </div>
                  <div className={s.secondChildBlock}>
                    <span>Ваши вложения :</span>
                    <div>
                      <div className={s.block1}>
                        <p>Рыба текст</p>
                        <p>Рыба текст</p>
                        <p>Рыба текст</p>
                      </div>
                      <div className={s.block2}>
                        <p>Рыба текст</p>
                        <p>Рыба текст</p>
                        <p>Рыба текст</p>
                      </div>
                    </div>
                    <div className={s.block3}>
                      <div>
                        <div className={s.imageBlock}>image</div>
                        <p>Цена 420 руб</p>
                      </div>
                      <div>
                        <div className={s.imageBlock}>image</div>
                        <p>Цена 420 руб</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.thirdChildBlock}>
                  <div className={s.block1}>
                    <span>Итого ваш подарок: </span>
                    <div>
                      <span>600гр</span>
                      <span>1200 руб</span>
                      <span>15 штук</span>
                    </div>
                  </div>
                  <div className={s.block2}>
                    <div className={s.one}>
                      <p>Заказ подарков:</p>
                      <input
                        type='number'
                        value={450}
                        // Временно будет стоять 'readonly'
                        readOnly
                      />
                      <span>шт.</span>
                    </div>
                    <div className={s.two}>
                      <p>Сумма заказа:</p>
                      <span>450 руб</span>
                      <div>Редактировать</div>
                    </div>
                  </div>
                  <div className={s.block3}>
                    <p>Комментарии, пожелания:</p>
                    <textarea></textarea>
                    <div>Оформить заказ</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructor;
