import { host, authHost } from "./axios";

export const getBasket = async () => {
    return authHost.get('/api/basket');
}
export const addToCart = async (id) => {
    return authHost.post('/api/basket', { id });
}
export const getAllProductsId = async () => {
    return authHost.get('/api/basket/products');
}
// export const getAllProducts = async (typeId, limit, page) => {
//     return host.get('/api/product', {params: {
//         typeId, limit, page
//     }});
// }
// export const getOneProduct = async (id) => {
//     return host.get(`/api/product/${id}`);
// }