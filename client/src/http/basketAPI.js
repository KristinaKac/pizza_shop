import { authHost } from "./axios";

export const getBasket = async () => {
    return authHost.get('/api/basket');
}
export const addToCart = async (id) => {
    return authHost.post('/api/basket', { id });
}
export const removeFromCart = async (id) => {
    return authHost.delete(`/api/basket/${id}`);
}
export const getAllProductsId = async () => {
    return authHost.get('/api/basket/products');
}
