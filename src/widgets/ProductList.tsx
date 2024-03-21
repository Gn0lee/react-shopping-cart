import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

import useGetProductListQuery from 'src/entities/product/hooks/useGetProductListQuery';
import ProductListItem from 'src/entities/product/ui/ProductListItem';

export default function ProductList() {
	const navigate = useNavigate();

	const { data: productList, isLoading } = useGetProductListQuery();

	if (isLoading) {
		return <div className="product-no-items">Loading...</div>;
	}

	if (productList.length === 0) {
		return <div className="product-no-items">상품이 존재하지 않습니다.</div>;
	}

	const handleClickCart = (id: number) => (event: MouseEvent) => {
		// TODO: 장바구니에 상품 추가

		event.stopPropagation();

		console.log('장바구니에 상품 추가', id);
	};

	const handleClickItem = (id: number) => () => {
		navigate(`/product/${id}`);
	};

	return (
		<section className="product-container">
			{productList.map(product => (
				<ProductListItem
					key={product.id}
					onClickCart={handleClickCart(product.id)}
					onClickItem={handleClickItem(product.id)}
					{...product}
				/>
			))}
		</section>
	);
}
