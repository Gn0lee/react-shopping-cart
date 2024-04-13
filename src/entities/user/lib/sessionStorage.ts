export const UID_KEY = 'uid';

export const setUIDSessionStorage = (uid: string) => {
	sessionStorage.setItem(UID_KEY, uid);
};

export const getUIDSessionStorage = () => {
	return sessionStorage.getItem(UID_KEY);
};

export const removeUIDSessionStorage = () => {
	sessionStorage.removeItem(UID_KEY);
};
