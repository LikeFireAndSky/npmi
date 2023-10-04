'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@material-tailwind/react';

type Props = {
	children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
	const [queryClient] = React.useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>{children}</ThemeProvider>
		</QueryClientProvider>
	);
};

export default Providers;
