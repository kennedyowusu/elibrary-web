import React from 'react'
import RequestedBooksImage from '../../assets/rich-dad-poor-dad.png'

const RequestedBooks = () => {
  return (
    <section>
    <article>
     <img src={RequestedBooksImage} alt="Rich Dad Poor Dad"
     style={{width: '100%', height: '100%'}}
      className="img-fluid img-thumbnail rounded mx-auto d-block mt-5    "
     />
      </article>
    </section>
  )
}

export default RequestedBooks
