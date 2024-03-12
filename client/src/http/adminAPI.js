import { host, authHost } from "./axios";

export const createType = async (name) => {
    return authHost.post('/api/type', { name });
}
export const getAllTypes = async () => {
    return authHost.get('/api/type');
}
export const createProduct = async (formData) => {
    return authHost.post('/api/product', formData);
}
export const removeProduct = async (product) => {
    return authHost.delete(`/api/product/${product}`);
}

