interface CartItemListHeaderProps {
	cartListLength: number;
}

export default function CartItemListHeader({ cartListLength }: CartItemListHeaderProps) {
	return (
		<>
			<h3 className="cart-title">든든배송 상품({cartListLength}개)</h3>
			<hr className="divide-line-gray mt-10" />
		</>
	);
}
