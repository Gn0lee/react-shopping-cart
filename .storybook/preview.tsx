import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axiosInstance from 'src/shared/lib/axiosInstance';

import 'src/css/index.css';

initialize({
	onUnhandledRequest: 'bypass',
	serviceWorker: {
		url: './mockServiceWorker.js',
	},
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		Story => {
			const queryClient = new QueryClient();

			return (
				<QueryClientProvider client={queryClient}>
					<Story />
				</QueryClientProvider>
			);
		},
	],
	loaders: [
		mswLoader,
		() => {
			axiosInstance.defaults.headers.uid = 'test-uid';
		},
	],
};

export default preview;
