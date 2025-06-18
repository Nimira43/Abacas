import { SignInButton } from '@clerk/nextjs'

const Guest = () => {
  return ( 
    <div className='guest'>
      <h1 className='logo-main'>Abacus</h1>
      <p>Please login to manage you expenses.</p>
      <SignInButton />
    </div>
   )
}
 
export default Guest