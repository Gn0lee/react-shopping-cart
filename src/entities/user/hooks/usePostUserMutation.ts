import { useMutation } from '@tanstack/react-query';

import { postUser } from 'src/entities/user/api/user';
import { Response } from 'src/shared/types/api';
import { User } from 'src/entities/user/type/user';

interface UsePostUserMutationOptions {
	onSuccess?: (user: User) => void;
}

export default function usePostUserMutation(options?: UsePostUserMutationOptions) {
	return useMutation<Response<User>, unknown, Pick<User, 'name'>>({
		mutationFn: postUser,
		onSuccess: data => {
			options?.onSuccess?.(data.response);
		},
	});
}
