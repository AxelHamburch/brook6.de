/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				// Bitcoin-Orange – der Funke in der Dunkelheit
				brand: {
					50: '#fff7ed',
					100: '#ffedd3',
					200: '#ffd9a6',
					300: '#ffbd6e',
					400: '#ff9d33',
					500: '#f7931a',
					600: '#dd7908',
					700: '#b75d09',
					800: '#93490f',
					900: '#783d10',
				},
				// Klinkerstein-Rot – Speicherstadt-Backstein
				brick: {
					50: '#fbeceb',
					100: '#f5d2cf',
					200: '#e8a9a3',
					300: '#d57b72',
					400: '#bd5347',
					500: '#9c3c30',
					600: '#7f2f26',
					700: '#66261f',
					800: '#4f1e19',
					900: '#3a1613',
				},
				// Fleet-Blau – trübes Flusswasser zwischen den Lagerhäusern
				brook: {
					50: '#eef4f6',
					100: '#d4e4e9',
					200: '#abc8d2',
					300: '#7ca7b6',
					400: '#4f8396',
					500: '#38687a',
					600: '#2c5263',
					700: '#244250',
					800: '#1d353f',
					900: '#172a32',
				},
				// Dämmer-Braun/Grau – Nebel, Dielenboden, Nacht über dem Hafen
				dusk: {
					50: '#f3efec',
					100: '#e4dcd4',
					200: '#c6b8ab',
					300: '#a2927f',
					400: '#7c6c5b',
					500: '#5c4f42',
					600: '#473d34',
					700: '#362e28',
					800: '#251f1a',
					900: '#17130f',
					950: '#0e0b09',
				},
			},
		},
	},
	plugins: [],
};
