import axios from 'axios';

import { getUIDSessionStorage, UID_KEY } from 'src/entities/user/lib/sessionStorage';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_ENDPOINT,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
	},
});

axiosInstance.interceptors.request.use(config => {
	if (config.url?.includes('user')) {
		return config;
	}

	const uidSessionStorage = getUIDSessionStorage();

	const uidHeader = config.headers.get(UID_KEY);

	if (uidHeader === undefined && uidSessionStorage !== null) {
		config.headers.set(UID_KEY, uidSessionStorage);
	}

	if (uidHeader === undefined && uidSessionStorage === null) {
		alert('유저 정보를 입력해 주세요.');
		window.location.replace('/');
	}

	return config;
});

export default axiosInstance;
