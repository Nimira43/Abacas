import Guest from '@/components/Guest'
import { currentUser } from '@clerk/nextjs/server'

const HomePage = async () => {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h1 className='logo-main'>Abacus</h1>
      <p>Expense Tracking Application</p>
    </main>
  )
}

export default HomePage




