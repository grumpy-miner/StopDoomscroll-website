/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'doom-blue': '#2980b9',
				'doom-purple': '#8e44ad',
				'doom-red': '#e74c3c',
				'doom-red-2': '#c0392b',
				'doom-green': '#2ecc71',
				'doom-green-2': '#27ae60',
				'doom-yellow': '#f1c40f',
				'doom-gray': '#f8f9fa'
			},
			boxShadow: {
				custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
			}
		}
	},
	plugins: []
};
