import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { User } from 'src/entities/user/type/user';

export const postUser = async ({ name }: Pick<User, 'name'>) => {
	const response = await axiosInstance.post<Response<User>>('/user', { name });

	return response.data;
};
