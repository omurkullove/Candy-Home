import React from 'react';
import s from './HistoryCard.module.scss';
import Link from 'next/link';

const HistoryCard = ({ item }) => {
  const { hashtag, title, text, link, id } = item;

  return (
    <div className={s.historyItem}>
      <div className={s.mainBlock}>
        <div className={s.block1}>
          <p className={s.hashtag}>{hashtag}</p>
          <h1 className={s.title}>{title}</h1>
          <p className={s.text}>{text}</p>
          <Link href={`/entertainment/history/${id}`}>{link}</Link>
        </div>
        <div className={s.block2}>
          {/* <Image src='' width={450} height={180} alt='img' /> */}
        </div>
      </div>
      <div className={s.bottomLine}></div>
    </div>
  );
};

export default HistoryCard;
