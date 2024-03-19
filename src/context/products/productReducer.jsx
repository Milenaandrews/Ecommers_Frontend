const productReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: payload,
                // product: [{
                //     id: "",
                //     name: "",
                //     sku: "",
                //     price: 0,
                //     image: "",
                //     stock: ""
                // }]
            }
        case "GET_PRODUCT":
            return {
                ...state,
                product: [payload]
            }
        default:
            return state;
    }
}

export default productReducer;