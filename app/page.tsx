import AddTransaction from '@/components/AddTransaction'
import Guest from '@/components/Guest'
import { currentUser } from '@clerk/nextjs/server'
import Balance from '@/components/Balance'

const HomePage = async () => {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <AddTransaction />
    </main>
  )
}

export default HomePage




