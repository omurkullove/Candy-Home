import s from './Candies.module.scss';
import CandiesLeftNafBar from './CandiesLeftNafBar/CandiesLeftNafBar';
import shokolad from '../../public/shokolad.png';
import vavli from '../../public/vavli.png';
import candy from '../../public/candy.png';
import gift from '../../public/gift.png';
import CategoryItem from '../../modules/CategoryItem/CategoryItem';

const Candies = () => {
  const arr = [
    { id: 1, img: shokolad, title: 'Шоколад', subTitle: 'Штучные изделия' },
    { id: 2, img: vavli, title: 'Десерты ', subTitle: 'Вафли, печенье' },
    { id: 3, img: candy, title: 'Весовые конфеты', subTitle: '' },
    { id: 4, img: gift, title: 'Бакалея', subTitle: '' },
  ];

  return (
    <div className={s.candies}>
      <div className='container'>
        <div className={s.content}>
          <CandiesLeftNafBar />
          <div className={s.mainContent}>
            <p>
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
                  page={'candies'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candies;
