import React, { useState } from "react"
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../server/auth"
import { ProviderButton } from "~/components"
import Link from "next/link"
import SignUpForm from "~/components/pages/auth/SignUpForm"
import { Checkbox, Input, RadioButton } from "~/components/ui"
import { Button } from "~/components/ui/Button"

import { AiOutlineGoogle } from 'react-icons/ai'

function signup({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isChecked, setIsChecked] = useState(false) //example
  const [label1, setLabel1] = useState('') //example
  const [label2, setLabel2] = useState('') //example
  const [email, setEmail] = useState('') //example
  const [password, setPassword] = useState('') //example
  const [repeatPassword, setRepeatPassword] = useState('') //example
  return (
    <div
      className="flex flex-col items-center w-[456px] max-w-[80vw] mx-auto px-4 py-2 rounded-[12px] 
    tablet:px-6 tablet:py-4 laptop:px-10 laptop:py-6 space-y-4 bg-secondary ">
      <h1 className="text-md font-bold text-primary">Register</h1>
      <SignUpForm />
      {/* usage example - start*/}
      <Checkbox label="label" onChange={() => setIsChecked(isChecked => !isChecked)} isChecked={isChecked} />
      <p>{isChecked ? 'checked' : '!checked'}</p>
      <RadioButton label="label1" inputName="input-name1" onChange={e => setLabel1(e.target.value)} />
      <RadioButton label="label2" inputName="input-name1" onChange={e => setLabel1(e.target.value)} />
      <RadioButton label="label3" inputName="input-name2" onChange={e => setLabel2(e.target.value)} />
      <RadioButton label="label4" inputName="input-name2" onChange={e => setLabel2(e.target.value)} />
      <p>{label1 == 'label1' ? 'do stuff 1' : 'do stuff 2'}</p>
      <p>{label2}</p>
      <Input placeholder="Email" type='email' value={email} onChange={e => setEmail(e.target.value)} />
      <Input placeholder="Password" type='password' value={password} onChange={e => setPassword(e.target.value)} />
      <Input placeholder="Repeat password" type='password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
      <p>Email:{email}</p>
      <p>Pasword:{password}</p>
      <p>Repeat password:{repeatPassword}</p>
      <Button variant='continue-with'>
        Continue with Google
        <AiOutlineGoogle className='text-secondary' size={42} />
      </Button>
      <Button variant='cta'>cta</Button>
      <Button variant='cta-danger'>cta-danger</Button>
      <Button variant='cta-success'>cta-success</Button>
      <Button variant='link'>link</Button>
      <Button variant='nav-link' active='active'>nav-link active</Button>
      <Button variant='nav-link' active='inactive'>nav-link inactive</Button>
      {/* usage example - end*/}
      <p className="font-bold">or</p>
      {Object.values(providers).map(provider => (
        <ProviderButton provider={provider} key={provider.id} />
      ))}
      <p>
        Already have an account?{" "}
        <span className="text-cta">
          <Link href="./signin">{""}Login</Link>
        </span>
      </p>
    </div>
  )
}

export default signup

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
