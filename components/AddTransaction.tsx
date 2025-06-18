'use client'

import addTransaction from '@/app/actions/addTransaction'

const AddTransaction = () => {
  const clientAction = async(formData: FormData) => {
    const {data, error} = await addTransaction(formData)
  
    if (error) {
      alert(error)
    } else {
      alert('Transaction Added')
      console.log(data)
    }
  }
  
  return ( 
    <>
      <h3 className='uppercase centre'>Add Transaction</h3>
      <form action={clientAction}>
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