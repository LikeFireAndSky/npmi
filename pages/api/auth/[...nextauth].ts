import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions } from 'next-auth';
import { collection, doc } from 'firebase/firestore';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { FirebaseAdapterConfig } from '@auth/firebase-adapter';
import { db, auth } from '../../../libs/firebase.config';
import {
	GoogleAuthProvider,
	signInWithCredential,
	GithubAuthProvider,
	signInWithPopup,
} from 'firebase/auth';

// Dynamic 라우팅을 사용한는 이유는 signIn, callback, signOut을 자동으로 처리하기 위해서이다.

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const authOption: AuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRETS!,
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRETS!,
		}),
	],

	callbacks: {
		async session({ session, token, user }) {
			return session;
		},

		async signIn({ user, account, profile, email, credentials }) {
			console.log('console', account);
			const accessToken = account?.id_token;
			const credential = GoogleAuthProvider.credential(accessToken as string);
			const result = await signInWithCredential(auth, credential).then(
				(res) => {
					console.log('res', res);
					return true;
				},
			);
			console.log('result', result);

			return true;
		},
	},

	secret: process.env.NEXTAUTH_SECRET!,
};

export default NextAuth(authOption);
