import { host, authHost } from "./axios";

export const createProduct = async (product) => {
    return authHost.post('/api/product', { product });
}
export const getAllProducts = async (typeId, limit, page) => {
    return host.get('/api/product', {params: {
        typeId, limit, page
    }});
}
export const getOneProduct = async (id) => {
    return host.get(`/api/product/${id}`);
}