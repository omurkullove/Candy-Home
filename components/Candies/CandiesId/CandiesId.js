import s from './CandiesId.module.scss';
import CandiesLeftNafBar from '../CandiesLeftNafBar/CandiesLeftNafBar';
import shokolad from '../../../public/shokolad.png';
import marmelad from '../../../public/marmelad.png';
import Image from 'next/future/image';
import CustomSelect from '../../../modules/CustomSelect/CustomSelect';
import { useState } from 'react';

const CandiesId = () => {
  const arr = [
    {
      id: 1,
      category: 'Шоколад',
      img: shokolad,
      title: 'Шоколадная фигура Шишка Сибирский сувенир',
      factory: 'КХ Объединенные кондитеры ШФ Новосибирская',
      description:
        'Шоколадная фигура в форме кедровой шишки с добавлением кедровых орехов',
      count: 'кг',
      weight: '1,2 кг/кор',
      optPrice: '1680 руб.',
      price: '1450 руб.',
    },
    {
      id: 2,
      category: 'Мармелад',
      img: marmelad,
      title: 'Мармеладная мандаринка 60гр',
      factory: 'КФ Конфетный двор',
      description:
        'Мармелад со вкусом апельсина, дольки обсыпаны сахаром и сложены в фигуру мандарина',
      count: 'шт',
      weight: '50 шт/бл',
      optPrice: '39,36 руб.',
      price: '52 руб.',
    },
  ];

  const [currentSelect, setCurrentSelect] = useState();
  const [isCurrentSelectOpen, setIsCurrentSelectOpen] = useState();
  const selectArr = [
    { id: 1, title: 'Показать всё' },
    { id: 2, title: 'По категории' },
    { id: 3, title: 'По цене' },
    { id: 4, title: 'По наименованию.' },
    { id: 5, title: ' По фабрике' },
  ];
  return (
    <div className={s.candiesId}>
      <div className='container'>
        <div className={s.content}>
          <CandiesLeftNafBar />

          <div className={s.mainContent}>
            <div className={s.filter}>
              <span>Сортировать:</span>
              <CustomSelect
                currentSelect={currentSelect}
                isCurrentSelectOpen={isCurrentSelectOpen}
                setCurrentSelect={setCurrentSelect}
                setIsCurrentSelectOpen={setIsCurrentSelectOpen}
                selectArr={selectArr}
              />
            </div>
            <table className={s.table}>
              <thead>
                <tr>
                  <td>Категория</td>
                  <td>Фото</td>
                  <td>Наименование</td>
                  <td>Фабрика</td>
                  <td>Описание</td>
                  <td>Ед. изм.</td>
                  <td>Одно место</td>
                  <td>Цена ОПТ</td>
                  <td>Розница</td>
                  <td>Заказать</td>
                </tr>
              </thead>
              <tbody>
                {arr.map((e) => (
                  <tr key={e.id}>
                    <td>{e.category}</td>
                    <td>
                      <Image
                        className={s.imgChildren}
                        layout={'raw'}
                        src={e.img}
                        alt='img'
                        height={103}
                      />
                    </td>
                    <td>{e.title}</td>
                    <td>{e.factory}</td>
                    <td>{e.description}</td>
                    <td>{e.count}</td>
                    <td>{e.weight}</td>
                    <td>{e.optPrice}</td>
                    <td>{e.price}</td>
                    <td>
                      <input type='number' /> <span>{e.count}</span>
                      <div className={s.btn}>Заказать</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandiesId;
