import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
// import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import BookList from '../components/user/BookList';
import ContentHome from '../components/user/ContentHome';
import NavBar from '../components/user/NavBar';
import UserLayout from '../components/user/UserLayout';
import Card from '../components/user/Card'
// import styles from '../styles/Home.module.css'

export default function Home() {
  // const { data: session} = useSession();

  // useEffect(()=>{
  //   if (session == null) return;
  //   console.log('session.jwt', session.jwt);

  // }, [session]);
  return (
    <>
      <div className="text-center">
          <NavBar/>
          <ContentHome/>
          <BookList/>
          
      </div>
    </>
    // <UserLayout>
    //   <div className="container mt-4">
    //     <Head>
    //       <title>Strapi - Next - NextAuth</title>
    //     </Head>

    //     {session ? (
    //       <div>
    //         <h1>Authenticated</h1>
    //         <div style={{marginBottom: 10}}>
    //           <h3>Session Data</h3>
    //           <div>Email: {session.user.email}</div>
    //           <div>JWT from Strapi : Check console</div>
    //           <div>{session.maxAge}</div>
    //         </div>
    //       </div>
    //     ) : <h1>Not Authenticated</h1>}

    //     {session ? (
    //       <button className='btn btn-danger' onClick={signOut}>Sign Out</button>

    //     ):(
    //       <div>
    //         <Link href="/auth/sign-in">
    //           <button className='btn btn-success'>Sign In</button>
    //         </Link>
    //         <Link href="/auth/sign-up">
    //           <button className='btn btn-primary ms-2'>Sign Up</button>
    //         </Link>
    //       </div>
    //     )} <hr />

    //     <div>
    //       <Link href="/protected">
    //         <a className='ms-2 mt-4'> Protected Page</a>
    //       </Link>
    //       <Link href="/admin/siswa-gql/datasiswa">
    //         <a className='ms-2 mt-4'>Data Siswa</a>
    //       </Link>
    //     </div>
    //   </div>
    // </UserLayout>
  )
}
