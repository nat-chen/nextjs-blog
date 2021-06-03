import Head from "next/head";
// import 'styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="frank">
      <Head>
        <title>123</title>
      </Head>
      <Component { ...pageProps } />
    </div>
  );
}