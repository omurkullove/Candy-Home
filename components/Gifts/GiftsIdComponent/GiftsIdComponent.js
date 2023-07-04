import React, { useState } from 'react';
import GiftsLeftNavBar from '../GiftsLeftNavBar/GiftsLeftNavBar';
import s from '../../package/PackageIdComponent/PackageIdComponent.module.scss';
import CustomSelect from '../../../modules/CustomSelect/CustomSelect';
import CategoryItem from '../../../modules/CategoryItem/CategoryItem';
import CurrentItem from '../../../modules/CurrentItem/CurrentItem';
import fanushka from '../../../public/fanushka.png';

const GiftsIdComponent = () => {
  const arr = [
    {
      id: 1,
      title: 'Митрофанушка',
      img: fanushka,
      material: 'Велюр',
      size: '20 см.',
      volume: 'до 200 гр.',
      price: '420 руб.',
      subTitle: 'Новинка',
      isLiked: 'false',
    },
    {
      id: 2,
      title: 'Митрофанушка',
      img: fanushka,
      material: 'Велюр',
      size: '20 см.',
      volume: 'до 200 гр.',
      price: '420 руб.',
      subTitle: '',
      isLiked: 'false',
    },
    {
      id: 3,
      title: 'Митрофанушка',
      img: fanushka,
      material: 'Велюр',
      size: '20 см.',
      volume: 'до 200 гр.',
      price: '420 руб.',
      subTitle: 'Хит продаж',
      isLiked: 'false',
    },
    {
      id: 4,
      title: 'Митрофанушка',
      img: fanushka,
      material: 'Велюр',
      size: '20 см.',
      volume: 'до 200 гр.',
      price: '420 руб.',
      subTitle: '',
      isLiked: 'false',
    },
    {
      id: 5,
      title: 'Митрофанушка',
      img: fanushka,
      material: 'Велюр',
      size: '20 см.',
      volume: 'до 200 гр.',
      price: '420 руб.',
      subTitle: 'Распродажа',
      isLiked: 'false',
    },
    {
      id: 6,
      title: 'Митрофанушка',
      img: fanushka,
      material: 'Велюр',
      size: '20 см.',
      volume: 'до 200 гр.',
      price: '420 руб.',
      subTitle: '',
      isLiked: 'false',
    },
  ];

  const [currentSelect, setCurrentSelect] = useState();
  const [isCurrentSelectOpen, setIsCurrentSelectOpen] = useState();
  const selectArr = [
    { id: 1, title: 'Показать всё' },
    { id: 2, title: 'По наименованию' },
    { id: 3, title: 'По весу вложения' },
    { id: 4, title: 'По материалу' },
    { id: 5, title: ' По цене' },
  ];
  return (
    <div className='container'>
      <div className='content'>
        <GiftsLeftNavBar />

        <div className='mainContent'>
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

          <div className={s.items}>
            {arr.map((e) => (
              <CurrentItem
                key={e.id}
                title={e.title}
                img={e.img}
                material={e.material}
                size={e.size}
                volume={e.volume}
                price={e.price}
                subTitle={e.subTitle}
                isLiked={e.isLiked}
                id={e.id}
                page={'item'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsIdComponent;
