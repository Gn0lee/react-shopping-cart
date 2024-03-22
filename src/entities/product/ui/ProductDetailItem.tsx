import { Product } from 'src/entities/product/type/product.type';
import { formatPriceToKRW } from 'src/shared/lib/format';
import usePostCartItemMutation from 'src/entities/cart/hooks/usePostCartItemMutation';

export interface ProductDetailItemProps extends Product {}

export default function ProductDetailItem({ name, price, imageUrl, id }: ProductDetailItemProps) {
	const { mutate: postCartItem } = usePostCartItemMutation();

	const handleClickCart = () => {
		postCartItem({ product: { name, price, imageUrl, id } });
	};

	return (
		<div className="product-detail-container">
			<div className="flex-col-center w-480">
				<img className="w-480 h-480 mb-10" src={imageUrl} alt={name} />
				<div className="product-detail-info">
					<span className="product-detail-info__name">{name}</span>
					<hr className="divide-line-gray my-20" />
					<div className="flex justify-between">
						<span>금액</span>
						<span className="product-detail-info__price">{formatPriceToKRW(price)}</span>
					</div>
				</div>
				<button
					className="product-detail-button flex-center mt-20"
					type="button"
					onClick={handleClickCart}
					data-testid="product-detail-button"
				>
					장바구니
				</button>
			</div>
		</div>
	);
}