import productsMock from '../../mocks/products.json';

const INITIAL_STATE = productsMock.products;

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'TOGGLE_PRODUCT':
            return state.map(product =>
                product.id === action.payload
                ? { ...product, checked: !product.checked }
                : product
            )
        default : 
            return state
    }
}