import { host, authHost } from "./axios";

export const createType = async (name) => {
    return authHost.post('/api/type', { name });
}
export const getAllTypes = async () => {
    return authHost.get('/api/type');
}

