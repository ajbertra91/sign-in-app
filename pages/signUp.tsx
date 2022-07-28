import type { NextPage } from 'next';
import Head from 'next/head';
import layoutStyles from '../styles/Layout.module.scss';
import styles from '../styles/SignUp.module.scss';
import AjbButton from './components/AjbButton';
import AjbInput from './components/AjbInput';

const WelcomeBack: NextPage = () => {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Sign In to Your Account</title>
        <meta name="description" content="Sign In to Your Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={layoutStyles.main}>
        <h1 className={layoutStyles.title}>Create Your Account</h1>

        <div className={layoutStyles.grid}>
          <AjbInput label={'Full Name'} type={'text'}></AjbInput>
          <AjbInput label={'Email'} type={'email'}></AjbInput>
          <AjbInput label={'Password'} type={'password'}></AjbInput>
          <AjbInput label={'Confirm Password'} type={'password'}></AjbInput>
          <AjbButton href={'signUp'} text={'Sign Up'}></AjbButton>
        </div>
      </main>

      <footer className={layoutStyles.footer}>
        Have an account?
        <a
          href="signIn"
          rel="noopener noreferrer"
        >
          Sign in
        </a>
      </footer>
    </div>
  )
}

export default WelcomeBack
