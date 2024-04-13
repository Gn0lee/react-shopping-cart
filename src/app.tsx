import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { OverlayProvider } from 'near-payments';

import routes from 'src/routes/Router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<OverlayProvider>
				<RouterProvider router={createBrowserRouter(routes)} />
			</OverlayProvider>
		</QueryClientProvider>
	);
}
