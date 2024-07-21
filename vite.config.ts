import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

import path from 'path';

const cherryPickedKeys = [
  'REACT_APP_SUPERBASE_API_URL',
  'REACT_APP_SUPERBASE_API_TOKEN',
];
type varsList = typeof cherryPickedKeys;
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {} as { [key in varsList[number]]: string };
  cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]));
  return {
    define: {
      'process.env': processEnv,
    },
    plugins: [TanStackRouterVite(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '@features': `${path.resolve(__dirname, './src/features/')}`,
        '@components': `${path.resolve(__dirname, './src/components/')}`,
        '@store': `${path.resolve(__dirname, './src/store/')}`,
        '@routes': `${path.resolve(__dirname, './src/routes/')}`,
      },
    },
  };
});
