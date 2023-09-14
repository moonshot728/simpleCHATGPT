/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		colors: {
			black: 'black',
			white: 'white',
			red: 'red',
			transparent: 'transparent',
			terminal: {
				main: {
					primary: 'var(--terminal-main)',
					dark: 'var(--terminal-main-dark)',
					light: 'var(--terminal-main-light)',
				},
			},
		},
		extend: {
			backgroundSize: {
				line: '100% 4px',
			},
			backgroundImage: {
				metal: 'url("/texture.jpeg")',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				lines: 'linear-gradient( to bottom, rgba(18, 16, 16, 0.1) 50%, rgba(0, 0, 0, 0.17) 50% );',
			},
			keyframes: {
				stereo: {
					'0%': {
						textShadow: '0.4 0 1px var(--stereo-blue), -0.4px 0 1px var(--stereo-red), 0 0 3px',
					},
					'5%': {
						textShadow: '3px 0 1px var(--stereo-blue),-3px 0 1px var(--stereo-red), 0 0 3px',
					},
					'10%': {
						textShadow: '0.03px 0 1px var(--stereo-blue),-0.03px 0 1px var(--stereo-red),0 0 3px',
					},
					'15%': {
						textShadow: '0.4px 0 1px var(--stereo-blue),-0.4px 0 1px var(--stereo-red),0 0 3px',
					},
					'20%': {
						textShadow: '3.5px 0 1px var(--stereo-blue),-3.5px 0 1px var(--stereo-red),0 0 3px',
					},
					'25%': {
						textShadow: '1.5px 0 1px var(--stereo-blue),-1.5px 0 1px var(--stereo-red),0 0 3px',
					},
					'30%': {
						textShadow: '0.7px 0 1px var(--stereo-blue),-0.7px 0 1px var(--stereo-red),0 0 3px',
					},
					'35%': {
						textShadow: '4px 0 1px var(--stereo-blue),-4px 0 1px var(--stereo-red),0 0 3px',
					},
					'40%': {
						textShadow: '3.2px 0 1px var(--stereo-blue),-3.2px 0 1px var(--stereo-red),0 0 3px',
					},
					'45%': {
						textShadow: '2px 0 1px var(--stereo-blue),-2px 0 1px var(--stereo-red),0 0 3px',
					},
					'50%': {
						textShadow: '0.08px 0 1px var(--stereo-blue),-0.08px 0 1px var(--stereo-red),0 0 3px',
					},
					'55%': {
						textShadow: '2.3px 0 1px var(--stereo-blue),-2.3px 0 1px var(--stereo-red),0 0 3px',
					},
					'60%': {
						textShadow: '2px 0 1px var(--stereo-blue),-2px 0 1px var(--stereo-red),0 0 3px',
					},
					'65%': {
						textShadow: '3px 0 1px var(--stereo-blue),-3px 0 1px var(--stereo-red),0 0 3px',
					},
					'70%': {
						textShadow: '0.5px 0 1px var(--stereo-blue),-0.5px 0 1px var(--stereo-red),0 0 3px',
					},
					'75%': {
						textShadow: '2px 0 1px var(--stereo-blue),-2px 0 1px var(--stereo-red),0 0 3px',
					},
					'80%': {
						textShadow: '0.08px 0 1px var(--stereo-blue),-0.08px 0 1px var(--stereo-red),0 0 3px',
					},
					'85%': {
						textShadow: '0.1px 0 1px var(--stereo-blue),-0.1px 0 1px var(--stereo-red),0 0 3px',
					},
					'90%': {
						textShadow: '3.5px 0 1px var(--stereo-blue),-3.5px 0 1px var(--stereo-red),0 0 3px',
					},
					'95%': {
						textShadow: '2.2px 0 1px var(--stereo-blue),-2.2px 0 1px var(--stereo-red),0 0 3px',
					},
					'100%': {
						textShadow: '2.7px 0 1px var(--stereo-blue),-2.7px 0 1px var(--stereo-red),0 0 3px',
					},
				},
				'svg-stereo': {
					'0%': {
						filter: 'drop-shadow(0.4px 0 1px var(--stereo-blue)) drop-shadow(-0.4px 0 1px var(--stereo-red))',
					},
					'5%': {
						filter: 'drop-shadow(3px 0 1px var(--stereo-blue)) drop-shadow(-3px 0 1px var(--stereo-red))',
					},
					'10%': {
						filter: 'drop-shadow(0.03px 0 1px var(--stereo-blue)) drop-shadow(-0.03px 0 1px var(--stereo-red))',
					},
					'15%': {
						filter: 'drop-shadow(0.4px 0 1px var(--stereo-blue)) drop-shadow(-0.4px 0 1px var(--stereo-red))',
					},
					'20%': {
						filter: 'drop-shadow(3.5px 0 1px var(--stereo-blue)) drop-shadow(-3.5px 0 1px var(--stereo-red))',
					},
					'25%': {
						filter: 'drop-shadow(1.5px 0 1px var(--stereo-blue)) drop-shadow(-1.5px 0 1px var(--stereo-red))',
					},
					'30%': {
						filter: 'drop-shadow(0.7px 0 1px var(--stereo-blue)) drop-shadow(-0.7px 0 1px var(--stereo-red))',
					},
					'35%': {
						filter: 'drop-shadow(4px 0 1px var(--stereo-blue)) drop-shadow(-4px 0 1px var(--stereo-red))',
					},
					'40%': {
						filter: 'drop-shadow(3.2px 0 1px var(--stereo-blue)) drop-shadow(-3.2px 0 1px var(--stereo-red))',
					},
					'45%': {
						filter: 'drop-shadow(2px 0 1px var(--stereo-blue)) drop-shadow(-2px 0 1px var(--stereo-red))',
					},
					'50%': {
						filter: 'drop-shadow(0.08px 0 1px var(--stereo-blue)) drop-shadow(-0.08px 0 1px var(--stereo-red))',
					},
					'55%': {
						filter: 'drop-shadow(2.3px 0 1px var(--stereo-blue)) drop-shadow(-2.3px 0 1px var(--stereo-red))',
					},
					'60%': {
						filter: 'drop-shadow(2px 0 1px var(--stereo-blue)) drop-shadow(-2px 0 1px var(--stereo-red))',
					},
					'65%': {
						filter: 'drop-shadow(0.5px 0 1px var(--stereo-blue)) drop-shadow(-0.5px 0 1px var(--stereo-red))',
					},
					'70%': {
						filter: 'drop-shadow(2px 0 1px var(--stereo-blue)) drop-shadow(-2px 0 1px var(--stereo-red))',
					},
					'75%': {
						filter: 'drop-shadow(0.5px 0 1px var(--stereo-blue)) drop-shadow(-0.5px 0 1px var(--stereo-red))',
					},
					'80%': {
						filter: 'drop-shadow(0.08px 0 1px var(--stereo-blue)) drop-shadow(-0.08px 0 1px var(--stereo-red))',
					},
					'85%': {
						filter: 'drop-shadow(0.1px 0 1px var(--stereo-blue)) drop-shadow(-0.1px 0 1px var(--stereo-red))',
					},
					'90%': {
						filter: 'drop-shadow(3.5px 0 1px var(--stereo-blue)) drop-shadow(-3.5px 0 1px var(--stereo-red))',
					},
					'95%': {
						filter: 'drop-shadow(0.5px 0 1px var(--stereo-blue)) drop-shadow(-0.5px 0 1px var(--stereo-red))',
					},
					'100%': {
						filter: 'drop-shadow(0.4px 0 1px var(--stereo-blue)) drop-shadow(-0.4px 0 1px var(--stereo-red))',
					},
				},

				moving: {
					'0%': {
						top: '-200%',
					},
					'100%': {
						top: '200%',
					},
				},
				blink: {
					'0%': {
						backgroundColor: 'green',
					},
					'100%': {
						backgroundColor: 'white',
					},
				},
			},
			animation: {
				'text-stereo': 'stereo 4s infinite',
				'svg-stereo': 'svg-stereo 4s infinite',
				'line-moving': 'moving 15s -3s infinite',
				'color-blink': '2s step(4, end) 5 forwards',
			},
			boxShadow: {
				button:
					'0px 3px 0px 0px rgb(34,34,34), 0px 7px 10px 0px rgb(17,17,17), inset 0px 1px 1px 0px rgba(250, 250, 250, .2), inset 0px -12px 35px 0px rgba(0, 0, 0, .5)',
				buttonAfter: '0px 1px 0px 0px rgba(250,250,250,0.1), inset 0px 1px 2px rgba(0, 0, 0, 0.5)',
				buttonActive:
					'0px 0px 0px 0px rgb(34,34,34), 0px 3px 7px 0px rgb(17,17,17),inset 0px 1px 1px 0px rgba(250, 250, 250, .2), inset 0px -10px 35px 5px rgba(0, 0, 0, .5)',
			},
		},
		backgroundSize: {
			small: '50rem',
		},
	},
	plugins: [],
};
