'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@material-tailwind/react';

const handleSignIn = () => {
	signIn();
};

const SignInButton = () => {
	return <Button onClick={handleSignIn}>로그인하기</Button>;
};

export default SignInButton;
