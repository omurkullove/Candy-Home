import s from './Gifts.module.scss';
import GiftsLeftNavBar from './GiftsLeftNavBar/GiftsLeftNavBar';
import greyBg from '../../public/greyBg.png';
import CategoryItem from '../../modules/CategoryItem/CategoryItem';

const Gifts = () => {
  const arr = [
    {
      id: 1,
      img: greyBg,
      title: 'Модели подарков, Без упаковки',
      subTitle: '',
    },
    { id: 2, img: greyBg, title: 'Подарки в МГК и Картоне ', subTitle: '' },
    { id: 3, img: greyBg, title: 'Подарки в Жесть Банке', subTitle: '' },
    { id: 4, img: greyBg, title: 'Подарки Мягкие', subTitle: '' },
    { id: 5, img: greyBg, title: 'Подарки в Тубах', subTitle: '' },
    { id: 6, img: greyBg, title: 'Подарки ВИП', subTitle: '' },
    { id: 7, img: greyBg, title: 'Подарки для Взрослых', subTitle: '' },
    { id: 8, img: greyBg, title: 'Корпоративные подарки', subTitle: '' },
  ];

  return (
    <div className={s.gifts}>
      <div className='container'>
        <div className='content'>
          <GiftsLeftNavBar />

          <div className='mainContent'>
            <p className={s.title}>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>

            <div className={s.items}>
              {arr.map((e) => (
                <CategoryItem
                  key={e.id}
                  img={e.img}
                  title={e.title}
                  subTitle={e.subTitle}
                  id={e.id}
                  page={'gifts'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
