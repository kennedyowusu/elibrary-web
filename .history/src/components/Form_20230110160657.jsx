import React from 'react'
import Button from './Button'
import InputType from './InputType'

const Form = ({
}) => {
 return (
   <form action='' className='flex flex-col gap-4'>
     
     <InputType
       className='p-2 rounded border mt-8'
       type='email'
       name='email'
       placeholder='Email Address'
     />

     <InputType
       className='p-2 rounded border'
       type='password'
       name='password'
       placeholder='Password'
     />

     {/* <button className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'>
              Login
            </button> */}
     {/* <Link to='/dashboard' />  */}
     <Button
       title='Login'
       type='submit'
       className='bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold'
     />
   </form>
 )
}

export default Form
