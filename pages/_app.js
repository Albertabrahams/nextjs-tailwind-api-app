import { Provider } from '../context'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  <div>
  <Provider>
  return <Component {...pageProps} />
  </Provider>
  </div>
}

export default MyApp
