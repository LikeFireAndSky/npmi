'use client';

import React from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
	const { data } = await axios.get('/api/firebasedata');
	return data;
};

const Page = () => {
	const { data, isLoading, isError } = useQuery(['todos'], fetchData);
	const { data: session } = useSession();

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>Error</div>;

	console.log(data);

	return (
		<div>
			{session ? (
				<div>안녕</div>
			) : (
				<div>
					<h1>로그인이 필요합니다.</h1>
				</div>
			)}
		</div>
	);
};

export default Page;
