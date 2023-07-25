/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Recursive', 'sans-serif'],
			'serif': ['Merriweather', 'serif'],
			'mono': ['JetBrains Mono', 'monospace']
    },
		extend: {
			colors: {
        discord: '#5865f2',
        patreon: '#F1465A'
      }
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
