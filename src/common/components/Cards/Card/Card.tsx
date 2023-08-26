// Card.tsx

import React from 'react';
import s from './Card.module.scss'; // Импорт стилей из SCSS
import heart from '../../../../assets/image/cards/card/heart.png';
import libra from '../../../../assets/image/cards/card/libra.png';
import basket from '../../../../assets/image/cards/card/basket.png';

type CardProps = {
    id: number;
    image: string;
    name: string;
    color: string;
    characteristics: string[];
    price: string;
};

export const Card = (props: CardProps) => {
    return (
            <div key={props.id} className={s.cardItem}>
                <div className={s.cardPhoto}>
                    <img src={props.image} alt={props.name}/>
                </div>

                <div className={s.cardInfo}>
                    <h3>{props.name}</h3>
                    <span className={s.cardColor}>{props.color}</span>
                    <>
                        {props.characteristics.map((el, index) => (
                            <p className={s.cardCharacteristics} key={index}>{el}</p>
                        ))}
                    </>
                    <div className={s.priceAndIcon}>
                        <span className={s.cardPrice}>{props.price} EUR</span>
                        <div className={s.iconBlock}>
                            <img className={s.cardIcon} src={heart} alt="#"/>
                            <img className={s.cardIcon} src={libra} alt="#"/>
                            <img className={s.cardIcon} src={basket} alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
    );
};
