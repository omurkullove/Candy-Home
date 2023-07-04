import s from './CategoryItem.module.scss';
import Image from 'next/future/image';
import { useRouter } from 'next/router';

const CategoryItem = ({ title, img, subTitle, id, page }) => {
  const router = useRouter();
  return (
    <div className={s.item}>
      <div className={s.img}>
        <Image src={img} alt={'img'} layout={'raw'} className={s.imgChildren} />
      </div>
      <div className={s.btn} onClick={() => router.push(`${page}/${id}`)}>
        <span>
          {title} <br /> <span>{subTitle && subTitle}</span>
        </span>
      </div>
    </div>
  );
};

export default CategoryItem;
