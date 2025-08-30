import getIncomeExpense from '@/app/actions/getIncomeExpense'
import { addCommas } from '@/lib/utils'

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense() 

  return ( 
    <div className='inc-exp-container'>
      <div>
        <h4 className='uppercase'>Income</h4>
        <p className='money plus'>£{ income }</p>
      </div>
      <div>
        <h4 className='uppercase'>Expenses</h4>
        <p className='money minus'>£{ expense }</p>
      </div>  
    </div>
  )
}
 
export default IncomeExpense