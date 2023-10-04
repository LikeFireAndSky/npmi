'use client';

import React, { useEffect } from 'react';
import axios from 'axios';

const fetchData = async () => {
	const { data } = await axios.get('/api/get');
	console.log(data);
	return data;
};

const Page = () => {
	useEffect(() => {
		return () => {
			fetchData();
		};
	}, []);
	return <div>data</div>;
};

export default Page;
