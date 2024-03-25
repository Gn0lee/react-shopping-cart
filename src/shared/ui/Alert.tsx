import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import useAlertStore from 'src/shared/store/useAlertStore';

export default function Alert() {
	const close = useAlertStore.use.close();
	const visible = useAlertStore.use.visible();
	const message = useAlertStore.use.message();
	const confirm = useAlertStore.use.confirm();
	const title = useAlertStore.use.title();

	useEffect(() => {
		if (visible) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [visible]);

	if (!visible) {
		return null;
	}

	return createPortal(
		<>
			<div className="alert-container">
				<h3 className="alert-title">{title}</h3>
				<div className="alert-message">{message}</div>
				<div className="alert-button-box">
					<button
						onClick={() => {
							confirm();
							close();
						}}
						className="alert-button-confirm"
					>
						확인
					</button>
					<button onClick={close} className="alert-button-cancel">
						취소
					</button>
				</div>
			</div>
			<div className="alert-background" />
		</>,
		document.getElementById('alert') as HTMLDivElement,
	);
}