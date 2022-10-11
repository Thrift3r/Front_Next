import Head from "next/head"
import Footer from "./Footer"

import Header from "./Header"

const Layout = ({title, children}) => {
  return (
    <>
      <Head>
        <title>Thrift3r - {title}</title>
        <meta name="description" content="Buscador de productos de segunda mano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
