import s from './package.module.scss';
import PackageLeftNavBar from './PackageLeftNavBar/PackageLeftNavBar';
import CategoryItem from '../../modules/CategoryItem/CategoryItem';
import boxes from '../../public/boxes.png';
import jest from '../../public/jest.png';
import tecstil from '../../public/tecstil.png';
import tybi from '../../public/tybi.png';
import toy from '../../public/toy.png';

const Package = () => {
  const arr = [
    { id: 1, img: boxes, title: 'Картон. МГК', subTitle: '' },
    { id: 2, img: jest, title: 'Жесть Банка ', subTitle: '' },
    { id: 3, img: tecstil, title: 'Мягкая Текстиль', subTitle: '' },
    { id: 4, img: tybi, title: 'Тубы', subTitle: 'Переплетный картон' },
    { id: 5, img: toy, title: 'Игрушка', subTitle: '' },
  ];

  return (
    <div className={s.package}>
      <div className='container'>
        <div className={s.content}>
          <PackageLeftNavBar />

          <div className={s.mainContent}>
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
                  page={'package'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
