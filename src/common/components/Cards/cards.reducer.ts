import iphone from '../../../assets/image/cards/iphone.jpeg'

export type ProductType = {
    id: number;
    image: string;
    name: string;
    color: string;
    characteristics: string[];
    price: number;
    memory: number
};

export type CardsStateType = {
    products: ProductType[];
    filteredProducts: ProductType[]; // Отфильтрованные карточки
};

type ActionsType =
    | ReturnType<typeof searchProducts>
    | ReturnType<typeof filterByPrice>



const initialState: CardsStateType = {
    products: [
        {
            id: 1,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 600,
            memory: 256
        },
        {
            id: 2,
            image: iphone,
            name: "Samsung",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 600,
            memory: 256
        },
        {
            id: 3,
            image: iphone,
            name: "Nokia iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 400,
            memory: 256
        },
        {
            id: 4,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 300,
            memory: 256
        },
        {
            id: 5,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 400,
            memory: 256
        },
        {
            id: 6,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 600,
            memory: 256
        },
        {
            id: 7,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 600,
            memory: 256
        },
        {
            id: 8,
            image: iphone,
            name: "Apple iPhone 11 Plus 256 Gb",
            color: "Blue",
            characteristics: ["6.1” | 12 MP | 6 GB | Single SIM"],
            price: 600,
            memory: 256
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

export const filterByPrice = (price: number[]) => {
    return {
        type: 'FILTER_BY_PRICE',
        price,
    } as const;
};









