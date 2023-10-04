import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import auth from '../../../libs/firebase.config';

// Dynamic 라우팅을 사용한는 이유는 signIn, callback, signOut을 자동으로 처리하기 위해서이다.

type SessionProps = {
	session: any;
	token: any;
	user: any;
};

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRETS!,
		}),
	],
	callbacks: {
		async session({ session, token, user }: SessionProps) {
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET!,
};

export default NextAuth(authOptions);
