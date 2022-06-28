import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
	],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@images': path.resolve(__dirname, './src/images'),
			'@pages': path.resolve(__dirname, './src/pages'),
		},
	},
});
