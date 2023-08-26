import React from 'react';
import {FilterModal} from "common/components/Filters/FilterModal/FilterModal";
import s from './Filters.module.scss'
import sContainer from '../../../styles/container.module.scss'
import loader from '../../../assets/image/filters/loader.png'
import {filterByBrand, filterByMemory, filterByPrice, resetFilters} from "common/components/Cards/cards.reducer";
import {useDispatch} from "react-redux";

export const Filters = () => {
    const dispatch = useDispatch();

    const handleFilterByPrice = (selectedPrices: string[]) => {
        dispatch(filterByPrice(selectedPrices));
    };

    const handleFilterByBrand = (selectedBrands: string[]) => {
        dispatch(filterByBrand(selectedBrands));
    };

    const handleFilterMemory = (selectedMemory: string[]) => {
        dispatch(filterByMemory(selectedMemory));
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };


    return (
        <div className={s.filtersBlock}>
            <div className={sContainer.container}>
                <div className={s.filtersTitle}>
                    <span>Home / Smartphones / iPhone 14 Pro Max</span>
                    <h1>Smartphones</h1>
                </div>
                <div className={s.filtersContainer}>
                    <FilterModal filterName="Brand"
                                 options={['Iphone', 'Xiaomi', 'Samsung', 'Nokia']}
                                 onOptionSelect={handleFilterByBrand}
                    />

                    <FilterModal filterName="Price"
                                 options={['600', '500', '400', '300']}
                                 onOptionSelect={handleFilterByPrice}
                    />

                    <FilterModal filterName="Display"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Memory"
                                 options={['512', '256', '64', '32']}
                    onOptionSelect={handleFilterMemory}
                    />
                    <FilterModal filterName="RAM"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Battery"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Model"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Nr.SIM"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Refresh Rate"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Color"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Procesor"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Connection"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Type of display"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="NFC"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                    <FilterModal filterName="Procesor Model"
                                 options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                                 onOptionSelect={()=> {}}
                    />
                </div>
                <button className={s.filtersButtonReset}
                    onClick={handleResetFilters}
                >
                    <img src={loader} alt="loader"/>
                    Reset
                </button>
            </div>
        </div>
    );
};

