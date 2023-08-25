import React, { useState } from 'react';
import s from './FilterModal.module.scss';

interface FilterModalProps {
    filterName: string;
    options: string[];
}

export const FilterModal: React.FC<FilterModalProps> = ({ filterName, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${s.filterModal} ${isOpen ? s.open : ''}`} onClick={toggleModal}>
            <div className={s.filterName}>{filterName}</div>
            <div className={s.filterIcon}>+</div>
            <div className={s.filterOptions}>
                {options.map(option => (
                    <label key={option}>
                        <input type="checkbox" />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};
