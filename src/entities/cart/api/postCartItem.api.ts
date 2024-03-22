import { http, HttpResponse } from 'msw';

import axiosInstance from 'src/shared/lib/axiosInstance';
import { Response } from 'src/shared/types/api';
import { CartItem } from 'src/entities/cart/type/cart.type';
import MOCK_CART_LIST from 'src/entities/cart/mock/MOCK_CART_LIST';

export const postCartItemMockHandler = http.post<never, Pick<CartItem, 'product'>>('*/carts', async ({ request }) => {
	const { product } = await request.json();

	const isProductExist = MOCK_CART_LIST.some(item => item.product.id === product.id);

	if (!isProductExist) {
		MOCK_CART_LIST.push({
			id: Date.now(),
			product,
		});
	}

	return HttpResponse.json({ response: {} });
});

export default async function postCartItemApi(product: Pick<CartItem, 'product'>) {
	const response = await axiosInstance.post<Response<object>>('/carts', product);

	return response.data;
}