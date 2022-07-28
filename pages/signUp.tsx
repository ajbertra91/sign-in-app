import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import layoutStyles from '../styles/Layout.module.scss';
// import styles from '../styles/SignUp.module.scss';
import AjbButton from './components/AjbButton';
import AjbInput from './components/AjbInput';

const WelcomeBack: NextPage = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPwCorrect, setIsPwCorrect] = useState<boolean | null>(null);

  const handleClick = () => {
    console.log('sign up clicked: ')
    console.log('fullName: ', fullName);
    console.log('email: ', email);
    console.log('password: ', password);
    if (isPwCorrect) {
      console.log(isPwCorrect)
    } else {
      console.log(isPwCorrect)
    }
  }

  const confirmPassword = (str: string): void => {
    if (password) {
      const result = str === password;
      setIsPwCorrect(result);
    } else {
      setIsPwCorrect(null);
    }
  }

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
          <AjbInput label={'Full Name'} type={'text'} cb={(val) => setFullName(val)}></AjbInput>
          <AjbInput label={'Email'} type={'email'} cb={(val) => setEmail(val)}></AjbInput>
          <AjbInput label={'Password'} type={'password'} cb={(val) => setPassword(val)}></AjbInput>
          <AjbInput label={'Confirm Password'} type={'password'} cb={(val) => confirmPassword(val)}></AjbInput>

          <AjbButton text={'Sign Up'} cb={() => handleClick()}></AjbButton>
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
