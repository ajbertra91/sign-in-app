import type { NextPage } from 'next';
import Head from 'next/head';
import layoutStyles from '../styles/Layout.module.scss';
import styles from '../styles/WelcomeBack.module.scss';
import AjbButton from './components/AjbButton';

const WelcomeBack: NextPage = () => {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Welcome Back</title>
        <meta name="description" content="Welcome back" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={layoutStyles.title}>Welcome Back</h1>

        <div className={layoutStyles.grid}>
          <AjbButton href={'signIn'} text={'Sign In'}></AjbButton>
          <AjbButton href={'signUp'} text={'Sign Up'}></AjbButton>
        </div>
      </main>

    </div>
  )
}

export default WelcomeBack
