import { ReactNode } from 'react';
import { render, renderHook } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { InitialEntry } from 'history';
import { OverlayProvider } from 'near-payments';

import routes from 'src/routes/Router';

interface RenderWithMemoryRouterOptions {
	initialEntries?: InitialEntry[];
	initialIndex?: number;
}

function AppWrapper({ children }: { children: ReactNode }) {
	const queryClient = new QueryClient();
	return (
		<OverlayProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</OverlayProvider>
	);
}

export function renderMemoryRouter(options?: RenderWithMemoryRouterOptions) {
	const memoryRouter = createMemoryRouter(routes, { ...options });
	const alert = document.createElement('div');

	alert.id = 'alert';

	return render(<RouterProvider router={memoryRouter} />, {
		wrapper: AppWrapper,
		container: document.body.appendChild(alert),
	});
}

export function renderHookWithQueryClient<Result, Props>(callback: (initialProps: Props) => Result) {
	return renderHook(callback, { wrapper: AppWrapper });
}
