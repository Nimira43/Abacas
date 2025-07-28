import getUserBalance from '@/app/actions/getUserBalance'
import { addCommas } from '@/lib/utils'

const Balance = async () => {
  const { balance } = await getUserBalance()
  
  return (  
    <>
      <h4 className='uppercase centre mb primary'>Your Balance</h4>
      <h1 className='centre mb'>£{addCommas(balance ?? 0)}</h1>
    </>
  )
}
 
export default Balance