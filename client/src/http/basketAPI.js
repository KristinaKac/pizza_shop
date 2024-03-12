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
export const increaseCount = async (id) => {
    return authHost.post(`/api/basket/increase`, {id});
}
export const decreaseCount = async (id) => {
    return authHost.post(`/api/basket/decrease`, {id});
}
export const getAllProductsId = async () => {
    return authHost.get('/api/basket/products');
}
