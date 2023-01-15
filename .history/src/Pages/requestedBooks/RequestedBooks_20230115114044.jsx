import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

const RequestedBooks = () => {
  return (
    <section>
      <article>
        <Link to=''>
          <img
            src={RequestedBooksImage}
            alt='Rich Dad Poor Dad'
            style={{ width: '10%', height: '10%' }}
            className='img-fluid img-thumbnail rounded mx-auto d-block mt-5 mb-5    '
          />
     </Link>
     <div>
      <h3 className='text-center text-3xl mb-2'>Rich Dad Poor Dad</h3>
      <div>
        <TextField
          id=""
          label=""
          variant="standard"
          color="primary"
          margin="none"
          sizes="small"
          value={}
          onChange={}
          
        />
      </div>
      <div></div>
     </div>
      </article>
    </section>
  )
}

export default RequestedBooks
