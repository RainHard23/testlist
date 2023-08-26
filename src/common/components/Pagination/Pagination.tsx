import React from 'react';
import s from './Pagination.module.scss'
import arrowRight from '../../../assets/image/cards/arrowRight.svg'
import more from '../../../assets/image/cards/more.svg'
export const Pagination = () => {
    return (
        <div className={s.paginationContainer}>
            <div><button className={s.paginationButton}>1</button></div>
            <div><button className={s.paginationButton}>2</button></div>
            <div><button className={s.paginationButton}>3</button></div>
            <div className={s.paginationIcon}><img src={more} alt="#"/></div>
            <div><button className={s.paginationButton}>11</button></div>
            <div>
                <button className={s.paginationButton}>
                    <img src={arrowRight} alt="#"/>
                </button>
            </div>
        </div>
    );
};

