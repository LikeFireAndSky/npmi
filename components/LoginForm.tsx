'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
	Card,
	Input,
	Typography,
	Checkbox,
	Button,
} from '@material-tailwind/react';

type Inputs = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Card shadow>
			<Typography color="blue-gray" variant="h4">
				Sign Up
			</Typography>
			<Typography color="gray" className="mt-1 font-normal">
				Enter your email and password to sign up
			</Typography>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
			>
				<div className="mb-4 flex flex-col gap-6">
					<Input
						color="blue"
						label="InputEmail"
						crossOrigin={'anonymous'}
						{...register('email', { required: true })}
					/>
					{errors.email && <span>This field is required</span>}

					<Input
						color="green"
						label="inputPassword"
						crossOrigin={'anonymous'}
						{...register('password', { required: true })}
					/>
					{errors.password && <span>This field is required</span>}
				</div>
				<Checkbox
					crossOrigin={'anonymous'}
					label={
						<Typography
							variant="small"
							color="gray"
							className="flex items-center font-normal"
						>
							I agree the
							<a
								href="#"
								className="font-medium transition-colors hover:text-gray-900"
							>
								&nbsp;Terms and Conditions
							</a>
						</Typography>
					}
					containerProps={{ className: '-ml-2.5' }}
				/>
				<Button className="mt-6" fullWidth>
					<input type="submit" />
				</Button>
				<Typography color="gray" className="mt-4 text-center font-normal">
					Already have an account?{' '}
					<a href="#" className="font-medium text-gray-900">
						Sign In
					</a>
				</Typography>
			</form>
		</Card>
	);
};

export default LoginForm;
