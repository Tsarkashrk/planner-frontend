import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	mode: 'jit',
	content: [
		'./src/pages/**/*.{ts,tsx, js, jsx, mdx}',
		'./src/components/**/*.{ts,tsx, js, jsx, mdx}',
		'./src/app/**/*.{ts,tsx, js, jsx, mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		}
	},
	plugins: []
}

export default config
