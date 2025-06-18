'use client'

const AddTransaction = () => {
  const clientAction = async(formData: FormData) => {
    console.log(
      formData.get('text'),
      formData.get('amount')
    )
  }
  
  return ( 
    <>
      <h3>Add Tranaction</h3>
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
      </form>
    </>
   )
}
 
export default AddTransaction