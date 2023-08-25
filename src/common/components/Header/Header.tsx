import React from 'react';
import Nav from "common/components/Nav/Nav";
import s from './Header.module.scss'
import sContainer from '../../../styles/container.module.scss'

export const Header = () => {
    return (
        <>
            <div className={s.headerBlock}>
                <div className={sContainer.container}>
                    <span className={s.headerDiscount}>Discover New iPhonene 14 Pro Max Refurbished at 700 EUR</span>
                </div>
            </div>
            <Nav />
        </>
    );
};

