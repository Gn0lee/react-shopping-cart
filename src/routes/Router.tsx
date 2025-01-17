import RootLayout from 'src/shared/ui/RootLayout';

import ProductList from 'src/widgets/ProductList';
import ProductDetail from 'src/widgets/ProductDetail';
import Cart from 'src/widgets/Cart';
import OrderConfirm from 'src/widgets/OrderConfirm';
import OrderList from 'src/widgets/OrderList';
import OrderDetail from 'src/widgets/OrderDetail';
import PostUser from 'src/entities/user/ui/PostUser';

export const routes = [
	{
		path: '/',
		element: <PostUser />,
	},
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: 'product',
				element: <ProductList />,
			},
			{
				path: 'product/:id',
				element: <ProductDetail />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'order/confirm/:id',
				element: <OrderConfirm />,
			},
			{
				path: 'order/list',
				element: <OrderList />,
			},
			{
				path: 'order/detail/:id',
				element: <OrderDetail />,
			},
		],
	},
];

export default routes;
