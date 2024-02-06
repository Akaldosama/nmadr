import React from 'react'
import { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation } from './BooksSlice'
import { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../all.css'

export default function Books() {
  const {data: book} = useGetBooksQuery()

  const [addBook] = useAddBookMutation()
  const [updateBook] = useUpdateBookMutation()
  const [deleteBook] = useDeleteBookMutation() 

  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState('')

  const id = +window.location.href.split("/")[4];
  console.log(id)

  const [name, setName] = useState('')
  const [author_id, setAuthorid] = useState('')
  const [price, setPrice] = useState('')
  const [code, setCode] = useState('')
  const [janr_id, setJanrid] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')


  const toggle = () => {
    setModal(false)
    setEdit('')
  }

  // const openEditModal = (item) => {
  //   setEdit(item)
  //   setModal(true)
  // }

  const handleAddBook = (e) => {
    e.preventDefault()
    let payload ={
        // name: name ? name : edit.name,
        // author_id: author_id ? author_id : edit.author_id,
        // price: price ? price : edit.price,
        // code: code ? code : edit.code,
        // janr_id: janr_id ? janr_id : edit.janr_id,
        // image: image ? image : edit.image,
        // description: description ? description : edit.description
        name: name,
        author_id: author_id,
        price: price,
        code: code,
        janr_id: janr_id,
        image: image,
        description: description
    }
    addBook({...payload})
    // if(edit  !== ''){
    //     updateBook({...payload, id: edit.id})
    // }else{
    //     addBook({...payload})
    // }
    toggle()
}

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          Add Product
        </ModalHeader>
        <ModalBody>
          <form id='addForm' onSubmit={handleAddBook}>
            <input type="text" placeholder='Name' defaultValue={edit.name} onChange={(e) => setName(e.target.value)} className='form-control my-2' />
            <input type="text" placeholder='Author id' defaultValue={edit.author_id} onChange={(e) => setAuthorid(e.target.value)} className='form-control my-2' />
            <input type="text" placeholder='Price' defaultValue={edit.price} onChange={(e) => setPrice(e.target.value)} className='form-control my-2' />
            <input type="file" placeholder='Code' defaultValue={edit.image} onChange={(e) => setCode(e.target.value)} className='form-control my-2' />
          </form>
        </ModalBody>
        <ModalFooter>
          <button type='submit' form='addForm' className='btn btn-success'>Add</button>
        </ModalFooter>
      </Modal>
          <button className='btn btn-primary my-2' onClick={() => setModal(true)}>Add Product</button>
        <div className="parent">
          {
            book?.map((item, index) => {
              return <div className="child" key={index}>
                <img src={item.image} alt="" className='image'/>
                <p>{item.price}</p>
                <h4>{item.name}</h4>
                <Link to={`/single_book/${item.id}`}>More details</Link>
              </div>
            })
          }
        </div>
     </div>
  )
}
