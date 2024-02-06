import React from 'react'
import { useGetBooksQuery } from './BooksSlice'

export default function SingleBook() {
  const {data: book} = useGetBooksQuery()
  return (
    <div>
        <div className="wrapper">
          {
            book?.map((item, index) => {
              return <div className="parent" key={index}>
                <div className="child">
                  <img src={item.image} alt="" />
                </div>
                <div className="child">
                  <h3>{item.name}</h3>
                  <p>{item.author_id}</p>
                  <mark>{item.price}</mark>
                  <p>{item.description}</p>
                </div>
              </div>
            })
          }
        </div>
    </div>
  )
}
