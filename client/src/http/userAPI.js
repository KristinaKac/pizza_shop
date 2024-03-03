import { host, authHost } from "./axios";

export const registration = async (name, email, password) => {
    return host.post('/api/user/registration', {name, email, password, role: 'USER'})
}
export const login = async (email, password) => {
    return host.post('/api/user/login', {email, password});
}
export const checkAuth = async () => {
    return authHost.get('/api/user/auth');
}