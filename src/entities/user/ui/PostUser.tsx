import { FormEvent, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import usePostUserMutation from 'src/entities/user/hooks/usePostUserMutation';
import axiosInstance from 'src/shared/lib/axiosInstance';
import { setUIDSessionStorage, UID_KEY } from 'src/entities/user/lib/sessionStorage';

export default function PostUser() {
	const [name, setName] = useState('');

	const navigate = useNavigate();

	const { mutate: postUser, isPending } = usePostUserMutation({
		onSuccess: user => {
			setUIDSessionStorage(user.id);
			axiosInstance.defaults.headers[UID_KEY] = user.id;

			navigate('/product');
		},
	});

	const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		postUser({
			name,
		});
	};

	return (
		<div className="user-container">
			<div className="user-box">
				<h1 className="user-title">React Shopping Cart</h1>
				<div className="user-description">
					넥스트 스텝의 쇼핑카트 미션 페이지입니다.
					<br />
					유저이름은 유일값이며 장바구니, 주문을 구분하기 위해 사용됩니다.
					<br />
					(인증,인가와 무관합니다.)
				</div>
				<form onSubmit={handleSubmit} className="user-form">
					<div className="user-input-box">
						<label htmlFor="name" className="user-label">
							이름
						</label>
						<input type="text" value={name} onChange={handleChangeName} id="name" className="user-input" />
					</div>
					<button type="submit" disabled={isPending || name === ''} className="user-button">
						유저 등록
					</button>
				</form>
			</div>
		</div>
	);
}
