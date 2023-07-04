import React from 'react';
import s from "../../../styles/main.module.scss";
import Image from "next/image";
import fakeImg from "../../../public/fakeImg.png";
import Link from "next/link";

const MainItem = ({right}) => {
    return (
        <div className={s.mainItems}>
            <div className={s.mainItem} style={{flexDirection: `${right ? "row" : "row-reverse"}`}}>
                <div className={s.mainItemImg}>
                    <Image src={fakeImg}/>
                </div>
                <div className={s.mainItemInfo}>
                    <div className={s.mainItemTitle}>
                        Наша история
                    </div>
                    <div className={s.mainItemText}>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI
                        века. В то время некий безымянный печатник создал большую коллекцию размеров
                        и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
                        только успешно пережил без заметных изменений пять веков, но и перешагнул
                        в электронный дизайн.
                    </div>
                    <div className={s.mainItemLink}>
                        <Link href="#">
                            <a>Узнать больше...</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainItem;