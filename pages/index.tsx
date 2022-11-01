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
      <h2 className='max-w-[60%] text-center mx-auto my-[20%]'>Info about this project will follow &nbsp; For now only the &apos;Open App&apos; button will open the (at this point) non Working editor</h2>
    </>
  )
}
