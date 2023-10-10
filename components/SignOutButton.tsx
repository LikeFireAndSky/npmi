'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@material-tailwind/react';

const handleSignOut = () => {
	signOut();
};

const SignOutButton = () => {
	return <Button onClick={handleSignOut}>로그아웃</Button>;
};

export default SignOutButton;
