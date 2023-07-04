import React from 'react';
import s from './workerCard.module.scss';
import Image from 'next/image';

const WorkerCard = ({ worker }) => {
  const { name, post, photo, id } = worker;

  return (
    <div className={s.parent}>
      <Image src={photo} alt='profile' width={'170'} height={'170'} />
      <h4>{name}</h4>
      <p>{post}</p>
    </div>
  );
};

export default WorkerCard;
