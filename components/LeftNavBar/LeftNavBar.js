import React from 'react';
import s from "./LeftNavBar.module.scss";
import Image from "next/image";

const LeftNavBar = ({children, img}) => {
    return (
        <div className={s.navBar}>
            <div className={s.navBarContent}>
                <div className={s.navBarImg}>
                    <Image src={img} alt="mainNavBarImg"/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default LeftNavBar;