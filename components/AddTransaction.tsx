'use client'
    
import { useRef } from 'react'
import addTransaction from '@/app/actions/addTransaction'
import { toast } from 'react-toastify'

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const clientAction = async(formData: FormData) => {
    const {data, error} = await addTransaction(formData)
  
    if (error) {
      toast.error(error)
    } else {
      toast.success('Transaction added.')
      formRef.current?.reset()
    }
  }
  
  return ( 
    <>
      <h3 className='uppercase centre primary'>Add Transaction</h3>
      <form 
        ref={formRef}
        action={clientAction}
      >
        <div className='formControl'>
          <label htmlFor='text'>Text</label>
          <input 
            type='text' 
            id='text' 
            name='text' 
            placeholder='Enter text...' 
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount </label>
          <input 
            type='number' 
            id='amount' 
            name='amount' 
            placeholder='Enter mount...' 
            step='0.01'
          />
        </div>
        <button className='submit-btn'>Submit</button>
      </form>
    </>
   )
}
 
export default AddTransaction