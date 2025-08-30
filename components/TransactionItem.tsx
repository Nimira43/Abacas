import { Transaction } from '@/types/Transaction'
import { addCommas } from '@/lib/utils'
import { toast } from 'react-toastify'

const TransactionItem = ( { transaction}: {
  transaction: Transaction
}) => {
  const sign = transaction.amount < 0 ? '-' : '+'

  return ( 
    <li className={
      transaction.amount < 0
      ? 'minus'
      : 'plus'
    }>
      {transaction.text} 
      <span>
        {sign}£{addCommas(Math.abs(transaction.amount))}
      </span>
      <button 
        onClick={ () => handleDeleteTransaction(transaction.id) }
        className='delete-btn'
      >
      X
      </button>
    </li>
   )
}
 
export default TransactionItem