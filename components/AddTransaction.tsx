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

        </div>
      </form>
    </>
   )
}
 
export default AddTransaction