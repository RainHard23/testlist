import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppSelector} from 'app/store';
import {ProductType, searchProducts} from "common/components/Cards/cards.reducer";
import {useDispatch} from "react-redux";
import s from './Search.module.scss'
import search from '../../../assets/image/header/nav/searchIcon.svg'

export const Search = () => {
    const dispatch = useDispatch()
    const products = useAppSelector(state => state.cards.products);

    const [value, setValue] = useState('');
    const [countries, setCountries] = useState<ProductType[]>([]);

    useEffect(() => {
        setCountries(products);
    }, []);

    const test = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const filtered = countries.filter(el => {
        return el.name.toLowerCase().includes(value.toLowerCase());
    });

    useEffect(() => {
        dispatch(searchProducts(filtered));
    }, [dispatch, filtered]);

    return (
        <div>
            <div className={s.searchContainer}>
                <img className={s.searchIcon} src={search} alt="#"/>
                <input
                    className={s.searchInput}
                    type='search'
                    placeholder='Search'
                    onChange={test}
                />
            </div>
            <div className={s.searchInputError}>
                {filtered.length === 0 && value.trim() !== '' && (
                    <p>Нет подходящего товара</p>
                )}
            </div>

        </div>
    );
};
