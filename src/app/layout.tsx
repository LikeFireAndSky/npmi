import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import Providers from '../../components/Provider';
import { authOption } from '../../pages/api/auth/[...nextauth]';
import SessionProvider from '../../components/SessionProvider';
import SignInButton from '../../components/SignInButton';

import Header from '../../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOption);

	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={session}>
					<Providers>
						<Header />
						{!session ? (
							<div>
								로그인이 필요합니다.
								<SignInButton />
							</div>
						) : (
							<div>{children}</div>
						)}
					</Providers>
				</SessionProvider>
			</body>
		</html>
	);
}
