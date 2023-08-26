import iphone from '../../../assets/image/cards/iphone.png'

export type ProductType = {
    id: number;
    image: string;
    name: string;
    brand: string;
    color: string;
    characteristics: string[];
    price: string;
    memory: string
};

export type CardsStateType = {
    products: ProductType[];
    filteredProducts: ProductType[]; // Отфильтрованные карточки
};

type ActionsType =
    | ReturnType<typeof searchProducts>
    | ReturnType<typeof filterByPrice>
    | ReturnType<typeof filterByBrand>
    | ReturnType<typeof filterByMemory>
    | ReturnType<typeof resetFilters>



const initialState: CardsStateType = {
    products: [
        {
            id: 1,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            brand: "Iphone",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: '400',
            memory: '256'
        },
        {
            id: 2,
            image: iphone,
            name: "Nokia 256 GB",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            brand: "Nokia",
            price: '400',
            memory: '256'
        },
        {
            id: 3,
            image: iphone,
            name: "Xiaomi 256 GB",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            brand: "Xiaomi",
            price: '500',
            memory: '256'
        },
        {
            id: 4,
            image: iphone,
            name: "Xiaomi 64 GB",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            brand: "Xiaomi",
            price: '300',
            memory: '64'
        },
        {
            id: 5,
            image: iphone,
            name: "Nokia 256 GB",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            brand: "Nokia",
            price: '400',
            memory: '256'
        },
        {
            id: 6,
            image: iphone,
            name: "Samsung 64 GB",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            brand: "Samsung",
            price: '300',
            memory: '64'
        },
        {
            id: 7,
            image: iphone,
            name: "Apple iPhone 11 Plus 32 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            brand: "Iphone",
            price: '300',
            memory: '32'
        },
        {
            id: 8,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            brand: "Iphone",
            price: '600',
            memory: '512'
        },
    ],
    filteredProducts: []
};

export const cardsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEARCH_PRODUCTS':
            return {
                ...state,
                filteredProducts: action.payload,
            };
        case 'FILTER_BY_PRICE':
            return {
                ...state,
                filteredProducts: state.products.filter(product => action.price.includes(product.price)), // Используйте метод includes
            }
        case 'FILTER_BY_BRAND':
            return {
                ...state,
                filteredProducts: state.products.filter(product => action.brands.includes(product.brand)),
            };
        case 'FILTER_BY_MEMORY':
            return {
                ...state,
                filteredProducts: state.products.filter(product => action.memory.includes(product.memory)),
            };
        case 'RESET_FILTERS':
            return {
                ...state,
                filteredProducts: []
            };

        default:
            return state;
    }
};

export const searchProducts = (filteredProducts: ProductType[]) => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: filteredProducts,
    } as const;
};

export const filterByPrice = (price: string[]) => {
    return {
        type: 'FILTER_BY_PRICE',
        price,
    } as const;
};


export const filterByBrand = (brands: string[]) => {
    return {
        type: 'FILTER_BY_BRAND',
        brands,
    } as const;
};

export const filterByMemory = (memory: string[]) => {
    return {
        type: 'FILTER_BY_MEMORY',
        memory,
    } as const;
};

export const resetFilters = () => {
    return {
        type: 'RESET_FILTERS',
    } as const;
};








