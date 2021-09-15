import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/dist/client/router'

import UserType from '@github-profiles/types/UserType'
import { setUser } from '@github-profiles/store/slices/user'
import { Footer } from '@github-profiles/components/Footer'
import { useAppDispatch } from '../../store/hooks'

import styles from '../../styles/Home.module.css'

type UserPageProps = {
  user: UserType
}

interface GetStaticPropsParams extends ParsedUrlQuery {
  login: string
}

const UserPage = ({ user }: UserPageProps) => {
  const { isFallback, replace, query } = useRouter()
  const [login, setLogin] = useState<string | string[]>(query.login ?? '')
  const dispatch = useAppDispatch()

  if (isFallback || !user) {
    return <p>Loading...</p>
  }

  const onEnter = (event: KeyboardEvent) => {
    const isEnterKey = event.code === 'Enter' || event.code === 'NumpadEnter'

    if (isEnterKey) {
      replace(`${login}`)
    }
  }

  const onLoginChange = (event: ChangeEvent<HTMLInputElement>) =>
    setLogin(event.target.value)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(setUser({ user }))
  }, [dispatch, user])

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {user.login} ({user.name})
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <input
          className={styles.search}
          placeholder="Search..."
          type="text"
          onKeyUp={onEnter}
          onChange={onLoginChange}
          value={login}
        />
        <a href="/" title="Go to homepage">
          <Image
            className={styles.avatar}
            src={user.avatar_url}
            alt={user.name ?? user.login}
            width={35}
            height={35}
          />
        </a>
      </header>

      <main className={styles.main}>
        <Image
          className={styles.avatar}
          src={user.avatar_url}
          alt={user.name ?? user.login}
          width={250}
          height={250}
        />
        <h1 className={styles.title}>{user.login}</h1>
        <ul className={styles.card}>
          {Object.entries(user).map(([key, value]) => (
            <li key={key}>{`${key}: ${value ?? '-'}`}</li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { login } = params as GetStaticPropsParams

  const res = await fetch(`${process.env.API_URL}/users/${login}`)
  const user = await res.json()

  return {
    props: {
      user
    },
    revalidate: 10
  }
}
// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const paths = [
    'mtsdalmolin',
    'nathansantanna',
    'yyx990803',
    'geerlingguy',
    'torvalds',
    'tannerlinsley',
    'geohot',
    'rauchg'
  ].map(login => ({
    params: { login }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export default UserPage
