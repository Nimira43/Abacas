import getIncomeExpense from '@/app/actions/getIncomeExpense'

const IncomeExpense = () => {
  return ( 
    <div className='inc-exp-container'>
      <div>
        <h4 className='uppercase'>Income</h4>
        <p className='money plus'>£342</p>
      </div>
      <div>
        <h4 className='uppercase'>Expenses</h4>
        <p className='money minus'>£122</p>
      </div>  
    </div>
  )
}
 
export default IncomeExpense