import OrderListItem from 'src/entities/order/ui/list/OrderListItem';
import OrderListHeader from 'src/entities/order/ui/list/OrderListHeader';
import useGetOrderListQuery from 'src/entities/order/hooks/useGetOrderListQuery';

export default function OrderList() {
	const { data: orderList, isLoading, isSuccess } = useGetOrderListQuery();

	if (isLoading) {
		return (
			<div className="product-no-items" data-testid="order-list-page">
				Loading...
			</div>
		);
	}

	if (!isSuccess) {
		return (
			<div className="product-no-items" data-testid="order-list-page">
				주문 목록을 불러오지 못했습니다.
			</div>
		);
	}

	if (orderList.length === 0) {
		return (
			<div className="product-no-items" data-testid="order-list-page">
				주문이 없습니다.
			</div>
		);
	}

	return (
		<section className="order-section" data-testid="order-list-page">
			<OrderListHeader />
			{orderList.map(order => (
				<OrderListItem {...order} key={order.id} />
			))}
		</section>
	);
}
