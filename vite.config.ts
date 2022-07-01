import path from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
	],
	resolve: {
		alias: {
			'@components': path.resolve(dirname, './src/components'),
			'@constants': path.resolve(dirname, './src/constants'),
			'@helpers': path.resolve(dirname, './src/helpers'),
			'@images': path.resolve(dirname, './src/images'),
			'@pages': path.resolve(dirname, './src/pages'),
		},
	},
});
