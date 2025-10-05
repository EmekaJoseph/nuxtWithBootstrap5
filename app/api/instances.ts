import axios from 'axios';
// @ts-ignore
// import Cookies from 'js-cookie';

const loadingIndicator = useLoadingIndicator()

// const hostURL = import.meta.env.VITE_API_URL;
const hostURL = 'https://google';
const apiURL = `${hostURL}/api/`;

const getHeaders = (type: 'json' | 'form') => ({
    Accept: 'application/json',
    withCredentials: true,
    'Content-Type': type === 'json' ? 'application/json' : 'multipart/form-data',
});

const createAxiosInstance = (type: 'json' | 'form') =>
    axios.create({
        baseURL: apiURL,
        headers: getHeaders(type),
    });

const $instance = createAxiosInstance('json');
const $instanceSilent = createAxiosInstance('json');
const $instanceForm = createAxiosInstance('form');

const setAuthAndStartProgress = (config: any) => {
    const authStore = useAuthStore()
    // const token = Cookies.get(authStore.cookieValues.tokenName);
    const token = authStore.profileName;
    if (token) config.headers.Authorization = `Bearer ${token}`;

    loadingIndicator.start({ force: true })
    return config;
};

const finishProgress = (response: any) => {
    loadingIndicator.finish()
    return response;
};

const handleError = (error: any) => {
    loadingIndicator.finish()
    return Promise.reject(error);
};

// Attach interceptors
[$instance, $instanceForm].forEach(instanceObj => {
    instanceObj.interceptors.request.use(setAuthAndStartProgress);
    instanceObj.interceptors.response.use(finishProgress, handleError);
});

export { $instance, $instanceSilent, $instanceForm };
