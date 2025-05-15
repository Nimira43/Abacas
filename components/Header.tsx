import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Header = () => {
  return ( 
    <nav className='navbar'>
      <div className="navbar-container">
        <h2 className='logo'>Abacus</h2>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
   )
}
 
export default Header