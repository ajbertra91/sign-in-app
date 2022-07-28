import type { NextPage } from 'next';
import Head from 'next/head';
import layoutStyles from '../styles/Layout.module.scss';
import styles from '../styles/SignIn.module.scss';
import AjbButton from './components/AjbButton';
import AjbInput from './components/AjbInput';

const WelcomeBack: NextPage = () => {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Create Your Account</title>
        <meta name="description" content="Create Your Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={layoutStyles.main}>
        <h1 className={layoutStyles.title}>Create Your Account</h1>

        <div className={layoutStyles.grid}>
          <AjbInput label={'Email'} type={'email'}></AjbInput>
          <AjbInput label={'Password'} type={'password'}></AjbInput>
          <p><a href="forgotPassword">Forgot Password?</a></p>
          <AjbButton href={'signIn'} text={'Sign In'}></AjbButton>
        </div>
      </main>

      <footer className={layoutStyles.footer}>
        Don&apos;t have an account?
        <a
          href="signUp"
          rel="noopener noreferrer"
        >
          Sign up
        </a>
      </footer>
    </div>
  )
}

export default WelcomeBack
