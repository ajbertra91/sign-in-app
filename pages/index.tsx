import type { NextPage } from 'next';
import Head from 'next/head';
import layoutStyles from '../styles/Layout.module.scss';
import AjbButton from './components/AjbButton';

const WelcomeBack: NextPage = () => {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Welcome Back</title>
        <meta name="description" content="Welcome back" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={layoutStyles.main}>
        <h1 className={layoutStyles.title}>Welcome Back</h1>

        <div className={layoutStyles.grid}>
          <AjbButton type={'button'} text={'Sign In'}></AjbButton>
          <AjbButton type={'button'} text={'Sign Up'}></AjbButton>
        </div>
      </main>

      <footer className={layoutStyles.footer}>
        code can be found at
        <a
          href="https://github.com/ajbertra91/sign-in-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/ajbertra91/sign-in-app
        </a>
      </footer>
    </div>
  )
}

export default WelcomeBack
