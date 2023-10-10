import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getGithubEmailToken = async (accessToken: string) => {
	const { data } = await axios.get('https://api.github.com/user/emails', {
		headers: {
			Authorization: `bearer ${accessToken}`,
		},
	});

	return data;
};

const getGithubDefaultToken = async (accessToken: string) => {
	const { data } = await axios.get('https://api.github.com/user', {
		headers: {
			Authorization: `bearer ${accessToken}`,
		},
	});

	return data;
};

const getGithubToken = async (accessToken: string) => {
	const email = await getGithubEmailToken(accessToken);
	const defaultToken = await getGithubDefaultToken(accessToken);

	defaultToken.email = email[0].email;
	defaultToken.name = defaultToken.login;
	return defaultToken;
};

export default getGithubToken;
