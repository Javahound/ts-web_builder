import Header from '../components/Header.Module'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import bootstrap from 'bootstrap'

export default function Home() {
  return (
    <>
    <Head>
      <title>TS Website Builder</title>
    </Head>
      <Header />
    </>
  )
}
