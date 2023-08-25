import React from 'react';
import { useAppSelector } from 'app/store';
import s from 'common/components/Cards/Cards.module.scss';
import sContainer from '../../../styles/container.module.scss';
import { Card } from 'common/components/Cards/Card/Card';

export const Cards = () => {
    const products = useAppSelector(state => state.cards.products);
    const filteredProducts = useAppSelector(state => state.cards.filteredProducts);

    return (
        <div className={s.cardsBlock}>
            <div className={sContainer.container}>
                    <div className={s.cardsButtons}>
                        <span>Sort by:</span>
                        <button className={s.cardsButton}>Popular +</button>
                        <button className={s.cardsButton}>New Product +</button>
                        <button className={s.cardsButton}>Expensive +</button>
                        <button className={s.cardsButton}>Chipset +</button>
                        <button className={s.cardsButton}>Sale +</button>
                        <button className={s.cardsButton}>Credit 0% +</button>
                        <button className={s.cardsButton}>Preorder +</button>

                        <span className={s.counterPhones}>25 Phones</span>
                    </div>
                <div className={s.containerCards}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Card
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                color={product.color}
                                characteristics={product.characteristics}
                                price={product.price}
                            />
                        ))
                    ) : (
                        products.map(product => (
                            <Card
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                color={product.color}
                                characteristics={product.characteristics}
                                price={product.price}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cards;
