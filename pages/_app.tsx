// _app.js

import Layout from "../Layout/layout"
const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App
