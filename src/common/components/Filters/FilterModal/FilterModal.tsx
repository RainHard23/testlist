import React, { useState } from 'react';
import s from './FilterModal.module.scss';

interface FilterModalProps {
    filterName: string;
    options: string[];
    onOptionSelect: (selectedPrice: number[]) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ filterName, options, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (option: string) => {
        const updatedSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter(item => item !== option)
            : [...selectedOptions, option];

        setSelectedOptions(updatedSelectedOptions);
        const selectedPrices = updatedSelectedOptions.map(Number);
        onOptionSelect(selectedPrices);
    };

    return (
        <div className={`${s.filterModal} ${isOpen ? s.open : ''}`}>
            <div className={s.filterName} onClick={toggleModal}>
                {filterName}
            </div>
            <div className={s.filterIcon} onClick={toggleModal}>+</div>
            {isOpen && (
                <div className={s.filterOptions}>
                    {options.map(option => (
                        <label key={option}>
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                                disabled={!selectedOptions.includes(option) && selectedOptions.length === 3}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};
