import { Transaction } from '@/types/Transaction'

const TransactionList = () => {
  return ( 
    <>
      <h3>Previous Transactions</h3>
      <ul className='list'>
        {transactions && 
          transactions.map(( 
            transaction: Transaction) => (
              <p>{ transaction.text}</p>
            )
          )
        }
      </ul>
    </>
   )
}
 
export default TransactionList