import { host, authHost } from "./axios";

export const createProduct = async (product) => {
    return authHost.post('/api/product', { product });
}
export const getAllProducts = async () => {
    return host.get('/api/product');
}
export const getOneProduct = async (id) => {
    return host.get(`/api/product/${id}`);
}