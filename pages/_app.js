// import '../styles/globals.css';
// import '../styles/reset.css';
import { Provider } from 'react-redux';
import store from '../src/store/index.js';
function MyApp({ Component, pageProps }) {
  console.log('stroestore');
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
