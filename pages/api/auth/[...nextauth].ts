import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions } from 'next-auth';
import {
	GoogleAuthProvider,
	signInWithCredential,
	GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '../../../libs/firebase.config';
import getGithubToken from '../../../utils/getGithubToken';

// Dynamic 라우팅을 사용한는 이유는 signIn, callback, signOut을 자동으로 처리하기 위해서이다.

export const authOption: AuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRETS!,
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRETS!,
			idToken: true,
		}),
	],

	callbacks: {
		async session({ session, token, user }: any) {
			session.user.username = session?.user?.name
				.split(' ')
				.join('')
				.toLocaleLowerCase();

			session.user.uid = token.sub;
			return session;
		},

		async signIn({ account, user, credentials }) {
			if (account?.provider === 'google') {
				console.log(account.id_token);
				const credential = GoogleAuthProvider.credential(
					account?.id_token as string,
				);
				try {
					const result = await signInWithCredential(auth, credential).then(
						(res) => {
							return true;
						},
					);
					return true;
				} catch (error) {
					console.log('error occured');
					console.log(error);
					return false;
				}
			}
			if (account?.provider === 'github') {
				const token = await getGithubToken(account?.access_token as string);
				const credential = GithubAuthProvider.credential(token);
				const credential2 = GithubAuthProvider.credential(
					account?.access_token as string,
				);

				try {
					signInWithCredential(auth, credential2).then((res) => {
						console.log('login success');
					});
				} catch (error) {
					console.log(error);
				}
			}
			return false;
		},
	},

	secret: process.env.NEXTAUTH_SECRET!,
};

export default NextAuth(authOption);
