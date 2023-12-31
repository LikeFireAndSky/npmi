import type { Config } from 'tailwindcss';

const WithMT = require('@material-tailwind/react/utils/withMT');

const config: Config = WithMT({
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '443px',
			md: '768px',
			lg: '960px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
});

export default config;
