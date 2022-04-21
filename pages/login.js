import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import img from '../TWolves.png'
import Image from 'next/image'

function Login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-800">
      <Image className="mb-5 w-52" src={img} alt="Login Logo" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounded-full bg-emerald-700 p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Enter with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
