import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Provider store={store}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
